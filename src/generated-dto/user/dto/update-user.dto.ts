
import {Gender,Role} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsString} from 'class-validator'




export class UpdateUserDto {
  @IsString()email?: string;
@IsString()name?: string;
@IsString()password?: string;
@IsString()phone?: string;
@ApiProperty({ enum: Gender })gender?: Gender;
@ApiProperty({ enum: Role })role?: Role;
}
