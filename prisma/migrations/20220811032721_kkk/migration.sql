/*
  Warnings:

  - A unique constraint covering the columns `[userId,commentId]` on the table `comments_likes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,podcastId]` on the table `podcasts_likes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `podcasts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "podcasts" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "comments_likes_userId_commentId_key" ON "comments_likes"("userId", "commentId");

-- CreateIndex
CREATE UNIQUE INDEX "podcasts_likes_userId_podcastId_key" ON "podcasts_likes"("userId", "podcastId");
