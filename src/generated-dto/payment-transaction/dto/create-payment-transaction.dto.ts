
import {IsString} from 'class-validator'




export class CreatePaymentTransactionDto {
  @IsString()content: string;
@IsString()method: string;
}
