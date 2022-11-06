import { PickType } from '@nestjs/swagger';
import { UserEntity } from 'src/user/entities/user.entity';

export class AuthLogoutDto extends PickType(UserEntity, ['id'] as const) {}
