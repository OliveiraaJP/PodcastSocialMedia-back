import { Request, Response } from "express";
import { PodcastData } from "../interfaces/podcastInterface.js";
import * as podcastService from "../services/podcastService.js"
import { chalkLogger } from "../utils/chalkLogger.js";

export async function insertPodcast(req: Request, res: Response) {
    const {userId} = res.locals
    chalkLogger.log('controller', userId)
    const {}: PodcastData = req.body
    await podcastService.insert(req.body)
    chalkLogger.log('controller', 'Inserted podcast')
    res.status(201).send('Podcast registered in database!')
}

export async function getAllPodcasts(req: Request, res: Response) {
    const allPod =  await podcastService.getAllPodcasts()
    res.status(202).send(allPod)
}

export async function getOnePodcast(req: Request, res: Response) {
    const {id} = req.params
    const podcastId = Number(id)
    const onePod =  await podcastService.getOnePodcast(podcastId)
    chalkLogger.logObject('controller', onePod)
    res.status(202).send(onePod)
}

export async function getFavoritePodcasts(req: Request, res: Response) {
    const {userId} = res.locals
    const id = Number(userId)
    const allFavoritePod =  await podcastService.geFavoritePodcasts(id)
    res.status(202).send(allFavoritePod)
}

export async function postFavoritePodcast(req: Request, res: Response) {
    const {userId} = res.locals
    const {id} = req.params
    const podcastId = Number(id)
    
    await podcastService.hasUser(Number(userId))
    await podcastService.hasPodcast(podcastId)
    await podcastService.handleFavoritePodcast(Number(userId), podcastId)
    res.status(202).send('un/favorited')
}