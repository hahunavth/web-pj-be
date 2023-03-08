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
    super(prisma.book, prisma);
  }

  private calculateRating(feedbackStar: { star: number }[]) {
    return (
      (feedbackStar.map((a) => a.star) as number[])?.reduce(
        (a, b) => a + b,
        0,
      ) / feedbackStar.length
    );
  }

  public async findAndFilterAll(
    paginate: PaginateReqQueryT,
    timeQuery?: TimeQueryT,
    attrQuery?: KV,
    bookFilter?: FilterBookDto,
    bookSort?: SortBookDto,
  ) {
    attrQuery = {
      ...attrQuery,
      // find by title
      title: {
        contains: attrQuery?.title,
      },
      // price range
      price: bookFilter
        ? {
            gte: bookFilter?.minPrice,
            lte: bookFilter?.maxPrice,
          }
        : undefined,
    };
    const orderBy = bookSort
      ? {
          [bookSort?.sortBy]: bookSort?.sortType,
        }
      : undefined;
    const where = {
      ...attrQuery,
      ...timeQuery?.where,
    };
    delete where['sortBy'];
    delete where['sortType'];

    const findManyPromise = this.prisma.book.findMany({
      skip: paginate.offset,
      take: paginate.limit,
      where,
      orderBy,
      include: {
        Feedback: { select: { star: true } },
      },
    });
    const countPromise = this.prisma.book.count({ where });

    const [data, total] = await this.__prisma.$transaction([
      findManyPromise,
      countPromise,
    ]);

    const newData = data.map((book) => {
      const rating = this.calculateRating(book.Feedback);
      delete book['Feedback'];
      book['rating'] = rating || 0;

      return book;
    });

    return paginateResponse({
      count: data?.length,
      data: newData,
      startAt: timeQuery?.startAt,
      endAt: timeQuery?.endAt,
      ...paginate,
      filter: attrQuery,
      orderBy,
      total,
    });
  }

  public async findOne(
    id: number,
  ): Promise<(BookEntity & { rating: number }) | null> {
    const book = await this.prisma.book.findUnique({
      where: { id: id },
      include: {
        Feedback: { select: { star: true } },
      },
    });

    if (!book) return null;

    const rating = this.calculateRating(book.Feedback);

    const newBook: BookEntity & { rating: number } = {
      title: book.title,
      author: book.author,
      category: book.category,
      createdAt: book.createdAt,
      description: book.description,
      id: book.id,
      price: book.price,
      rating: rating,
      updatedAt: book.updatedAt,
      code: book.code,
      coverForm: book.coverForm,
      language: book.language,
      publisher: book.publisher,
      weight: book.weight,
      coverUrl: book.coverUrl,
      width: book.width,
      height: book.height,
      supplier: book.supplier,
      numOfPages: book.numOfPages,
      publishDate: book.publishDate,
      coverType: book.coverType,
    };

    return newBook;
  }

  public async findAllCategories() {
    const result = await this.prisma.book.groupBy({
      by: ['category'],
    });
    const categories = result.map((a) => a.category);

    return categories;
  }
}
