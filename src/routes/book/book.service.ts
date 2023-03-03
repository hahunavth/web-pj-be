import { CRUDService } from '../../common/base/crud.service';
import { PrismaService } from '../../common/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { BookEntity } from '../../generated-dto/book/entities';
import { CreateBookDto, UpdateBookDto } from '../../generated-dto/book/dto';
import { KV, PaginateReqQueryT } from 'src/common/base/base.dto';
import { FilterBookDto } from './dto/filter-book.dto';
import { TimeQueryT } from 'src/common/base/base.decorator';
import { paginateResponse } from '../../common/base/response.mapper';
import { SortBookDto } from './dto/sort-book.dto';

@Injectable()
export class BookService extends CRUDService<
  BookEntity,
  CreateBookDto,
  UpdateBookDto
> {
  public constructor(private prisma: PrismaService) {
    super(prisma.book);
  }

  public async findAndFilterAll(
    paginate: PaginateReqQueryT,
    timeQuery?: TimeQueryT,
    attrQuery?: KV,
    bookFilter?: FilterBookDto,
    bookSort?: SortBookDto,
  ) {
    this.prisma.book.findMany({});
    const data = await this.prisma.book.findMany({
      skip: paginate.offset,
      take: paginate.limit,
      orderBy: bookSort
        ? {
            [bookSort?.sortBy]: bookSort?.sortType,
          }
        : undefined,
      where: {
        price: bookFilter
          ? {
              gte: bookFilter?.minPrice,
              lte: bookFilter?.maxPrice,
            }
          : undefined,
        ...attrQuery,
        ...timeQuery?.where,
      },
    });

    return paginateResponse({
      count: data?.length,
      data,
      startAt: timeQuery?.startAt,
      endAt: timeQuery?.endAt,
      ...paginate,
      filter: {
        ...attrQuery,
        ...bookFilter,
      },
      sort: bookSort,
    });
  }
}
