import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
  ApiGetAllQuery,
  AttrQuery,
  PaginateQuery,
  TimeQuery,
} from '../../common/base/base.decorator';
import { PaginateReqQueryT } from '../../common/base/base.dto';
import { PrismaService } from '../../common/prisma/prisma.service';

import { InvoiceService } from './invoice.service';
import { InvoiceEntity } from '../../generated-dto/invoice/entities';
import {
  CreateInvoiceDto,
  UpdateInvoiceDto,
  ConnectInvoiceDto,
} from '../../generated-dto/invoice/dto';

@ApiTags('Invoice (Generated)')
@Controller("invoice")
export class InvoiceController 
{
  constructor(
    private readonly service: InvoiceService,
    private prisma: PrismaService,
  ) {}

  @Get()
  @ApiGetAllQuery(UpdateInvoiceDto)
  async findAll(
    @PaginateQuery() paginate: PaginateReqQueryT,
    @AttrQuery(UpdateInvoiceDto) attrQuery,
    @TimeQuery() timeQuery,
  ) {
    return this.service.findAll(paginate, timeQuery, attrQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Post()
  create(@Body() createInvoiceDto: CreateInvoiceDto) {
    return this.service.create(createInvoiceDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvoiceDto: UpdateInvoiceDto) {
    return this.service.update(+id, updateInvoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}