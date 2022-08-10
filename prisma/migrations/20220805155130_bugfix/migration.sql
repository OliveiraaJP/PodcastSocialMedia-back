/*
  Warnings:

  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PodcastComment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Poscast` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PodcastComment" DROP CONSTRAINT "PodcastComment_commentId_fkey";

-- DropForeignKey
ALTER TABLE "PodcastComment" DROP CONSTRAINT "PodcastComment_poscastId_fkey";

-- DropForeignKey
ALTER TABLE "PodcastComment" DROP CONSTRAINT "PodcastComment_userId_fkey";

-- DropTable
DROP TABLE "Comment";

-- DropTable
DROP TABLE "PodcastComment";

-- DropTable
DROP TABLE "Poscast";

-- CreateTable
CREATE TABLE "podcasts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "episodes" INTEGER NOT NULL,
    "beginAt" TIMESTAMP(3) NOT NULL,
    "finished" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "podcasts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "podcast_comments" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "poscastId" INTEGER NOT NULL,
    "commentId" INTEGER NOT NULL,

    CONSTRAINT "podcast_comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "podcasts_name_key" ON "podcasts"("name");

-- AddForeignKey
ALTER TABLE "podcast_comments" ADD CONSTRAINT "podcast_comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "podcast_comments" ADD CONSTRAINT "podcast_comments_poscastId_fkey" FOREIGN KEY ("poscastId") REFERENCES "podcasts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "podcast_comments" ADD CONSTRAINT "podcast_comments_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "comments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
