import { Request, Response } from "express";
import { CommentDataRequest } from "../interfaces/commentInterface.js";
import * as commentService from "../services/commentService.js"

export async function postComment(req: Request, res: Response) {
    const {userId} = res.locals
    const {podcastId,text}: CommentDataRequest = req.body
    
    await commentService.hasPodcast(podcastId)
    await commentService.hasUser(userId)

    await commentService.insertComment({userId,podcastId,text})

    res.status(201).send('Comment posted with sucess!')
}