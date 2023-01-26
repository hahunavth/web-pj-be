
import {IsNumber,Min} from 'class-validator'




export class CreateUserCartDto {
  @IsNumber()@Min(1)quantity: number;
}
