import { IsString } from 'class-validator';

export class AuthTokenDto {
  @IsString()
  access_token: string;
  @IsString()
  refresh_token: string;
}
