import { IsString, IsNumber, IsDate } from 'class-validator';
import { User, Role, Gender } from '@prisma/client';

export class UserEntity implements User {
  @IsNumber()
  id: number;
  @IsString()
  email: string;
  @IsString()
  name: string;
  @IsString()
  password: string;
  @IsDate()
  createdAt: Date;
  @IsString()
  role: Role;
  @IsDate()
  updatedAt: Date;
  @IsString()
  gender: Gender;
  @IsString()
  phone: string;
}
