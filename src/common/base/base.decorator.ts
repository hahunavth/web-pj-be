import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import moment from 'moment';
import { PaginateReqQuery, PaginateReqQueryT } from './base.dto';

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

export const TimeQuery = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const query = ctx.switchToHttp().getRequest().query;
    const { startAt, endAt } = query;

    const result: { startAt?: string; endAt?: string; where?: any } = {};
    if (startAt != null && moment(String(startAt))) {
      result.startAt = moment(String(startAt)).format('YYYY-MM-DD HH:mm:ss');
    }
    if (endAt != null && moment(String(endAt))) {
      result.endAt = moment(String(endAt)).format('YYYY-MM-DD HH:mm:ss');
    }

    const list = [];
    result.where = { created_at: { AND: list } };
    if (startAt) {
      list.push({ gte: startAt });
    }
    if (endAt) {
      list.push({ lte: endAt });
    }

    return result;
  },
);
