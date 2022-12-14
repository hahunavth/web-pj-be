import { BadRequestException, Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from '../../common/prisma/prisma.service';
import { hash } from 'argon2';
import { CRUDService } from '@/common/base/base-service';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Injectable()
export class UserService extends CRUDService<
  User,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(private prisma: PrismaService) {
    super(prisma.user);
  }

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    const userExists = await this.prisma.user.findFirst({
      where: { email: data.email },
    });
    if (userExists) {
      throw new BadRequestException('User already exists');
    }
    return this.prisma.user.create({
      data: {
        ...data,
        password: await hash(data.password),
      },
    });
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    const updatedUser = {
      ...data,
    };
    if (typeof data.password == 'string') {
      updatedUser.password = await hash(data.password);
    }
    return this.prisma.user.update({
      where,
      data: { ...updatedUser },
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
