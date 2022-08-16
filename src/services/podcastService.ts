import * as podcastRepository from "../repositories/podcastRepository.js"
import { PodcastData } from "../interfaces/podcastInterface.js";
import { AppError } from "../utils/error.js";
import { chalkLogger } from "../utils/chalkLogger.js";

export async function hasUser(id:number) {
    const hasUser = await podcastRepository.getUser(id)
    if(!hasUser){
        throw new AppError(404, 'User not found')
    }
}

export async function hasPodcast(id:number) {
    const hasPodcast = await podcastRepository.getPodcast(id)
    if(!hasPodcast){
        throw new AppError(404, 'Podcast not found')
    }
}

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

export async function getOnePodcast(id: number, userId: number) {
    return await podcastRepository.getOnePodcast(id, userId)
}

export async function geFavoritePodcasts(userId: number) {
    return await podcastRepository.getFavoritePodcasts(userId)
}

export async function handleFavoritePodcast(userId: number, podcastId: number) {
    const checkFavorite = await podcastRepository.checkFavorite(userId, podcastId)
    if(checkFavorite){
        return await podcastRepository.unstarFavorite(checkFavorite.id)
    } else {
        return await podcastRepository.starFavorite(userId, podcastId)
    }
    
}