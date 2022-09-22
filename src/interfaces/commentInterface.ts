import { Comment } from "@prisma/client";

export type CommentData = Omit<Comment, 'id'>
export type CommentDataRequest = Omit<Comment, 'id' | 'userId'>