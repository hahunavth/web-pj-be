import { OmitType, PickType } from '@nestjs/swagger';
import { UserEntity } from '../../..//routes/user/entities/user.entity';
import { IsString } from 'class-validator';

export class AuthLogoutDto extends PickType(UserEntity, ['id'] as const) {}

export class AuthTokenRefreshDto extends PickType(UserEntity, ['id']) {
  @IsString()
  refresh_token: string;
}

export class AuthTokenDto {
  @IsString()
  access_token: string;
  @IsString()
  refresh_token: string;
}

export class AuthorizationDto {
  @IsString()
  secret: string;
}

export class SignInDto extends OmitType(UserEntity, [
  'name',
  'id',
  'createdAt',
  'updatedAt',
  'gender',
  'phone',
  'role',
] as const) {}
