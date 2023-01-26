
import {IsString} from 'class-validator'




export class CreateUserTokenDto {
  @IsString()token: string;
}
