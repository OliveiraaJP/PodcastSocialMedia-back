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
    const {userId} = res.locals
    const allPod =  await podcastService.getAllPodcasts()
    res.status(202).send(allPod)
}