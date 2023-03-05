import { IsNumber, IsOptional } from 'class-validator';

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
