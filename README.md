# Backend

- Framework: [Nestjs](https://docs.nestjs.com/)
- ORM: [Prisma](https://www.prisma.io/)

## Folder structure

```bash
.
├── prisma               # Object Relational Mapping
│   ├── schema.prisma       # File định nghĩa schema db   
│   └── seed.ts             # seed db (chưa làm)
├── README.md
├── src
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts   # Các module trong ./routes được add vào đây
│   ├── app.service.ts
│   ├── common        # shared file
│   │   ├── base        # Các utils dùng cho controller, service, mapping ...
│   │   ├── config    # config
│   │   ├── exceptions  # exception filters
│   │   ├── prisma      # prisma module
│   │   └── utils       # deprecated
│   ├── generated-dto # Class tương ứng với các bảng được generate bằng prisma
│   │   ├── book        # Mỗi subfolder gồm 4 file: entity, create, update, connect
│   │   ├── card        # Có thể xem cách generate tại đây
│   │   └── ...         # https://github.com/vegardit/prisma-generator-nestjs-dto#principles
│   ├── main.ts
│   └── routes        # Chứa các modules tương ứng vs các routes
│       ├── auth        # Mỗi module gồm file: module, controller, service
│       ├── book        #    File test: *.spec.ts
│       ├── feedback
│       └── ...
├── test
└── ...
```


## Setup

### Clone project

```bash
git clone ...
cd project_dir
yarn
```

### Running the app

```bash
# development
yarn start

# watch mode
yarn start:dev

# production mode
yarn start:prod
```

- Goto: http://localhost:3000/api

### Test

```bash
# unit tests
yarn test

# e2e tests
yarn test:e2e

# test coverage
yarn test:cov
```

### CI/CD
```bash
gitlab-runner exec docker <name>
```

## Usage

### Prisma

```bash

```

## Todo

- [ ] Viết API liên quan đến quy trình bán hàng
- [ ] Viết API thống kê
- [ ] Crawl dữ liệu sách
