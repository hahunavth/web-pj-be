import { PaymentService } from './payment.service';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import * as deliveryMethods from '../order/constants/delivery-methods.json';

@ApiTags('Payment')
@Controller('payments')
export class PaymentController {
  constructor(private service: PaymentService) {}

  @ApiOperation({ summary: 'api lấy danh sách các phương thức thanh toán' })
  @Get('methods')
  async getPaymentMethod() {
    return this.service.getPaymentMethod();
  }

  @ApiOperation({
    summary: 'api lấy danh sách các phương thức vận chuyển trong khu vuc nay',
  })
  @Get('shippingmethod/:cityId/:districtId')
  getShippingMethod(
    @Param('cityId') cityId: string,
    @Param('districtId') districtId: string,
  ) {
    return {
      data: deliveryMethods,
    };
  }
}
