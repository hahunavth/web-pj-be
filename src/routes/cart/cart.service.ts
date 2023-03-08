import { CRUDService } from '../../common/base/crud.service';
import { PrismaService } from '../../common/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { UserCartEntity } from '../../generated-dto/user-cart/entities';
import {
  CreateUserCartDto,
  UpdateUserCartDto,
  ConnectUserCartDto,
} from '../../generated-dto/user-cart/dto';
import { paginateResponse } from 'src/common/base/response.mapper';
import { KV, PaginateReqQueryT } from 'src/common/base/base.dto';
import { TimeQueryT } from 'src/common/base/base.decorator';

@Injectable()
export class CartService extends CRUDService<
  UserCartEntity,
  CreateUserCartDto,
  UpdateUserCartDto
> {
  constructor(private prisma: PrismaService) {
    super(prisma.userCart, prisma);
  }

  public findCardByUserId(user_id: number) {
    return this.prisma.userCart.findMany({
      where: {
        userId: user_id,
      },
      include: {
        book: {
          select: {
            coverUrl: true,
            title: true,
            price: true,
          },
        },
      },
    });
  }

  public async findAll(
    paginate: PaginateReqQueryT,
    timeQuery?: TimeQueryT,
    attrQuery?: KV,
    orderBy?: KV,
  ) {
    const where = {
      ...attrQuery,
      ...timeQuery?.where,
    };

    const findManyPromise = this.prisma.userCart.findMany({
      skip: paginate.offset,
      take: paginate.limit,
      where,
      orderBy,
      include: {
        book: true,
      },
    });
    const countPromise = this.prisma.userCart.count({ where });

    const [data, total] = await this.__prisma.$transaction([
      findManyPromise,
      countPromise,
    ]);

    return paginateResponse({
      count: data?.length,
      data,
      startAt: timeQuery?.startAt,
      endAt: timeQuery?.endAt,
      ...paginate,
      filter: attrQuery,
      orderBy,
      total,
    });
  }
}
