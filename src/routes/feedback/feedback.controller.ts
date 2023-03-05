import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import {
  ApiGetAllQuery,
  AttrQuery,
  PaginateQuery,
  TimeQuery,
} from '../../common/base/base.decorator';
import { PaginateReqQueryT } from '../../common/base/base.dto';

import { PrismaService } from '../../common/prisma/prisma.service';
import { FeedbackService } from './feedback.service';

import { UpdateFeedbackDto } from '../../generated-dto/feedback/dto';
import { CreateFeedbackDto } from '../../alt-dto/feedback/dto/create-feedback.dto';
import { FeedbackQueryDto } from './dto/feedbackQuery.dto';

@ApiTags('Feedback (Generated)')
@Controller('feedback')
export class FeedbackController {
  constructor(
    private readonly service: FeedbackService,
    private prisma: PrismaService,
  ) {}

  @Get()
  @ApiGetAllQuery(FeedbackQueryDto)
  @ApiOperation({ summary: 'Danh sách đánh giá' })
  async findAll(
    @PaginateQuery() paginate: PaginateReqQueryT,
    // @AttrQuery(FeedbackQueryDto) attrQuery,
    @TimeQuery() timeQuery,
    @Query('bookId') bookId: string,
    @Query('userId') userId: string,
  ) {
    console.log(bookId);
    const attrQuery = {};
    if (bookId) attrQuery['bookId'] = Number.parseInt(bookId);
    if (userId) attrQuery['userId'] = Number.parseInt(userId);

    return this.service.findAll(paginate, timeQuery, attrQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @ApiOperation({ summary: 'Thêm đánh giá mới' })
  @Post()
  async create(@Body() createFeedbackDto: CreateFeedbackDto) {
    // check user and book exists, if not reaturn error
    const findUser = await this.prisma.user.findFirst({
      where: { id: createFeedbackDto?.userId },
    });
    const findBook = await this.prisma.book.findFirst({
      where: { id: createFeedbackDto?.bookId },
    });
    if (!findUser)
      throw new BadRequestException(
        `User with id ${createFeedbackDto?.userId} not found`,
      );
    if (!findBook)
      throw new BadRequestException(
        `Book with id ${createFeedbackDto?.bookId} not found`,
      );
    // create record
    return this.service.create(createFeedbackDto);
  }

  @ApiOperation({ summary: 'Cập nhật đánh giá' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFeedbackDto: UpdateFeedbackDto,
  ) {
    return this.service.update(+id, updateFeedbackDto);
  }

  @ApiOperation({ summary: 'Xóa đánh giá' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
