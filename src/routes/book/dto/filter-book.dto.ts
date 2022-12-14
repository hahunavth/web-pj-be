import { Prisma } from '@prisma/client';
import { IsString, IsNumber, IsDate, IsOptional } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { PaginateReqQuery } from '../../../common/base/base.dto';

export class FilterBookDto
  // extends PaginateReqQuery
  implements Prisma.BookWhereInput
{
  // constructor(obj) {
  // super(obj);
  // this.author = obj?.author;
  // this.category = obj?.category;
  // this.publisher = obj?.publisher;
  // }

  @IsOptional()
  @IsString()
  public author?: string = undefined;
  @IsOptional()
  @IsString()
  public category?: string = undefined;
  @IsOptional()
  @IsString()
  public publisher?: string = undefined;
}
