import { Transform } from 'class-transformer';
import { IsDate, IsNumber, IsOptional } from 'class-validator';
import { toLowerCase, toNumber, toDate } from './cast.utils';

/**
 * STUB: Deprecated
 */
export class PaginationQueryDto {
  @Transform(({ value }) => toNumber(value, { default: 1, min: 1 }))
  @IsNumber()
  @IsOptional()
  public page?: number = 1;

  @Transform(({ value }) => toNumber(value, { default: 1, min: 1 }))
  @IsNumber()
  @IsOptional()
  public limit?: number = 10;

  @Transform(({ value }) => toLowerCase(value))
  @IsOptional()
  public content?: string;

  @Transform(({ value }) => toDate(value))
  @IsDate()
  @IsOptional()
  public startAt?: Date;

  @Transform(({ value }) => toDate(value))
  @IsDate()
  @IsOptional()
  public endAt?: Date;
}

export class PaginatedDto<TData> {
  @IsNumber()
  @IsOptional()
  total: number;

  @IsNumber()
  @IsOptional()
  limit: number;

  @IsNumber()
  @IsOptional()
  offset: number;

  @IsOptional()
  // @ApiProperty({type: })
  data: TData[];
}
