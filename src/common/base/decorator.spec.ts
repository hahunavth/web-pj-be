import * as httpMock from 'node-mocks-http';
import { Test, TestingModule } from '@nestjs/testing';
import { PaginateQuery } from './base.decorator';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { ROUTE_ARGS_METADATA } from '@nestjs/common/constants';
import { BookController } from '../../routes/book/book.controller';
import { BookService } from '../../routes/book/book.service';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClient } from '@prisma/client';
import { mockDeep } from 'jest-mock-extended';
import { PrismaModule } from '../prisma/prisma.module';
import { Type } from '@nestjs/common/interfaces';

describe('TestCustomDecorator', () => {
  const req = httpMock.createRequest();
  let bookController: BookController;

  function getParamDecoratorFactory(decorator) {
    class TestDecorator {
      public test(@decorator() value) {
        console.log(value);
      }
    }

    const args = Reflect.getMetadata(
      ROUTE_ARGS_METADATA,
      TestDecorator,
      'test',
    );
    return args[Object.keys(args)[0]].factory;
  }

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      controllers: [BookController],
      providers: [BookService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    bookController = app.get<BookController>(BookController);
  });

  describe('decorator', () => {
    it('Decorator Test', () => {
      const req = httpMock.createRequest();
      const res = httpMock.createResponse();
      const mockPaginate = { page: 1, limit: 5 };
      req.query = mockPaginate as any;
      // const constructorRef: Type<Date> = (req, res) => {
      //   return new Date();
      // };
      // const ctx = new ExecutionContextHost(
      //   [req, res],
      //   bookController,
      //   bookController.findAll,
      // );

      const factory = getParamDecoratorFactory(PaginateQuery);
      // console.error(factory({}, ctx));

      // const user = getParamDecoratorFactory(null, req);
      // expect(bookController.findAll({ ...mockUser }, {}, {})).toStrictEqual(
      //   req.user,
      // );
    });
  });
});
