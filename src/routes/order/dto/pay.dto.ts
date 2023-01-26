import { IsString, IsNumber, Min } from 'class-validator';

export class PayDto {
  @IsNumber() orderId: number;
  @IsString() paymentMethod: string;

  @IsNumber() cvvCode: number;
  @IsString() cardCode: string;
  @IsString() owner: string;
  @IsString() dateExpired: string;
}
