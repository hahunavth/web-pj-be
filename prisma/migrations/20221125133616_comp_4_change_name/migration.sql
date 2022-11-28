/*
  Warnings:

  - You are about to drop the column `type` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the `OrderDiscount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PromotionalBook` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `genre` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OrderDiscount" DROP CONSTRAINT "OrderDiscount_orderId_fkey";

-- DropForeignKey
ALTER TABLE "OrderDiscount" DROP CONSTRAINT "OrderDiscount_promotionalId_fkey";

-- DropForeignKey
ALTER TABLE "PromotionalBook" DROP CONSTRAINT "PromotionalBook_bookId_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "type",
ADD COLUMN     "genre" TEXT NOT NULL;

-- DropTable
DROP TABLE "OrderDiscount";

-- DropTable
DROP TABLE "PromotionalBook";

-- CreateTable
CREATE TABLE "OrderPromotional" (
    "orderId" INTEGER NOT NULL,
    "promotionalId" INTEGER NOT NULL,

    CONSTRAINT "OrderPromotional_pkey" PRIMARY KEY ("orderId","promotionalId")
);

-- CreateTable
CREATE TABLE "BookDiscount" (
    "id" SERIAL NOT NULL,
    "startAt" TIMESTAMP(3) NOT NULL,
    "endAt" TIMESTAMP(3) NOT NULL,
    "bookId" INTEGER NOT NULL,
    "discount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookDiscount_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrderPromotional" ADD CONSTRAINT "OrderPromotional_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderPromotional" ADD CONSTRAINT "OrderPromotional_promotionalId_fkey" FOREIGN KEY ("promotionalId") REFERENCES "Promotional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookDiscount" ADD CONSTRAINT "BookDiscount_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
