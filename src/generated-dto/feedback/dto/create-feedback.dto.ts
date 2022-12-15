import { IsString, IsNumber, Max, Min } from 'class-validator';

// NOTE: THIS FILE IS EDITED - DO NOT REGENERATE
export class CreateFeedbackDto {
  @IsNumber() userId: number;
  @IsNumber() bookId: number;
  @IsString() comment: string;
  @IsNumber() @Max(5) @Min(1) star: number;
}
