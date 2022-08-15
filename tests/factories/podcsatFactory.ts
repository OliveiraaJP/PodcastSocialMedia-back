import prisma from "../../src/config/database.js";
import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt"

export function createValidUser(){
    const pass = bcrypt.hashSync("123", 10)
    const user = {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        password: pass,
        confirmPassword: pass, 
        image: faker.internet.avatar()
    }
    return user
}

export function createInvalidUserSchema(){
    const pass = bcrypt.hashSync("123", 10)
    const user = {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        password: pass,
        image: faker.internet.avatar()
    }
    return user
}