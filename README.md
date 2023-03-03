# Book Selling Website Backend

This repository contains the backend code for a book selling website.

- Framework: [Nestjs](https://docs.nestjs.com/)
- ORM: [Prisma](https://www.prisma.io/)

## Folder structure

```bash
.
├── prisma               # Object Relational Mapping
│   ├── schema.prisma       # File định nghĩa schema db
│   └── seed.ts             # seed db
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

### Prerequisite
- NodeJs 16+
- PostgresSQL database

### Clone project

```bash
git clone ...
cd project_dir
yarn
```

### Setup env and database
#### Setup env variables

 1. Copy the .env.example file and rename it to .env.
 2. Open the .env file and set the DATABASE_URL to your database connection URL.

#### Setup database
  1. Check the status of migrations in the production/staging database:
  ```shell
  npx prisma migrate status
  ```
  2. Database schema
  - If the database table exists, run the migration script:
    ```shell
    npx prisma migrate dev
    ```
  - Or push the Prisma schema state to the database:
    ```shell
    npx prisma db push
    ```
  3. Seed the database:
  ```shell
  npx prisma db seed
  ```
  For more information, run `npx prisma migrate help`.
### Running the app

```bash
# development
yarn start

# watch mode
yarn start:dev

# production mode
yarn start:prod
```

- Go to: http://localhost:3000/api

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
CI runs when you push your code into master branch.

## Usage
- API docs in production: https://web-pj-be.fly.dev/api
