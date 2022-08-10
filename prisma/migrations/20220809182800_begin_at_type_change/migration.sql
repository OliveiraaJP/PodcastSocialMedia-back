/*
  Warnings:

  - Changed the type of `beginAt` on the `podcasts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "podcasts" DROP COLUMN "beginAt",
ADD COLUMN     "beginAt" DATE NOT NULL;
