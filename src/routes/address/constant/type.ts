export type City = {
  name: string;
  slug: string;
  type: 'tinh';
  name_with_type: string;
  code: string;
};

export type District = {
  name: string;
  slug: string;
  type: 'quan' | 'huyen' | 'thanh-pho';
  name_with_type: string;
  path: string;
  path_with_type: string;
  code: string;
  parent_code: string;
};

export type Ward = {
  name: string;
  slug: string;
  type: 'phuong' | 'xa' | 'thi-xa' | 'thi-tran';
  name_with_type: string;
  path: string;
  path_with_type: string;
  code: string;
  parent_code: string;
};
