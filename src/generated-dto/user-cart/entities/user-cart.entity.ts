import { IsNumber, Min } from 'class-validator';
import { UserEntity } from '../../user/entities/user.entity';
import { BookEntity } from '../../book/entities/book.entity';

export class UserCartEntity {
  quantity: number;
  userId: number;
  user?: UserEntity;
  bookId: number;
  book?: BookEntity;
}
