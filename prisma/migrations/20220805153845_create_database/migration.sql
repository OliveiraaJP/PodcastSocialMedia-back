-- AlterTable
ALTER TABLE "users" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Poscast" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "episodes" INTEGER NOT NULL,
    "beginAt" TIMESTAMP(3) NOT NULL,
    "finished" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Poscast_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PodcastComment" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "poscastId" INTEGER NOT NULL,
    "commentId" INTEGER NOT NULL,

    CONSTRAINT "PodcastComment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Poscast_name_key" ON "Poscast"("name");

-- AddForeignKey
ALTER TABLE "PodcastComment" ADD CONSTRAINT "PodcastComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PodcastComment" ADD CONSTRAINT "PodcastComment_poscastId_fkey" FOREIGN KEY ("poscastId") REFERENCES "Poscast"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PodcastComment" ADD CONSTRAINT "PodcastComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
