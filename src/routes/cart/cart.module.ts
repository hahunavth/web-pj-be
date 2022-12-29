import { Module } from '@nestjs/common';
import { PrismaModule } from '../../common/prisma/prisma.module';

import { CartService } from './cart.service';
import { CartController } from './cart.controller';

@Module({
  imports: [PrismaModule],
  providers: [CartService],
  exports: [CartService],
  controllers: [CartController],
})
export class CartModule {}
