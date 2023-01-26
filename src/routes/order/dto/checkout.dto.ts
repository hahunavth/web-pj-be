import { IsString, IsNumber, Min } from 'class-validator';

export class CheckoutDto {
  @IsNumber() userId: number;

  @IsNumber() cityCode: number;
  @IsNumber() districtCode: number;
  @IsNumber() wardCode: number;
  @IsString() address?: string;

  @IsString() deliveryMethod: string;
}
