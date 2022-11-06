import { OmitType, PickType } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { UserEntity } from 'src/user/entities/user.entity';

export class AuthorizationDto {
  @IsString()
  secret: string;
}
