/*
  Warnings:

  - You are about to drop the column `isGuest` on the `Donation` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `Donation` table. All the data in the column will be lost.
  - You are about to drop the column `paymentUrl` on the `Donation` table. All the data in the column will be lost.
  - Added the required column `socialUrlOrBuyMeACoffeeUrl` to the `Donation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specialMessage` to the `Donation` table without a default value. This is not possible if the table is not empty.
  - Made the column `donorId` on table `Donation` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Donation" DROP CONSTRAINT "Donation_donorId_fkey";

-- AlterTable
ALTER TABLE "Donation" DROP COLUMN "isGuest",
DROP COLUMN "message",
DROP COLUMN "paymentUrl",
ADD COLUMN     "socialUrlOrBuyMeACoffeeUrl" TEXT NOT NULL,
ADD COLUMN     "specialMessage" TEXT NOT NULL,
ALTER COLUMN "donorId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
