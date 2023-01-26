import { IsString, IsOptional, IsNumber, Min, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { FeedbackEntity } from '../../feedback/entities/feedback.entity';
import { UserCartEntity } from '../../user-cart/entities/user-cart.entity';
import { OrderItemEntity } from '../../order-item/entities/order-item.entity';

export class BookEntity {
  id: number;
  author: string;
  category: string;
  coverUrl: string;
  coverForm: string;
  code: string;
  supplier: string;
  language: string;
  weight: number;
  width: number;
  height: number;
  description: string;
  numOfPages: number;
  publisher: string;
  price: number;
  @Type(() => Date) publishDate: Date;
  coverType: string;
  Feedback?: FeedbackEntity[];
  UserCart?: UserCartEntity[];
  OrderItem?: OrderItemEntity[];
  createdAt: Date;
  updatedAt: Date;
}
