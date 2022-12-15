import { IsNumber, Min } from 'class-validator';
import { BookEntity } from '../../book/entities/book.entity';
import { OrderEntity } from '../../order/entities/order.entity';

export class OrderItemEntity {
  quantity: number;
  price: number;
  book?: BookEntity;
  bookId: number;
  order?: OrderEntity;
  orderId: number;
}
