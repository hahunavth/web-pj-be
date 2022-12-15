import { IsString, IsNumber, Min, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { FeedbackEntity } from '../../feedback/entities/feedback.entity';
import { UserCartEntity } from '../../user-cart/entities/user-cart.entity';
import { OrderItemEntity } from '../../order-item/entities/order-item.entity';

export class BookEntity {
  id: number;
  author: string;
  category: string;
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
