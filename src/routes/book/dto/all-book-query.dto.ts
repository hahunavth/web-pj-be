import { SortBookDto } from './sort-book.dto';
import { FilterBookDto } from './filter-book.dto';
import { UpdateBookDto } from './update-book.dto';
import { CreateBookDto } from 'src/generated-dto/book/dto';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AllBookQueryDto
  extends UpdateBookDto
  implements FilterBookDto, SortBookDto
{
  @IsOptional()
  @IsNumber()
  public maxPrice?: number = undefined;
  @IsOptional()
  @IsNumber()
  public minPrice?: number = undefined;
  @ApiProperty({ enum: ['price', 'author', 'category', 'publisher'] })
  @IsEnum(['price', 'author', 'category', 'publisher'])
  public sortBy: string;
  @ApiProperty({ enum: ['asc', 'desc'] })
  @IsEnum(['asc', 'desc'])
  public sortType: string;
}
