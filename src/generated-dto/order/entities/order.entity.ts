
import {IsString,IsNumber,Min} from 'class-validator'
import {InvoiceEntity} from '../../invoice/entities/invoice.entity'
import {UserEntity} from '../../user/entities/user.entity'
import {OrderItemEntity} from '../../order-item/entities/order-item.entity'


export class OrderEntity {
  id: number ;
address: string ;
shippingFees: number ;
invoice?: InvoiceEntity  | null;
invoiceId: number  | null;
User?: UserEntity ;
userId: number ;
orderItem?: OrderItemEntity[] ;
createdAt: Date ;
updatedAt: Date ;
}
