import { OmitType, PartialType } from '@nestjs/swagger';
import {} from 'class-validator';
import { UserEntity } from '../entities/user.entity';

export class CreateUserDto extends OmitType(UserEntity, [
  'id',
  'createdAt',
  'updatedAt',
] as const) {}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
