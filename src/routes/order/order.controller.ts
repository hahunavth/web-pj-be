import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import {
  ApiGetAllQuery,
  AttrQuery,
  PaginateQuery,
  TimeQuery,
} from '../../common/base/base.decorator';
import { PaginateReqQueryT } from '../../common/base/base.dto';
import { PrismaService } from '../../common/prisma/prisma.service';

import { OrderService } from './order.service';
import { OrderEntity } from '../../generated-dto/order/entities';
import {
  CreateOrderDto,
  UpdateOrderDto,
  ConnectOrderDto,
} from '../../generated-dto/order/dto';
import { CheckoutDto } from './dto/checkout.dto';
import * as deliveryMethods from './constants/delivery-methods.json';
import { AddressService } from '../address/address.service';
import { PayDto } from './dto/pay.dto';
import { CofnirmDto } from './dto/confirm.dto';

@ApiTags('Order')
@Controller('orders')
export class OrderController {
  constructor(
    private readonly service: OrderService,
    private prisma: PrismaService,
    private addressService: AddressService,
  ) {}

  @ApiOperation({ summary: 'for dev', deprecated: true })
  @Get()
  @ApiGetAllQuery(UpdateOrderDto)
  async findAll(
    @PaginateQuery() paginate: PaginateReqQueryT,
    @Query() attrQuery,
    @TimeQuery() timeQuery,
  ) {
    if (attrQuery['userId'])
      attrQuery['userId'] = Number.parseInt(attrQuery['userId']);

    return this.service.findAll(paginate, timeQuery, attrQuery);
  }

  @ApiOperation({ summary: 'for dev' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @ApiOperation({ summary: 'for dev', deprecated: true })
  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.service.create(createOrderDto);
  }

  @ApiOperation({ summary: 'for dev', deprecated: true })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.service.update(+id, updateOrderDto);
  }

  @ApiOperation({ summary: 'for dev', deprecated: true })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }

  @ApiOperation({
    summary: 'api đặt hàng',
    description:
      'Lấy dữ liệu giỏ hàng của ng dùng, tạo order, tạo orderItem, xóa giỏ hàng\n' +
      'delivery mehtod: standard, express, fast\n',
  })
  @Post('checkout')
  async checkout(@Body() connectOrderDto: CheckoutDto) {
    const {
      userId,
      cityCode,
      districtCode,
      wardCode,
      address,
      deliveryMethod,
    } = connectOrderDto;

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    const userCart = await this.prisma.userCart.findMany({
      where: { userId },
      include: { book: true },
    });

    if (!userCart.length) {
      throw new Error('Cart is empty');
    }

    const method = deliveryMethods.find(
      (method) => method.method === deliveryMethod,
    );

    if (!method) {
      throw new Error(
        'Invalid delivery method' +
          deliveryMethod +
          'require: ' +
          deliveryMethods.map((method) => method.method).join(', '),
      );
    }

    const strAddr = await this.addressService.getStringAddress(
      cityCode,
      districtCode,
      wardCode,
    );

    if (!strAddr || !address) {
      throw new Error('Invalid address');
    }

    const order = await this.prisma.order.create({
      data: {
        userId,
        address: address + strAddr,
        shippingFees: this.service.getShippingFee(
          cityCode,
          districtCode,
          wardCode,
          method.price,
        ),
      },
    });

    const orderItems = userCart.map((item) => ({
      orderId: order.id,
      bookId: item.bookId,
      quantity: item.quantity,
      price: item.book.price,
    }));

    await this.prisma.orderItem.createMany({
      data: orderItems,
    });

    await this.prisma.userCart.deleteMany({
      where: { userId },
    });

    return {
      data: { ...order, total: orderItems.reduce((a, b) => a + b.price, 0) },
    };
  }

  @ApiOperation({ summary: 'api thanh toán' })
  @Post('pay')
  async pay(@Body() body: PayDto) {
    const { orderId, paymentMethod, owner, cardCode, cvvCode, dateExpired } =
      body;

    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
    });

    if (!order) {
      throw new Error('Order not found');
    }

    const orderItems = await this.prisma.orderItem.findMany({
      where: { orderId },
    });

    if (!orderItems.length) {
      throw new Error('Order is empty');
    }

    const totalAmount = orderItems.reduce(
      (total, item) => total + item.price,
      0,
    );

    let card = await this.prisma.card.findFirst({
      where: {
        cardCode,
        dateExpired,
        cvvCode,
        owner,
      },
    });

    if (!card) {
      card = await this.prisma.card.create({
        data: {
          cardCode,
          dateExpired,
          cvvCode,
          owner,
        },
      });
    }

    // if (order.status !== 'pending') {
    //   throw new Error('Order is not pending');
    // }

    const paymentTransaction = await this.prisma.paymentTransaction.create({
      data: {
        content: 'Thanh toán đơn hàng',
        method: paymentMethod,
        cardId: card.id,
        // amount: totalAmount,
      },
    });

    if (!paymentTransaction) {
      throw new Error('Payment transaction failed');
    }

    const invoice = await this.prisma.invoice.create({
      data: {
        paymentTransactionId: paymentTransaction.id,
        totalAmount: totalAmount,
      },
    });

    await this.prisma.order.update({
      where: { id: orderId },
      data: {
        // status: 'paid',
        // paymentTransactionId: paymentTransaction.id,
        invoiceId: invoice.id,
      },
    });

    return {
      data: {
        ...order,
        total: totalAmount,
        paymentTransaction,
        invoice,
      },
    };
  }

  @ApiOperation({ summary: 'api confirm invoice for admin' })
  @Post('confirm')
  async confirm(@Body() body: CofnirmDto) {
    const { orderId, status } = body;

    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
    });

    if (!order) {
      throw new Error('Order not found');
    }

    if (order.status !== 'PENDING') {
      throw new Error('Order is not paid');
    }

    await this.prisma.order.update({
      where: { id: orderId },
      data: {
        status: 'CONFIRMED',
      },
    });

    return {
      data: {
        ...order,
        status: 'confirmed',
      },
    };
  }
}
