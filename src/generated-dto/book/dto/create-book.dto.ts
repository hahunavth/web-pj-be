
import {IsString,IsOptional,IsNumber,Min} from 'class-validator'




export class CreateBookDto {
  @IsString()author: string;
@IsString()category: string;
@IsString()@IsOptional()coverUrl: string;
@IsString()@IsOptional()coverForm: string;
@IsString()@IsOptional()code: string;
@IsString()@IsOptional()supplier: string;
@IsString()@IsOptional()language: string;
@IsOptional()weight: number;
@IsOptional()width: number;
@IsOptional()height: number;
description: string;
@IsNumber()@Min(0)numOfPages: number;
@IsString()publisher: string;
@IsNumber()@Min(0)price: number;
@IsString()coverType: string;
}
