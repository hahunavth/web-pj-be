import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { paginateResponse } from 'src/common/base/response.mapper';
import {
  ApiGetAllQuery,
  AttrQuery,
  PaginateQuery,
  TimeQuery,
} from '../../common/base/base.decorator';
import { AddressService } from './address.service';

@ApiTags('Address')
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get()
  @ApiOperation({ summary: 'Get all cities' })
  async getCities() {
    return this.addressService.getCities();
  }

  @Get(':cityId')
  @ApiOperation({ summary: 'Get all districts' })
  async getDistricts(@Param('cityId', ParseIntPipe) cityId: number) {
    return this.addressService.getDistricts(cityId);
  }

  @Get(':cityId/:districtId')
  @ApiOperation({ summary: 'Get all wards' })
  async getWards(
    @Param('cityId', ParseIntPipe) cityId: number,
    @Param('districtId', ParseIntPipe) districtId: number,
  ) {
    return this.addressService.getWards(districtId);
  }
}
