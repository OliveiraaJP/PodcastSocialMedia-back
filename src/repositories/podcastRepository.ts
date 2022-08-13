import prisma from "../config/database.js";
import { PodcastData } from "../interfaces/podcastInterface.js";

export async function getPodcastName(name: string) {
    return await prisma.podcast.findFirst({ where: { name } });
}

export async function getUser(id: number) {
    return await prisma.podcast.findFirst({ where: { id } });
}

export async function getPodcast(id: number) {
    return await prisma.podcast.findFirst({ where: { id } });
}

export async function insertPodcast(podcastData: PodcastData) {
    return await prisma.podcast.create({
        data: podcastData,
    });
}

export async function getAllPodcasts() {
    return await prisma.podcast.findMany({});
}

export async function getOnePodcast(id: number, userId: number) {
    return await prisma.podcast.findFirst({
        where: { id },
        include: { PodcastLikes: { where: { AND: [{ podcastId: id }, { userId }] } } },
        orderBy:{updateAt: 'desc'}
    });
}

export async function getFavoritePodcasts(userId: number) {
    return await prisma.podcastLike.findMany({
        where: {
            userId,
        },
        select: {
            podcastRef: {},
        },
    });
}

export async function checkFavorite(userId: number, podcastId: number) {
    return await prisma.podcastLike.findFirst({ where: { userId, podcastId } });
}

export async function unstarFavorite(id: number) {
    return await prisma.podcastLike.delete({ where: { id } });
}

export async function starFavorite(userId: number, podcastId: number) {
    return await prisma.podcastLike.create({
        data: {
            podcastId,
            userId,
        },
    });
}
