import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsNumberString,
  IsOptional,
} from 'class-validator';
import { UserEntity } from '@/routes/user/entities/user.entity';
import { toBoolean, toLowerCase, toNumber, trim, toDate } from './cast.utils';

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

// export type ClassType<T = any> = new (...args: any[]) => T;

// export function PaginatedRequestDto<T extends ClassType>(ResourceCls: T) {
//   // class Paginated extends ResourceCls {
//   //   @ApiProperty()
//   //   public limit?: number;

//   //   @ApiProperty()
//   //   public offset?: number;
//   // }
//   // return Paginated;
//   class Paginated extends PaginatedDto<T> {
//     @IsOptional()
//     data: T[];
//   }

//   return Paginated;
// }
