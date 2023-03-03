import { Module } from '@nestjs/common';
import { PrismaModule } from '../../common/prisma/prisma.module';

import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { AddressService } from '../address/address.service';

@Module({
  imports: [PrismaModule],
  providers: [PaymentService, AddressService],
  exports: [PaymentService],
  controllers: [PaymentController],
})
export class PaymentModule {}
