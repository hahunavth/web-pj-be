import { ApiPaginateSuccess } from './base.dto';

/*
 * @brief Map response của endpoint getAll với phân trang và filter theo 1 số thuộc tính
 *
 * Created on Wed Dec 14 2022
 * Copyright (c) 2022 HaVT
 */
export function paginateResponse<T>({
  data,
  message,
  count,
  limit,
  page,
  endAt,
  startAt,
  filter,
  sort,
}: ApiPaginateSuccess<T>) {
  return {
    message: message || 'Successfully',
    page,
    limit,
    count,
    startAt,
    endAt,
    filter,
    sort,
    data,
  };
}
