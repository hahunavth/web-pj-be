import { IsNumber, IsOptional } from 'class-validator';

export class FeedbackQueryDto {
  @IsOptional() @IsNumber() userId?: number;
  @IsOptional() @IsNumber() bookId?: number;
}
