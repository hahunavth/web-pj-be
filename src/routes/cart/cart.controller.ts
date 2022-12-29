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
  ValidationPipe,
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

@ApiTags('Cart (Generated)')
@Controller()
export class CartController {
  constructor(
    private readonly service: CartService,
    private prisma: PrismaService,
  ) {}

  /**
   * Get all
   */
  @Get('user-cart-list')
  @ApiOperation({ deprecated: true })
  @ApiGetAllQuery(UpdateUserCartDto)
  async findAll(
    @PaginateQuery() paginate: PaginateReqQueryT,
    @AttrQuery(UpdateUserCartDto) attrQuery,
    @TimeQuery() timeQuery,
  ) {
    return this.service.findAll(paginate, timeQuery, attrQuery);
  }

  /**
   * Get 1 user cart (list of product)
   */
  @Get('user/:user_id/cart')
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
   * create
   */
  @Post('user/:user_id/cart')
  create(
    @Body() createCreateUserCartDto: CreateUserCartDto,
    @Param(
      'user_id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    user_id: number,
  ) {
    return this.service.create(createCreateUserCartDto);
  }

  /**
   * update
   */
  @Patch('user/:user_id/cart/:product_id')
  update(
    @Param(
      'user_id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    user_id: number,
    @Body() uUpdateUserCartDto: UpdateUserCartDto,
  ) {
    return this.service.update(+user_id, uUpdateUserCartDto);
  }

  /**
   * delete 1 product
   */
  @Delete('user/:user_id/cart/:product_id')
  remove(
    @Param(
      'user_id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    user_id: number,
  ) {
    return this.service.remove(+user_id);
  }

  @Delete('user/:user_id/cart/:product_id')
  removeAll(
    @Param(
      'user_id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    user_id: number,
  ) {
    return this.service.remove(+user_id);
  }
}
