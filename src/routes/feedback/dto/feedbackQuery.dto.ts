import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class FeedbackQueryDto {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  public userId?: number;
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  public bookId?: number;
}
