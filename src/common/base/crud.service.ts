import { Inject } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TimeQueryT } from './base.decorator';
import { PaginateReqQueryT, KV } from './base.dto';
import { paginateResponse } from './response.mapper';

/*
 * @brief base CRUD service with prisma orm
 *
 * @params type E:  Entity type
 * @params type C:  Create DTO type
 * @params type U:  Update DTO type
 *
 * @params prisma:  prisma generated model type
 *                  EX: model: User -> type: prisma.user
 *
 * NOTE: add @Injectable() decorator in subclass
 *
 * Created on Wed Dec 14 2022
 * Copyright (c) 2022 HaVT
 */
export abstract class CRUDService<M, C, U> {
  constructor(
    public readonly prismaDeligate: any,
    public readonly __prisma: any,
  ) {
    if (!prismaDeligate) {
      throw new Error(
        'CRUDService: unknown prisma ModelDeligate :' + prismaDeligate,
      );
    }
  }

  public async findAll(
    paginate: PaginateReqQueryT,
    timeQuery?: TimeQueryT,
    attrQuery?: KV,
    orderBy?: KV,
  ) {
    const where = {
      ...attrQuery,
      ...timeQuery?.where,
    };

    const findManyPromise = this.prismaDeligate.findMany({
      skip: paginate.offset,
      take: paginate.limit,
      where,
      orderBy,
    });
    const countPromise = this.prismaDeligate.count({ where });

    const [data, total] = await this.__prisma.$transaction([
      findManyPromise,
      countPromise,
    ]);

    return paginateResponse({
      count: data?.length,
      data,
      startAt: timeQuery?.startAt,
      endAt: timeQuery?.endAt,
      ...paginate,
      filter: attrQuery,
      orderBy,
      total,
    });
  }

  public async findOne(id: number): Promise<M | null> {
    return this.prismaDeligate.findUnique({ where: { id: id } });
  }

  /**
   * @brief Create 1 record in db
   *
   * Customize:
   *    1. extend
   *    2. check null
   *    3. check exists with callback
   * @param data
   * @param callback
   */
  public async create(data: C, callback?: (data: C) => Promise<C>): Promise<M> {
    // STUB: CHECK NULL, ...
    // STUB: check exists, filter / map data, ... in callback fn
    if (callback) data = await callback(data);

    // STUB: create record
    // instead of
    // return this.prisma.user.create({
    //   data: {
    //     ...data,
    //     password: await hash(data.password),
    //   },
    // });
    // use
    return this.prismaDeligate.create({
      data,
    });
  }

  public async update(
    id: number,
    data: U,
    callback?: (data: U) => Promise<U>,
  ): Promise<U> {
    // STUB: CHECK NULL, ...
    // STUB: check exists, filter / map data, ... in callback fn
    if (callback) data = await callback(data);

    return this.prismaDeligate.update({ where: { id: id }, data });
  }

  public async remove(id: number): Promise<M> {
    // STUB: check exists, filter / map data, ... in callback fn

    return this.prismaDeligate.delete({ where: { id } });
  }

  public checkExists(
    data: M | C | U,
    checkAttr?: string | Array<string>,
  ): Promise<boolean> {
    return new Promise(() => false);
  }
}
