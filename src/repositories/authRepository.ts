import { UserData } from "../interfaces/authInterface.js";
import prisma from "../config/database.js"

export async function getEmail(email: string) {
    return await prisma.user.findFirst({where:{email}})
}

export async function getUser(username: string) {
    return await prisma.user.findFirst({where:{username}})
}

export async function createUser(userObj:UserData) {
    return await prisma.user.create({data:userObj})
}