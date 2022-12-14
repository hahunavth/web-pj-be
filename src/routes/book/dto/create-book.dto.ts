import { OmitType } from '@nestjs/swagger';
import { BookEntity } from '../entities/book.entity';

export class CreateBookDto extends OmitType(BookEntity, ['id'] as const) {}
