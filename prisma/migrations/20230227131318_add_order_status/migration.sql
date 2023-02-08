/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coverForm` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coverUrl` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `supplier` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `width` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED', 'DELIVERING', 'DELIVERED', 'RETURNING', 'RETURNED');

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "coverForm" TEXT NOT NULL,
ADD COLUMN     "coverUrl" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "height" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "language" TEXT NOT NULL,
ADD COLUMN     "supplier" TEXT NOT NULL,
ADD COLUMN     "weight" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "width" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "status" "OrderStatus" NOT NULL DEFAULT 'PENDING';

-- CreateIndex
CREATE UNIQUE INDEX "Book_code_key" ON "Book"("code");
