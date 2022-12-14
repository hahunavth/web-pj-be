import { PaginateQuery } from '../../common/base/base.decorator';
import { PaginateReqQueryT } from '../../common/base/base.dto';
import { queryByAttributes } from '../../common/base/query.mapper';
import { paginateResponse } from '../../common/base/response.mapper';
import { PrismaService } from '../../common/prisma/prisma.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { FilterBookDto } from './dto/filter-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('book')
@ApiTags('books')
export class BookController {
  constructor(
    private readonly bookService: BookService,
    private prisma: PrismaService,
  ) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  @ApiQuery({ type: FilterBookDto })
  async findAll(@PaginateQuery() p: PaginateReqQueryT, @Query() query) {
    const q = new FilterBookDto(query);

    const data = await this.prisma.book.findMany({
      skip: p.offset,
      take: p.limit,
      where: {
        ...queryByAttributes(q),
      },
    });

    return paginateResponse({
      count: 0,
      data,
      ...p,
      filter: q,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }
}
