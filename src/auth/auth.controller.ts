import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Req,
  Request,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  OmitType,
} from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { UserEntity } from 'src/user/entities/user.entity';
import { AuthService } from './auth.service';
import { AuthLogoutDto } from './dto/auth-logout.dto';
import { AuthTokenRefreshDto } from './dto/auth-refresh.dto';
import { AuthTokenDto } from './dto/auth-token.dto';
import { SignInDto } from './dto/signin.dto';
import { RefreshTokenGuard } from './jwt-refresh.guard';
import { JwtAuthGuard } from './jwt.guard';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  @ApiOperation({
    summary: 'Sign in',
    description: 'Return access token and refresh token',
  })
  @UseGuards(AuthGuard('local'))
  async signIn(@Body() req: SignInDto) {
    return this.authService.login(req.email, req.password);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  // @ApiBody({ type: AuthorizationDto })
  getProfile() {
    return 'profile';
  }

  @UseGuards(JwtAuthGuard)
  @Get('logout')
  logout(@Body() req: AuthLogoutDto) {
    this.authService.logout(req.id);
  }

  @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  @ApiOkResponse({ type: AuthTokenDto })
  refreshTokens(@Body() req: AuthTokenRefreshDto) {
    const userId = req.id;
    const refreshToken = req.refresh_token;
    return this.authService.refreshTokens(userId, refreshToken);
  }

  // @Post('refreshToken')
  // refreshToken() {}
}
