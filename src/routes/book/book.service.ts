import { CRUDService } from '../../common/base/crud.service';
import { PrismaService } from '../../common/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Book } from '@prisma/client';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService extends CRUDService<
  Book,
  CreateBookDto,
  UpdateBookDto
> {
  public constructor(prisma: PrismaService) {
    super(prisma.book);
  }

  public checkExists(
    data: Book | CreateBookDto | UpdateBookDto,
    checkAttr?: string | string[],
  ): Promise<boolean> {
    return null;
  }
}
