import prisma from "../config/database.js";
import { CommentData } from "../interfaces/commentInterface.js";

export async function getUser(id: number) {
    return await prisma.podcast.findFirst({ where: { id } });
}

export async function getPodcast(id: number) {
    return await prisma.podcast.findFirst({ where: { id } });
}

export async function insertComment(commentObj: CommentData) {
    return await prisma.comment.create({data: commentObj})
}