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
