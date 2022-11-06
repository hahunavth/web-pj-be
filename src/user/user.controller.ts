import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  Query,
  UseFilters,
} from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { PaginationQueryDto, PaginatedDto } from 'src/common/utils/query.dto';
import { ApiPaginatedResponse } from 'src/common/utils/response.utils';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';

@Controller()
@ApiTags('users') // 👈 apply tags
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('user')
  async signupUser(@Body() userData: CreateUserDto): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Get('users/:id')
  @ApiOkResponse({ type: UserEntity })
  async getOneUser(@Param('id') id: number) {
    return this.userService.user({ id });
  }

  @Get('users')
  // @ApiOkResponse({ type: UserEntity, isArray: true })
  @ApiPaginatedResponse(UserEntity)
  // @ApiOkResponse({
  //   // type: PaginatedDto<UserModel>,
  //   type: PaginatedRequestDto(Array<UserEntity>),
  // })
  async getAllUser(
    @Query() query: PaginationQueryDto,
  ): Promise<PaginatedDto<UserModel>> {
    const data = await this.userService.users({});
    const result = new PaginatedDto<UserModel>();
    result.limit = query.limit;
    result.offset = (query.page - 1) * query.limit;
    result.total = data.length;
    result.data = data;
    return result;
  }

  @Patch('users/:id')
  @ApiOkResponse({ type: UserEntity })
  async updateUser(
    @Param('id') id: number,
    @Body() body: UpdateUserDto,
  ): Promise<UpdateUserDto> {
    return this.userService.updateUser({ where: { id }, data: body });
  }

  @Delete('users/:id')
  // @UseFilters(HttpExceptionFilter)
  async deleteUser(@Param('id') id: number) {
    // try {
    // throw new BadRequestException();
    return this.userService.deleteUser({ id });
    // } catch (e) {}
  }
}
