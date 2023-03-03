import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { UpdateUserDto, CreateUserDto, FilterUserDto } from './dto/user.dto';
import { PaginationQueryDto, PaginatedDto } from 'src/common/utils/query.dto';
// import { ApiPaginatedResponse } from 'src/common/utils/response.utils';
import { PaginateReqQueryT } from 'src/common/base/base.dto';
import { PaginateQuery } from 'src/common/base/base.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { queryByAttributes } from 'src/common/base/query.mapper';
import { paginateResponse } from 'src/common/base/response.mapper';

// TODO: Khi tạo ng dùng vs role là user sẽ tạo luôn giỏ hàng
// - Update: check chuyển role từ user sang admin
//              -> xóa giỏ hàng
//           check chuyển role từ admin sang user
//              -> do nth
//  - Delete: Check và xóa giỏ hàng (nếu có)
@Controller()
@ApiTags('User')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private prisma: PrismaService,
  ) {}

  @Post('user')
  @ApiOperation({
    summary: ' - Tạo người dùng mới (Role: USER | ADMIN)',
  })
  async signupUser(@Body() userData: CreateUserDto): Promise<UserModel> {
    return this.userService.create(userData);
  }

  @ApiOperation({
    summary: ' - GetOne: Không lấy thông tin giỏ hàng',
  })
  @Get('users/:id')
  @ApiOkResponse({ type: UserEntity })
  async getOneUser(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @ApiOperation({
    summary: ' - GetAll: Không lấy thông tin giỏ hàng',
  })
  @Get('users')
  @ApiQuery({ type: FilterUserDto })
  async getAllUser(
    @PaginateQuery() paginate: PaginateReqQueryT,
    @Query() reqQuery,
  ) {
    const filterAttrs = new FilterUserDto(reqQuery);

    const data = await this.prisma.user.findMany({
      skip: paginate.offset,
      take: paginate.limit,
      where: {
        ...queryByAttributes(filterAttrs),
      },
    });

    return paginateResponse({
      count: 0,
      data,
      ...paginate,
      filter: filterAttrs,
    });
  }

  @ApiOperation({
    summary:
      'TODO - Update: Check chuyển role từ user sang admin -> xóa các sản phảm trong giỏ hàng; Check chuyển role từ admin sang user -> do nothing',
  })
  @Patch('users/:id')
  @ApiOkResponse({ type: UserEntity })
  async updateUser(
    @Param('id') id: number,
    @Body() body: UpdateUserDto,
  ): Promise<UpdateUserDto> {
    return this.userService.update(id, body);
  }

  @ApiOperation({})
  @Delete('users/:id')
  async deleteUser(@Param('id') id: number) {
    return this.userService.remove(id);
  }
}
