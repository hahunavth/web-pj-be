
import {IsNumber,Min} from 'class-validator'




export class UpdateOrderItemDto {
  @IsNumber()@Min(1)quantity?: number;
@IsNumber()@Min(0)price?: number;
}
