
import {IsString} from 'class-validator'




export class UpdateUserTokenDto {
  @IsString()token?: string;
}
