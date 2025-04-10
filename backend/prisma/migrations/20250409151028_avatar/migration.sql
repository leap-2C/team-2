/*
  Warnings:

  - You are about to drop the column `avartarImage` on the `Profile` table. All the data in the column will be lost.
  - Added the required column `avatarImage` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "avartarImage",
ADD COLUMN     "avatarImage" TEXT NOT NULL,
ALTER COLUMN "backgroundImage" DROP NOT NULL;
