import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDefined, IsNumber, Min, ValidateNested } from 'class-validator';

/**
 * Không lưu tại generated-dto để tránh bị ghi đè khi generate lại dto
 */
export class UserCartItemDto {
  @IsNumber() bookId: number;
  @IsNumber() @Min(1) quantity: number;
}

export class SetUserCartDto {
  @ApiProperty({
    type: 'array',
    items: {
      type: 'object',
      example: [{ type: 'number', example: 1 }],
    },
    // isArray: true,
    // type: UserCartItemDto,
  })
  // @ValidateNested()
  // @Type(() => UserCartItemDto)
  // @IsDefined()
  data: UserCartItemDto[];
}
