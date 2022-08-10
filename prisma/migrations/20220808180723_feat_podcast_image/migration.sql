/*
  Warnings:

  - Added the required column `image` to the `podcasts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "podcasts" ADD COLUMN     "image" TEXT NOT NULL;
