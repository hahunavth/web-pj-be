import { OmitType } from '@nestjs/swagger';
import {} from 'class-validator';
import { UserEntity } from '../entities/user.entity';

export class CreateUserDto extends OmitType(UserEntity, ['id'] as const) {}
