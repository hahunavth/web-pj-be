import { OrderStatus } from '@prisma/client';
import { IsString, IsNumber, Min } from 'class-validator';

export class CofnirmDto {
  @IsNumber() orderId: number;
  @IsString() status?: OrderStatus;
}
