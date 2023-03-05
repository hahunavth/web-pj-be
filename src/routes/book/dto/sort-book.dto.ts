import { IsEnum, IsString } from 'class-validator';

export const sortBookAttrs = [
  'price',
  'author',
  'category',
  'publisher',
  'publishDate',
  'supplier',
];

export class SortBookDto {
  constructor(query: any) {
    this.sortBy = query.sortBy;
    this.sortType = query.sortType;
  }
  @IsString()
  @IsEnum(sortBookAttrs)
  public sortBy: string;
  @IsString()
  @IsEnum(['asc', 'desc'])
  public sortType: string;
}
