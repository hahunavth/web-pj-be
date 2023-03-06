import { Type } from 'class-transformer';
import { IsString, IsNumber, IsDate } from 'class-validator';

export class QueryBookDto {
  @IsNumber()
  public id?: number = undefined;

  @IsString()
  public title?: string = undefined;

  @IsString()
  public author?: string = undefined;
  @IsString()
  public category?: string = undefined;
  @IsString()
  public coverUrl?: string = undefined;
  @IsString()
  public coverForm?: string = undefined;
  @IsString()
  public code?: string = undefined;
  @IsString()
  public supplier?: string = undefined;
  @IsString()
  public language?: string = undefined;
  @IsNumber()
  public weight?: number = undefined;
  @IsNumber()
  public width?: number = undefined;
  @IsNumber()
  public height?: number = undefined;
  @IsString()
  public description?: string = undefined;

  @IsNumber()
  public numOfPages?: number = undefined;
  @IsString()
  public publisher?: string = undefined;
  @IsNumber()
  public price?: number = undefined;
  @Type(() => Date)
  @IsDate()
  public publishDate?: Date = undefined;
  @IsString()
  public coverType?: string = undefined;
  @IsDate()
  public createdAt?: Date = undefined;
  @IsDate()
  public updatedAt?: Date = undefined;
}
