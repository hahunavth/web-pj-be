import {
  Module,
  CacheModule,
  CacheInterceptor,
  DynamicModule,
  ForwardReference,
  Type,
  Provider,
} from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AppService } from './app.service';
import configuration from './common/config/env.config';
import { cfgModuleList } from './common/config/module.config';
import { PrismaModule } from './common/prisma/prisma.module';
import { AppController } from './app.controller';
import { UserModule } from './routes/user/user.module';
import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';
import { AuthModule } from './routes/auth/auth.module';
import { BookModule } from './routes/book/book.module';
import { FeedbackModule } from './routes/feedback';

const cfg = {
  useCache: true,
};

@Module({
  imports: cfgModuleList<
    Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference
  >(
    [
      ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: ['.env'],
        load: [configuration],
        cache: true,
      }),
      PrismaModule,
      // NOTE: REGISTER MODULE HERE
      UserModule,
      AuthModule,
      BookModule,
      FeedbackModule,
    ],
    [
      CacheModule.register({
        isGlobal: true,
      }),
      // CacheModule.register<ClientOpts>({
      //   store: redisStore,

      //   // Store-specific configuration:
      //   host: 'localhost',
      //   port: 6379,
      // }),
    ],
    [cfg.useCache],
  ),
  controllers: [AppController],
  providers: cfgModuleList<Provider>(
    [
      AppService,
      {
        provide: APP_FILTER,
        useClass: HttpExceptionFilter,
      },
    ],
    [
      {
        provide: APP_INTERCEPTOR,
        useClass: CacheInterceptor,
      },
    ],
    [cfg.useCache],
  ),
})
export class AppModule {
  // constructor(private readonly cfgService: ConfigService) {
  //   console.log(this.cfgService);
  // }
}
