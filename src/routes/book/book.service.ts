import { CRUDService } from '../../common/base/crud.service';
import { PrismaService } from '../../common/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
// import { Book } from '@prisma/client';
import { BookEntity } from '../../generated-dto/book/entities';
// import { CreateBookDto } from './dto/create-book.dto';
// import { UpdateBookDto } from './dto/update-book.dto';
import {
  CreateBookDto,
  UpdateBookDto,
  ConnectBookDto,
} from '../../generated-dto/book/dto';

@Injectable()
export class BookService extends CRUDService<
  BookEntity,
  CreateBookDto,
  UpdateBookDto
> {
  public constructor(prisma: PrismaService) {
    super(prisma.book);
  }
}
