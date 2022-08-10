import prisma from "../config/database.js"
import { PodcastData } from "../interfaces/podcastInterface.js"

export async function getPodcastName(name: string) {
    return await prisma.podcast.findFirst({ where: { name } })
}

export async function insertPodcast(podcastData: PodcastData) {
    return await prisma.podcast.create({
        data: podcastData
    })
}

export async function getAllPodcasts() {
    return await prisma.podcast.findMany({})
}