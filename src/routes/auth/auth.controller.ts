import { UserService } from './../user/user.service';
import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
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
@ApiTags('Auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

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
  @ApiOperation({
    summary: ' - Example: role cần đăng nhập mới truy cập được',
  })
  // @ApiBody({ type: AuthorizationDto })
  getProfile(@Request() req) {
    const userId = req.user.userId;
    const user = this.userService.findOne(userId);

    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('logout')
  @ApiOperation({
    summary: ' - Đăng xuất: vô hiệu access và refresh token',
  })
  logout(@Body() req: AuthLogoutDto) {
    this.authService.logout(req.id);
  }

  @ApiOperation({
    summary:
      ' - Access token bị expired sau 1 khoảng thời gian, cần refresh token để generate lại access token mới',
  })
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
