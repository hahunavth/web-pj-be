import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  prisma.user.upsert({
    create: {
      email: 'vuthanhha.2001@gmail.com',
      name: 'hahunavth',
      password: '123456789',
      role: 'ADMIN',
      gender: 'MALE',
      phone: '098765321',
    },
    update: {},
    where: {},
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
