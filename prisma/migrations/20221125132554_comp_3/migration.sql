/*
  Warnings:

  - You are about to drop the column `poster` on the `Book` table. All the data in the column will be lost.
  - The primary key for the `PromotionalBook` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `promotionalId` on the `PromotionalBook` table. All the data in the column will be lost.
  - Added the required column `code` to the `Promotional` table without a default value. This is not possible if the table is not empty.
  - Added the required column `freeShip` to the `Promotional` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minTotal` to the `Promotional` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endAt` to the `PromotionalBook` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startAt` to the `PromotionalBook` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `PromotionalBook` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PromotionalBook" DROP CONSTRAINT "PromotionalBook_promotionalId_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "poster";

-- AlterTable
ALTER TABLE "Promotional" ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "freeShip" BOOLEAN NOT NULL,
ADD COLUMN     "minTotal" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PromotionalBook" DROP CONSTRAINT "PromotionalBook_pkey",
DROP COLUMN "promotionalId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "endAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "startAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "PromotionalBook_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "OrderDiscount" (
    "orderId" INTEGER NOT NULL,
    "promotionalId" INTEGER NOT NULL,

    CONSTRAINT "OrderDiscount_pkey" PRIMARY KEY ("orderId","promotionalId")
);

-- CreateTable
CREATE TABLE "AttachedFile" (
    "bookId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "AttachedFile_pkey" PRIMARY KEY ("bookId")
);

-- AddForeignKey
ALTER TABLE "OrderDiscount" ADD CONSTRAINT "OrderDiscount_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderDiscount" ADD CONSTRAINT "OrderDiscount_promotionalId_fkey" FOREIGN KEY ("promotionalId") REFERENCES "Promotional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttachedFile" ADD CONSTRAINT "AttachedFile_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
