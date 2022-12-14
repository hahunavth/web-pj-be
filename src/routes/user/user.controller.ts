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
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { UpdateUserDto, CreateUserDto } from './dto/user.dto';
import { PaginationQueryDto, PaginatedDto } from 'src/common/utils/query.dto';
import { ApiPaginatedResponse } from 'src/common/utils/response.utils';

@Controller()
@ApiTags('users') // 👈 apply tags
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('user')
  async signupUser(@Body() userData: CreateUserDto): Promise<UserModel> {
    return this.userService.create(userData);
  }

  @Get('users/:id')
  @ApiOkResponse({ type: UserEntity })
  async getOneUser(@Param('id') id: number) {
    return this.userService.getOne(id);
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
    const data = await this.userService.getAll();
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
    return this.userService.update(id, body);
  }

  @Delete('users/:id')
  async deleteUser(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
