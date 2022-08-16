
import { CommentData } from "../interfaces/commentInterface.js"
import * as commentRepository from "../repositories/commentRepository.js"
import { AppError } from "../utils/error.js"

export async function hasUser(id:number) {
    const hasUser = await commentRepository.getUser(id)
    if(!hasUser){
        throw new AppError(404, 'User not found')
    }
}

export async function hasPodcast(id:number) {
    const hasPodcast = await commentRepository.getPodcast(id)
    if(!hasPodcast){
        throw new AppError(404, 'Podcast not found')
    }
}

export async function insertComment(commentObj: CommentData) {
    await commentRepository.insertComment(commentObj)
}