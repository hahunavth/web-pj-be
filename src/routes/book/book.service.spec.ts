import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../../common/prisma/prisma.module';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { PrismaService } from '../../common/prisma/prisma.service';
import { PrismaClient } from '@prisma/client';

describe('BookService', () => {
  let service: BookService;
  let prisma: DeepMockProxy<PrismaClient>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      controllers: [BookController],
      providers: [BookService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    service = module.get<BookService>(BookService);
    prisma = module.get(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // it('should create a book', async () => {
  //   const _book = {
  //     author: 'abc',
  //     category: 'def',
  //     coverType: 'fasdg',
  //     numOfPages: 1000,
  //     price: 245,
  //     publisher: 'xyz',
  //   };
  //   const book = await service.create({
  //     ..._book,
  //     id: 1,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //     publishDate: new Date(),
  //   });

  // expect(book.).toBeDefined();
  // expect(book.id).toBeDefined();
  // expect(book.author).toBe('abc');
  // expect(book.category).toBe('def');
  // expect(book.coverType).toBe('fasdg');
  // expect(book.numOfPages).toBe(1000);
  // expect(book.price).toBe(245);
  // expect(book.publisher).toBe('xyz');
  // });
});
