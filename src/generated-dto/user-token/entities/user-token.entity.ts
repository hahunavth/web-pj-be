
import {UserEntity} from '../../user/entities/user.entity'
import {IsString} from 'class-validator'


export class UserTokenEntity {
  user?: UserEntity ;
userId: number ;
token: string ;
createdAt: Date ;
updatedAt: Date ;
}
