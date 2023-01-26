import { Module } from '@nestjs/common';
import { PrismaModule } from '../../common/prisma/prisma.module';

import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { AddressService } from '../address/address.service';

@Module({
  imports: [PrismaModule],
  providers: [OrderService, AddressService],
  exports: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
