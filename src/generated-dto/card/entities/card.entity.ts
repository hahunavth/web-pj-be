import { IsNumber, IsString, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { PaymentTransactionEntity } from '../../payment-transaction/entities/payment-transaction.entity';

export class CardEntity {
  id: number;
  cvvCode: number;
  cardCode: string;
  owner: string;
  @Type(() => Date) dateExpired: Date;
  PaymentTransaction?: PaymentTransactionEntity | null;
}
