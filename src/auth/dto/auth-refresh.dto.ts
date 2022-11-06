import { PickType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { UserEntity } from 'src/user/entities/user.entity';

export class AuthTokenRefreshDto extends PickType(UserEntity, ['id']) {
  @IsString()
  refresh_token: string;
}
