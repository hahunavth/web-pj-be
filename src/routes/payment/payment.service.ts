import { ApiOperation } from '@nestjs/swagger';
import { CRUDService } from '../../common/base/crud.service';
import { PrismaService } from '../../common/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentService {
  getPaymentMethod() {
    return {
      data: [
        { method: 'cash', name: 'Cash' },
        { method: 'credit', name: 'Credit' },
        { method: 'debit', name: 'Debit' },
        { method: 'paypal', name: 'Paypal' },
        { method: 'applepay', name: 'Apple Pay' },
        { method: 'googlepay', name: 'Google Pay' },
        { method: 'venmo', name: 'Venmo' },
        { method: 'bitcoin', name: 'Bitcoin' },
      ],
    };
  }
}
