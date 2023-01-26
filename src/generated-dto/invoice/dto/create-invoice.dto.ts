
import {IsNumber,Min} from 'class-validator'




export class CreateInvoiceDto {
  @IsNumber()@Min(0)totalAmount: number;
}
