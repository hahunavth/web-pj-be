import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { PrismaService } from './common/prisma/prisma.service';
import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';
import { AllExceptionsFilter } from './common/exceptions/all-exception.filter';
import { PrismaExceptionFilter } from './common/exceptions/prisma-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  app.setGlobalPrefix('api');

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      enableDebugMessages: true,
      whitelist: true, // removes any property of query, body, and a parameter that is not part of our DTO
      transform: true, // enables the transformation of our incoming request
    }),
  );

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter({ httpAdapter }));
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalFilters(new PrismaExceptionFilter());

  // Swagger config
  const config = new DocumentBuilder()
    .setTitle('Book shop api')
    .setDescription('The book shop API description')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('default')
    .addTag('User')
    .addTag('Auth')
    .addTag('Book')
    .addTag('Order', 'Thông tin về đơn hàng Order, OrderItem')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // print config
  const configService = app.get(ConfigService);
  console.log(configService);

  const port = configService.get('port');
  await app.listen(port);
}

bootstrap();
