import { CRUDService } from '../../common/base/crud.service';
import { PrismaService } from '../../common/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

import { OrderEntity } from '../../generated-dto/order/entities';
import {
  CreateOrderDto,
  UpdateOrderDto,
  ConnectOrderDto,
} from '../../generated-dto/order/dto';
// import { Order as GeneratedOrder} from '../../../database/entity/generated/';

@Injectable()
export class OrderService extends CRUDService<
  OrderEntity,
  CreateOrderDto,
  UpdateOrderDto
>
{
  constructor(prisma: PrismaService) {
    super(prisma.order);
  }
}