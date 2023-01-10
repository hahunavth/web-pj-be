import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import {
  ApiGetAllQuery,
  AttrQuery,
  PaginateQuery,
  TimeQuery,
} from '../../common/base/base.decorator';
import { paginateResponse } from 'src/common/base/response.mapper';

import { PaginateReqQueryT } from '../../common/base/base.dto';
import { PrismaService } from '../../common/prisma/prisma.service';

import { CartService } from './cart.service';
import { UserCartEntity } from '../../generated-dto/user-cart/entities';
import {
  CreateUserCartDto,
  UpdateUserCartDto,
  ConnectUserCartDto,
} from '../../generated-dto/user-cart/dto';
import { SetUserCartDto } from './dto/SetUserCartDto';
import { count } from 'console';

@ApiTags('Cart')
@Controller()
export class CartController {
  constructor(
    private readonly service: CartService,
    private prisma: PrismaService,
  ) {}

  /**
   * Get all
   */
  @ApiOperation({
    summary: 'Get cart of all user',
  })
  @Get('user-cart-list')
  @ApiOperation({ deprecated: true })
  @ApiGetAllQuery(UpdateUserCartDto)
  async findAll(
    @PaginateQuery() paginate: PaginateReqQueryT,
    @AttrQuery(UpdateUserCartDto) attrQuery,
    @TimeQuery() timeQuery,
  ) {
    const list = await this.prisma.user.findMany({
      skip: paginate.offset,
      take: paginate.limit,
      where: {
        ...attrQuery,
        ...timeQuery.where,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        UserCart: true,
      },
    });
    return paginateResponse({
      data: list,
      count: list.length,
      message: 'Get all',
    });
  }

  /**
   * Get 1 user cart (list of product)
   */
  @ApiOperation({
    summary: 'Get 1 user cart (list of product_id and quantity)',
  })
  @Get('users/:user_id/cart')
  async findOne(
    @Param(
      'user_id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    user_id: number,
  ) {
    const data = await this.service.findCardByUserId(user_id);
    return paginateResponse({
      data,
      count: data.length,
      message: 'cart userid=' + user_id,
    });
  }

  /**
   * set user cart
   */
  @ApiOperation({
    summary: 'Set lại toàn bộ giỏ hàng của 1 người dùng',
  })
  @Put('users/:user_id/cart/')
  async set(
    @Body() setuserCartDto: any,
    @Param(
      'user_id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    userId: number,
  ) {
    // delete all with user id
    this.prisma.userCart.deleteMany({
      where: { userId },
    });
    //
    const data = setuserCartDto.data
      ?.map((item) => {
        return { ...item, userId };
      })
      .map((item) =>
        this.prisma.userCart.upsert({
          create: item,
          update: {
            quantity: {
              increment: item.quantity,
            },
          },
          where: {
            userId_bookId: {
              bookId: item.bookId,
              userId: item.userId,
            },
          },
        }),
      );

    const list = await Promise.all(data);

    // create many
    return paginateResponse({ data, count: list?.length });
  }

  /**
   * add book to cart
   */
  @ApiOperation({
    summary: 'Tạo hoặc tăng thêm số lượng của sản phẩm trong giỏ hàng',
  })
  @Post('users/:user_id/cart/:book_id')
  create(
    @Body() createCreateUserCartDto: CreateUserCartDto,
    @Param(
      'user_id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    userId: number,
    @Param(
      'book_id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    bookId: number,
  ) {
    return this.prisma.userCart.upsert({
      create: {
        userId,
        ...createCreateUserCartDto,
        bookId,
      },
      update: {
        quantity: {
          increment: createCreateUserCartDto.quantity,
        },
      },
      where: {
        userId_bookId: {
          bookId,
          userId,
        },
      },
    });
  }

  /**
   * update
   */
  @ApiOperation({ summary: 'Cập nhật số lượng 1 loại sách trong giỏ hàng' })
  @Patch('users/:user_id/cart/:book_id')
  update(
    @Param(
      'user_id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    userId: number,
    @Param(
      'book_id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    bookId: number,
    @Body() updatedData: UpdateUserCartDto,
  ) {
    return this.prisma.userCart.update({
      where: { userId_bookId: { bookId, userId } },
      data: updatedData,
    });
  }

  /**
   * delete 1 product
   */
  @ApiOperation({ summary: 'Xóa 1 sp trong giỏ hàng của 1 ng dùng' })
  @Delete('users/:user_id/cart/:book_id')
  remove(
    @Param(
      'user_id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    userId: number,
    @Param(
      'book_id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    bookId: number,
  ) {
    return this.prisma.userCart.delete({
      where: {
        userId_bookId: { userId, bookId },
      },
    });
  }

  /**
   * Delete all product in cart of 1 user
   */
  @ApiOperation({ summary: 'Xóa tất cả sản phẩm trong giỏ hàng của 1 ng dùng' })
  @Delete('users/:user_id/cart/')
  removeAll(
    @Param(
      'user_id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    userId: number,
  ) {
    return this.prisma.userCart.deleteMany({
      where: { userId },
    });
  }
}
