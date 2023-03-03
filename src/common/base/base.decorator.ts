import { FilterBookDto } from './../../routes/book/dto/filter-book.dto';
import { applyDecorators, Type } from '@nestjs/common';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiParam,
  ApiQuery,
  getSchemaPath,
} from '@nestjs/swagger';
import * as moment from 'moment';
import { objAttrMapper } from '../utils/obj-attr.mapper';
import { PaginateReqQueryT } from './base.dto';
import { UpdateOrderDto } from 'src/generated-dto/order/dto';

/*
 * @brief Transform request param / query decorator
 *
 * Created on Wed Dec 14 2022
 * Copyright (c) 2022 HaVT
 */

/*
 * @brief Parse: req.query => paginate attrs
 */
export const PaginateQuery = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): PaginateReqQueryT => {
    const query = ctx.switchToHttp().getRequest().query;

    const { limit, page } = query;

    const _page = Number.parseInt(page as string);
    const _limit = Number.parseInt(limit as string);

    const offset = (_page - 1) * _limit;
    return {
      page: _page || undefined,
      offset: offset || undefined,
      limit: _limit || undefined,
    };
  },
);

/**
 * @brief Nhận danh sách filter từ request.query
 *
 * @param _filterCls Class chứa attribute để filter
 */
export const AttrQuery = createParamDecorator(
  (_filterCls: Type<any>, ctx: ExecutionContext) => {
    const query = ctx.switchToHttp().getRequest().query;
    const filter = objAttrMapper(new _filterCls(), query);
    return filter;
  },
);

export type TimeQueryT = { startAt?: Date; endAt?: Date; where?: any };

// TODO
export const TimeQuery = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const query = ctx.switchToHttp().getRequest().query;
    let { startAt, endAt } = query;

    const result: { startAt?: Date; endAt?: Date; where?: any } = {};
    if (
      startAt != null
      //  && moment(String(startAt))
    ) {
      startAt = moment(String(startAt)).format('YYYY-MM-DD HH:mm:ss');
      result.startAt = new Date(startAt);
    }
    if (endAt != null && moment(String(endAt))) {
      endAt = moment(String(endAt)).format('YYYY-MM-DD HH:mm:ss');
      result.endAt = new Date(endAt);
    }

    const list: {
      gte?: Date;
      lte?: Date;
    }[] = [];

    result.where = {};
    if (startAt) {
      list.push({ gte: result.startAt });
    }
    if (result.endAt) {
      list.push({ lte: result.endAt });
    }
    if (list.length == 2) {
      result.where = { createdAt: { AND: list } };
    } else if (list.length == 1) {
      result.where = { createdAt: list[0] };
    }

    return result;
  },
);

/**
 * @brief: reqeest param includes:
 *  - page, linit
 *  - filter by model attribute
 *
 * @param filter filter class
 * @returns
 */
export const ApiGetAllQuery = <TModel extends Type<any>>(filter: TModel) => {
  return applyDecorators(
    ApiExtraModels(filter),
    ApiQuery({ name: 'page', type: Number, required: false }),
    ApiQuery({ name: 'limit', type: Number, required: false }),
    ApiQuery({ name: 'startAt', type: String, required: false }),
    ApiQuery({ name: 'endAt', type: String, required: false }),
    ApiQuery({ type: filter }),
  );
};
