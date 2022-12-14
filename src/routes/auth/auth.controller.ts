import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService } from '../../routes/auth/auth.service';
import {
  AuthLogoutDto,
  AuthTokenDto,
  AuthTokenRefreshDto,
  AuthorizationDto,
  SignInDto,
} from '../../routes/auth/dto/auth.dto';
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
