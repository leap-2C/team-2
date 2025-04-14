/*
  Warnings:

  - You are about to drop the column `socialUrlOrBuyMeACoffeeUrl` on the `Donation` table. All the data in the column will be lost.
  - You are about to drop the column `specialMessage` on the `Donation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Donation" DROP CONSTRAINT "Donation_donorId_fkey";

-- AlterTable
ALTER TABLE "Donation" DROP COLUMN "socialUrlOrBuyMeACoffeeUrl",
DROP COLUMN "specialMessage",
ADD COLUMN     "isGuest" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "message" TEXT,
ADD COLUMN     "paymentUrl" TEXT,
ALTER COLUMN "donorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
