import { IsString, IsNumber, IsOptional } from 'class-validator';

export type ApiSuccess<T> = {
  data: T;
  message?: string;
};

export type PaginateT = {
  page?: number | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
  count: number | undefined;
  total?: number | undefined;
  orderBy?: KV;
  sort?: any;
};

export type PaginateReqQueryT = {
  page?: number | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
};

export class PaginateReqQuery implements PaginateReqQueryT {
  constructor(obj) {
    this.page = obj.page;
    this.limit = obj.limit;
  }

  @IsOptional()
  @IsNumber()
  page?: number | undefined;
  @IsOptional()
  @IsNumber()
  limit?: number | undefined;
}

export type KV = {
  [k: string]: any;
};

export type TimeFilterT = {
  startAt?: string | Date;
  endAt?: string | Date;
  filter?: KV;
};

export class TimeFilter implements TimeFilterT {
  @IsOptional()
  @IsString()
  startAt?: string;
  @IsOptional()
  @IsString()
  endAt?: string;
}

export type ApiPaginateSuccess<T> = ApiSuccess<T> & PaginateT & TimeFilterT;

export class BaseFilterQuery {
  @IsOptional()
  @IsString()
  startAt?: string;
  @IsOptional()
  @IsString()
  endAt?: string;
  @IsOptional()
  @IsNumber()
  page?: number | undefined;
  @IsOptional()
  @IsNumber()
  limit?: number | undefined;
}
