import { OmitType } from '@nestjs/swagger';
import { UserEntity } from 'src/user/entities/user.entity';

export class SignInDto extends OmitType(UserEntity, ['name', 'id'] as const) {}
