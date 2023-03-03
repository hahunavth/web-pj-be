import { IsEnum, IsString } from 'class-validator';

export class SortBookDto {
  constructor(query: any) {
    this.sortBy = query.sortBy;
    this.sortType = query.sortType;
  }
  @IsString()
  @IsEnum(['price', 'author', 'category', 'publisher'])
  public sortBy: string;
  @IsString()
  @IsEnum(['asc', 'desc'])
  public sortType: string;
}
