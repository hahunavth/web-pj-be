
import {IsString,IsNumber,Min} from 'class-validator'




export class UpdateBookDto {
  @IsString()author?: string;
@IsString()category?: string;
@IsNumber()@Min(0)numOfPages?: number;
@IsString()publisher?: string;
@IsNumber()@Min(0)price?: number;
@IsString()coverType?: string;
}
