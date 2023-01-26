
import {IsString} from 'class-validator'




export class UpdatePaymentTransactionDto {
  @IsString()content?: string;
@IsString()method?: string;
}
