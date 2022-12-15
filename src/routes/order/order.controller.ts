import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

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

@ApiTags('Order (Generated)')
@Controller("order")
export class OrderController 
{
  constructor(
    private readonly service: OrderService,
    private prisma: PrismaService,
  ) {}

  @Get()
  @ApiGetAllQuery(UpdateOrderDto)
  async findAll(
    @PaginateQuery() paginate: PaginateReqQueryT,
    @AttrQuery(UpdateOrderDto) attrQuery,
    @TimeQuery() timeQuery,
  ) {
    return this.service.findAll(paginate, timeQuery, attrQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.service.create(createOrderDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.service.update(+id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}