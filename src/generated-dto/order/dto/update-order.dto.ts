import { IsString, IsNumber, Min } from 'class-validator';

export class UpdateOrderDto {
  @IsString() address?: string;
  @IsNumber() @Min(0) shippingFees?: number;
}
