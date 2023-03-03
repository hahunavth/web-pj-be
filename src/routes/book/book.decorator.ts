import { SortBookDto } from './dto/sort-book.dto';
import { FilterBookDto } from './dto/filter-book.dto';
import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const FilterBookQuery = createParamDecorator(
  (_data: undefined, ctx: ExecutionContext) => {
    const query = ctx.switchToHttp().getRequest().query;
    return new FilterBookDto(query);
  },
);

export const SortBookQuery = createParamDecorator(
  (_data: undefined, ctx: ExecutionContext) => {
    const query = ctx.switchToHttp().getRequest().query;
    return new SortBookDto(query);
  },
);
