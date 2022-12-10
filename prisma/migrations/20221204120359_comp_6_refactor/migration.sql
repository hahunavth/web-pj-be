/*
  Warnings:

  - You are about to drop the column `authorId` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `code` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `details` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `discount` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `form` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `genre` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `height` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `publishingDate` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `rate` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `supplier` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `translator` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `width` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `shippingFee` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `totalWithTax` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Order` table. All the data in the column will be lost.
  - The primary key for the `OrderItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `unitPrice` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the `AttachedFile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Author` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BookDiscount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ImportHist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderPromotional` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Promotional` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WareHouse` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[publishDate]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[invoiceId]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `author` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coverType` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numOfPages` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `invoiceId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shippingFees` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AttachedFile" DROP CONSTRAINT "AttachedFile_bookId_fkey";

-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_authorId_fkey";

-- DropForeignKey
ALTER TABLE "BookDiscount" DROP CONSTRAINT "BookDiscount_bookId_fkey";

-- DropForeignKey
ALTER TABLE "ImportHist" DROP CONSTRAINT "ImportHist_bookId_fkey";

-- DropForeignKey
ALTER TABLE "ImportHist" DROP CONSTRAINT "ImportHist_wareHouseId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";

-- DropForeignKey
ALTER TABLE "OrderPromotional" DROP CONSTRAINT "OrderPromotional_orderId_fkey";

-- DropForeignKey
ALTER TABLE "OrderPromotional" DROP CONSTRAINT "OrderPromotional_promotionalId_fkey";

-- DropForeignKey
ALTER TABLE "WareHouse" DROP CONSTRAINT "WareHouse_bookId_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "authorId",
DROP COLUMN "code",
DROP COLUMN "createdAt",
DROP COLUMN "details",
DROP COLUMN "discount",
DROP COLUMN "form",
DROP COLUMN "genre",
DROP COLUMN "height",
DROP COLUMN "name",
DROP COLUMN "price",
DROP COLUMN "publishingDate",
DROP COLUMN "quantity",
DROP COLUMN "rate",
DROP COLUMN "supplier",
DROP COLUMN "translator",
DROP COLUMN "updatedAt",
DROP COLUMN "weight",
DROP COLUMN "width",
ADD COLUMN     "author" TEXT NOT NULL,
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "coverType" TEXT NOT NULL,
ADD COLUMN     "numOfPages" INTEGER NOT NULL,
ADD COLUMN     "publishDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "createdAt",
DROP COLUMN "shippingFee",
DROP COLUMN "status",
DROP COLUMN "totalWithTax",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "invoiceId" INTEGER NOT NULL,
ADD COLUMN     "shippingFees" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_pkey",
DROP COLUMN "id",
DROP COLUMN "unitPrice",
ADD COLUMN     "price" INTEGER NOT NULL,
ADD CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("bookId", "orderId");

-- DropTable
DROP TABLE "AttachedFile";

-- DropTable
DROP TABLE "Author";

-- DropTable
DROP TABLE "BookDiscount";

-- DropTable
DROP TABLE "ImportHist";

-- DropTable
DROP TABLE "OrderPromotional";

-- DropTable
DROP TABLE "Promotional";

-- DropTable
DROP TABLE "WareHouse";

-- DropEnum
DROP TYPE "OrderStatus";

-- CreateTable
CREATE TABLE "Feedback" (
    "comment" TEXT NOT NULL,
    "star" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "bookId" INTEGER NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("userId","bookId")
);

-- CreateTable
CREATE TABLE "UserCart" (
    "quantity" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "bookId" INTEGER NOT NULL,

    CONSTRAINT "UserCart_pkey" PRIMARY KEY ("userId","bookId")
);

-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "cvvCode" INTEGER NOT NULL,
    "cardCode" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "dateExpired" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentTransaction" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "method" TEXT NOT NULL,
    "cardId" INTEGER NOT NULL,

    CONSTRAINT "PaymentTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" SERIAL NOT NULL,
    "totalAmount" INTEGER NOT NULL,
    "paymentTransactionId" INTEGER NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PaymentTransaction_cardId_key" ON "PaymentTransaction"("cardId");

-- CreateIndex
CREATE UNIQUE INDEX "Book_publishDate_key" ON "Book"("publishDate");

-- CreateIndex
CREATE UNIQUE INDEX "Order_invoiceId_key" ON "Order"("invoiceId");

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCart" ADD CONSTRAINT "UserCart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCart" ADD CONSTRAINT "UserCart_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentTransaction" ADD CONSTRAINT "PaymentTransaction_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_paymentTransactionId_fkey" FOREIGN KEY ("paymentTransactionId") REFERENCES "PaymentTransaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
