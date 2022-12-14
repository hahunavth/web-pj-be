import { Prisma } from '@prisma/client';
import { IsString, IsNumber, IsDate, IsOptional } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { PaginateReqQuery } from '../../../common/base/base.dto';

export class FilterBookDto
  extends PaginateReqQuery
  implements Prisma.BookWhereInput
{
  constructor(obj) {
    super(obj);
    this.author = obj?.author;
    this.category = obj?.category;
    this.publisher = obj?.publisher;
  }

  @IsOptional()
  @IsString()
  author?: string;
  @IsOptional()
  @IsString()
  category?: string;
  @IsOptional()
  @IsString()
  publisher?: string;
}
