import { OmitType, PartialType } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsOptional, IsString } from 'class-validator';
import { PaginateReqQuery } from 'src/common/base/base.dto';
import { UserEntity } from '../entities/user.entity';

export class CreateUserDto extends OmitType(UserEntity, [
  'id',
  'createdAt',
  'updatedAt',
] as const) {}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class FilterUserDto
  extends PaginateReqQuery
  implements Prisma.UserWhereInput
{
  constructor(obj) {
    super(obj);
    this.email = obj.email;
    this.name = obj.name;
    this.password = obj.password;
    this.phone = obj.phone;
  }
  @IsOptional()
  @IsString()
  email?: string;
  @IsOptional()
  @IsString()
  name?: string;
  @IsOptional()
  @IsString()
  password?: string;
  @IsOptional()
  @IsString()
  phone?: string;
}
