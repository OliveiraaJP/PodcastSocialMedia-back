/*
  Warnings:

  - You are about to drop the `podcast_comments` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `podcastId` to the `comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `comments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "podcast_comments" DROP CONSTRAINT "podcast_comments_commentId_fkey";

-- DropForeignKey
ALTER TABLE "podcast_comments" DROP CONSTRAINT "podcast_comments_poscastId_fkey";

-- DropForeignKey
ALTER TABLE "podcast_comments" DROP CONSTRAINT "podcast_comments_userId_fkey";

-- AlterTable
ALTER TABLE "comments" ADD COLUMN     "podcastId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "podcast_comments";

-- CreateTable
CREATE TABLE "comments_likes" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "commentId" INTEGER NOT NULL,

    CONSTRAINT "comments_likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "podcasts_likes" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "podcastId" INTEGER NOT NULL,

    CONSTRAINT "podcasts_likes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_podcastId_fkey" FOREIGN KEY ("podcastId") REFERENCES "podcasts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments_likes" ADD CONSTRAINT "comments_likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments_likes" ADD CONSTRAINT "comments_likes_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "comments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "podcasts_likes" ADD CONSTRAINT "podcasts_likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "podcasts_likes" ADD CONSTRAINT "podcasts_likes_podcastId_fkey" FOREIGN KEY ("podcastId") REFERENCES "podcasts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
