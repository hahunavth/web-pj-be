import {
  ApiGetAllQuery,
  AttrQuery,
  PaginateQuery,
  TimeQuery,
} from '../../common/base/base.decorator';
import { PaginateReqQueryT } from '../../common/base/base.dto';
import { PrismaService } from '../../common/prisma/prisma.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { FilterBookDto } from './dto/filter-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { SortBookDto } from './dto/sort-book.dto';

import { FilterBookQuery, SortBookQuery } from './book.decorator';
import { AllBookQueryDto } from './dto/all-book-query.dto';
import { QueryBookDto } from './dto/query-book.dto';

@Controller('books')
@ApiTags('Book')
export class BookController {
  constructor(
    private readonly service: BookService,
    private prisma: PrismaService,
  ) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.service.create(createBookDto);
  }

  @Get()
  @ApiGetAllQuery(AllBookQueryDto)
  async findAll(
    @PaginateQuery() paginate: PaginateReqQueryT,
    @AttrQuery(QueryBookDto) attrQuery,
    @TimeQuery() timeQuery,
    @FilterBookQuery() bookFilter: FilterBookDto,
    @SortBookQuery() bookSort: SortBookDto,
  ) {
    return this.service.findAndFilterAll(
      paginate,
      timeQuery,
      attrQuery,
      bookFilter,
      bookSort,
    );
  }

  @Get('categories')
  async findAllCategories() {
    return this.service.findAllCategories();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.service.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
