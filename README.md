# Backend

- Framework: [Nestjs](https://docs.nestjs.com/)
- ORM: [Prisma](https://www.prisma.io/)

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

npx prisma generate