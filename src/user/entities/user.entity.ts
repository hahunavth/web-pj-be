import { IsString, IsNumber } from 'class-validator';
import { User } from '@prisma/client';

export class UserEntity implements User {
  @IsNumber()
  id: number;
  @IsString()
  email: string;
  @IsString()
  name: string;
  @IsString()
  password: string;
}
