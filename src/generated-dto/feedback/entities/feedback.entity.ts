
import {IsString,IsNumber,Max,Min} from 'class-validator'
import {UserEntity} from '../../user/entities/user.entity'
import {BookEntity} from '../../book/entities/book.entity'


export class FeedbackEntity {
  id: number ;
comment: string ;
star: number ;
userId: number ;
user?: UserEntity ;
bookId: number ;
book?: BookEntity ;
createdAt: Date ;
updatedAt: Date ;
}
