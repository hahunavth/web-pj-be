
import {IsNumber,Min} from 'class-validator'




export class UpdateUserCartDto {
  @IsNumber()@Min(1)quantity?: number;
}
