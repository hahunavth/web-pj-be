import { PrismaService } from '../prisma/prisma.service';

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
 * Created on Wed Dec 14 2022
 * Copyright (c) 2022 HaVT
 */
export class CRUDService<E, C, U> {
  constructor(private prismaDeligate: any) {
    if (!prismaDeligate) {
      throw new Error(
        'CRUDService: unknow prisma ModelDeligate :' + prismaDeligate,
      );
    }
  }

  public async getAll(): Promise<E[]> {
    return this.prismaDeligate.findMany({});
  }

  /**
   * Create 1 record in db
   *
   * @implements:
   *    1. extend
   *    2. check null
   *    3. check exists with callback
   * @param data
   * @param callback
   */
  public async create(data: C, callback?: (data: C) => Promise<C>): Promise<I> {
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
    return this.prismaDeligate.create({ data });
  }
}
