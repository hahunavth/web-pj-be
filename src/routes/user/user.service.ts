import { BadRequestException, Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from '../../common/prisma/prisma.service';
import { hash } from 'argon2';
import { CRUDService } from '../../common/base/crud.service';
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

  async create(data: CreateUserDto): Promise<User> {
    // NOTE: CHECK USER EXISTS
    const userExists = await this.checkExists(data);
    if (userExists) {
      throw new BadRequestException('User already exists');
    }
    // NOTE: HASH PASSWORD BEFORE SAVE TO DB
    if (typeof data.password == 'string') {
      data.password = await hash(data.password);
    }
    // PARENT CLASS
    return super.create(data);
  }

  async update(id: number, data: UpdateUserDto): Promise<UpdateUserDto> {
    // NOTE: HASH PASSWORD BEFORE SAVE TO DB
    if (typeof data.password == 'string') {
      data.password = await hash(data.password);
    }
    // PARENT CLASS
    return super.update(id, data);
  }

  // Overrride
  public async checkExists(
    data: User | CreateUserDto | UpdateUserDto,
    checkAttr?: string | string[],
  ): Promise<boolean> {
    const userExists = await this.prisma.user.findFirst({
      where: { email: data.email },
    });
    return !!userExists;
  }
}

console.table(Injectable.prototype);
