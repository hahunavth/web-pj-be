import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
  ApiGetAllQuery,
  AttrQuery,
  PaginateQuery,
  TimeQuery,
} from '../../common/base/base.decorator';
import { PaginateReqQueryT } from '../../common/base/base.dto';
import { PrismaService } from '../../common/prisma/prisma.service';

import { FeedbackService } from './feedback.service';
import { FeedbackEntity } from '../../generated-dto/feedback/entities';
import {
  CreateFeedbackDto,
  UpdateFeedbackDto,
  ConnectFeedbackDto,
} from '../../generated-dto/feedback/dto';

@ApiTags('Feedback (Generated)')
@Controller('feedback')
export class FeedbackController {
  constructor(
    private readonly service: FeedbackService,
    private prisma: PrismaService,
  ) {}

  @Get()
  @ApiGetAllQuery(UpdateFeedbackDto)
  async findAll(
    @PaginateQuery() paginate: PaginateReqQueryT,
    @AttrQuery(UpdateFeedbackDto) attrQuery,
    @TimeQuery() timeQuery,
  ) {
    return this.service.findAll(paginate, timeQuery, attrQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

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

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFeedbackDto: UpdateFeedbackDto,
  ) {
    return this.service.update(+id, updateFeedbackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
