import { IsNumber, Min } from 'class-validator';

export class UpdateInvoiceDto {
  @IsNumber() @Min(0) totalAmount?: number;
}
