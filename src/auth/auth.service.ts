import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { trim } from 'src/common/utils/cast.utils';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserEntity } from 'src/user/entities/user.entity';
import { argon2d, hash, verify } from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async login(email: string, passport: string) {
    const res = await this.validateUsernameAndPassword(email, passport);

    if (res?.user) {
      const user = res.user;
      const result = await this.getTokens(user.id, user.email);
      await this.updateRefreshToken(user.id, result.refresh_token);
      return result;
    } else {
      throw new UnauthorizedException(res.error);
    }
  }

  async logout(userId: number) {
    return this.prisma.userToken.delete({ where: { userId } });
  }

  async refreshTokens(userId: number, refreshToken: string) {
    const userT = await this.prisma.userToken.findFirst({ where: { userId } });
    const user = await this.prisma.user.findFirst({ where: { id: userId } });
    if (!userT || !user || !userT.token)
      throw new ForbiddenException('Access Denied');
    const refreshTokenMatches = await verify(userT.token, refreshToken);
    if (!refreshTokenMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.getTokens(userId, user.email);
    await this.updateRefreshToken(user.id, tokens.refresh_token);
    return tokens;
  }

  private async validateUsernameAndPassword(
    email: string,
    password: string,
  ): Promise<{ error?: string; user?: UserEntity }> {
    const result = {
      user: null,
      error: null,
    };

    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      if (await verify(user.password, password)) {
        const { password: pwd, ...userInfo } = user;
        result.user = userInfo;
      } else {
        result.error = 'Invalid password!';
      }
    } else {
      result.error = 'Invalid email!';
    }

    return result;
  }

  private async getTokens(userId: number, email: string) {
    const payload = { username: email, sub: userId };
    return {
      access_token: this.jwtService.sign(payload, {
        expiresIn: '30m',
        secret: this.configService.get('jwtSecret'),
      }),
      refresh_token: this.jwtService.sign(payload, {
        expiresIn: '30d',
        secret: this.configService.get('jwtRefreshSecret'),
      }),
    };
  }

  private async updateRefreshToken(userId: number, refreshToken: string) {
    const hashedRefreshToken = await hash(refreshToken);
    await this.prisma.userToken.upsert({
      where: { userId },
      create: {
        userId,
        token: hashedRefreshToken,
      },
      update: {
        token: hashedRefreshToken,
      },
    });
    return hashedRefreshToken;
  }
}
