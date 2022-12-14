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
 * NOTE: add @Injectable() decorator in subclass
 *
 * Created on Wed Dec 14 2022
 * Copyright (c) 2022 HaVT
 */
export abstract class CRUDService<M, C, U> {
  constructor(protected readonly prismaDeligate: any) {
    if (!prismaDeligate) {
      throw new Error(
        'CRUDService: unknow prisma ModelDeligate :' + prismaDeligate,
      );
    }
  }

  public async getAll(param?: any): Promise<M[]> {
    return this.prismaDeligate.findMany(param);
  }

  public async getOne(id: number): Promise<M | null> {
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
      createdAt: new Date(),
      updatedAt: new Date(),
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

  public async delete(id: number): Promise<M> {
    // STUB: check exists, filter / map data, ... in callback fn

    return this.prismaDeligate.delete({ where: { id } });
  }

  public abstract checkExists(
    data: M | C | U,
    checkAttr?: string | Array<string>,
  ): Promise<boolean>;
}
