/*
 * @brief Map query từ filter object vào prisma
 *
 * @param filterObj Filter Class instance
 * @returns where input prisma
 *
 * Created on Wed Dec 14 2022
 * Copyright (c) 2022 HaVT
 */
export function queryByAttributes(filterObj): object {
  const where: object = {};
  Object.keys(filterObj).forEach((v) => {
    switch (typeof filterObj[v]) {
      case 'string':
        where[v] = { contains: filterObj[v] };
      // TODO: Case number, array, ...
    }
  });
  return where;
}
/**
  NOTE: INSTEAD OF
  const where = {
  author: {
    contains: query.author,
  },
  category: {
    contains: query.category,
  },
  };
  NOTE: USE 
  const where = queryByAttributes(query)
 */
