import * as podcastRepository from "../repositories/podcastRepository.js"
import { PodcastData } from "../interfaces/podcastInterface.js";
import { AppError } from "../utils/error.js";
import { chalkLogger } from "../utils/chalkLogger.js";

export async function insert(podcastObj: PodcastData) {
    const { name } = podcastObj
    const hasName = await podcastRepository.getPodcastName(name)
    if (hasName) {
        throw new AppError(409, 'Podcast already exists!')
    }
    await podcastRepository.insertPodcast(podcastObj)
}

export async function getAllPodcasts() {
    return await podcastRepository.getAllPodcasts()
}