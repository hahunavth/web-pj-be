
import {IsString,IsNumber,Min} from 'class-validator'




export class CreateOrderDto {
  @IsString()address: string;
@IsNumber()@Min(0)shippingFees: number;
}
