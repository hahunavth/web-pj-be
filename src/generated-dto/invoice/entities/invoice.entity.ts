
import {IsNumber,Min} from 'class-validator'
import {PaymentTransactionEntity} from '../../payment-transaction/entities/payment-transaction.entity'
import {OrderEntity} from '../../order/entities/order.entity'


export class InvoiceEntity {
  id: number ;
totalAmount: number ;
paymentTransaction?: PaymentTransactionEntity  | null;
paymentTransactionId: number  | null;
order?: OrderEntity  | null;
}
