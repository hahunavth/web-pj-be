import { IsString, IsNumber, Max, Min } from 'class-validator';

export class UpdateFeedbackDto {
  @IsString() comment?: string;
  @IsNumber() @Max(5) @Min(1) star?: number;
}
