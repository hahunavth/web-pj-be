
import {IsNumber,IsString,IsDate} from 'class-validator'
import {Type} from 'class-transformer'




export class CreateCardDto {
  @IsNumber()cvvCode: number;
@IsString()cardCode: string;
@IsString()owner: string;
@IsDate()@Type(() => Date)dateExpired: Date;
}
