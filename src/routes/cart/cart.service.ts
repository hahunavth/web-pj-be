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
    });
  }
}
