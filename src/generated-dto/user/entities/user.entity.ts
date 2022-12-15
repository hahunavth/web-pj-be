import { Gender, Role } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { OrderEntity } from '../../order/entities/order.entity';
import { FeedbackEntity } from '../../feedback/entities/feedback.entity';
import { UserCartEntity } from '../../user-cart/entities/user-cart.entity';
import { UserTokenEntity } from '../../user-token/entities/user-token.entity';

export class UserEntity {
  id: number;
  email: string;
  name: string;
  password: string;
  phone: string;
  @ApiProperty({ enum: Gender }) gender: Gender;
  @ApiProperty({ enum: Role }) role: Role;
  createdAt: Date;
  updatedAt: Date;
  Order?: OrderEntity[];
  Feedback?: FeedbackEntity[];
  UserCart?: UserCartEntity[];
  UserToken?: UserTokenEntity | null;
}
