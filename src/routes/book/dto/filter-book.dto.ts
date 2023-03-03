import { Prisma } from '@prisma/client';
import { IsString, IsNumber, IsDate, IsOptional } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { PaginateReqQuery } from '../../../common/base/base.dto';
import { ApiProperty } from '@nestjs/swagger';

export class FilterBookDto {
  constructor(query: any) {
    this.maxPrice = query.maxPrice
      ? Number.parseInt(query.maxPrice)
      : undefined;
    this.minPrice = query.minPrice
      ? Number.parseInt(query.minPrice)
      : undefined;
  }

  @IsOptional()
  @IsNumber()
  public maxPrice?: number = undefined;
  @IsOptional()
  @IsNumber()
  public minPrice?: number = undefined;
}
