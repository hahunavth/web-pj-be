import { CRUDService } from '../../common/base/crud.service';
import { PrismaService } from '../../common/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

import { InvoiceEntity } from '../../generated-dto/invoice/entities';
import {
  CreateInvoiceDto,
  UpdateInvoiceDto,
  ConnectInvoiceDto,
} from '../../generated-dto/invoice/dto';
// import { Invoice as GeneratedInvoice} from '../../../database/entity/generated/';

@Injectable()
export class InvoiceService extends CRUDService<
  InvoiceEntity,
  CreateInvoiceDto,
  UpdateInvoiceDto
> {
  constructor(prisma: PrismaService) {
    super(prisma.invoice);
  }
}
