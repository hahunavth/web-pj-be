import { IsString } from 'class-validator';
import { CardEntity } from '../../card/entities/card.entity';
import { InvoiceEntity } from '../../invoice/entities/invoice.entity';

export class PaymentTransactionEntity {
  id: number;
  content: string;
  method: string;
  card?: CardEntity;
  cardId: number;
  invoice?: InvoiceEntity | null;
  createdAt: Date;
}
