import prisma from "../../src/config/database.js";
import supertest from "supertest";
import app from "../../src/app.js";
import * as podcastFactory from "../factories/podcsatFactory.js"

const agent = supertest(app);

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE users CASCADE`
})

describe('POST/sign-up', () =>{
 it('Create valid user - 201', async() => {
    const user = podcastFactory.createValidUser()
    const response = await agent.post(`/sign-up`).send(user)
    expect(response.statusCode).toBe(201)
 })
 it('Create invalid user schema - 422', async() => {
    const user = podcastFactory.createInvalidUserSchema()
    const response = await agent.post(`/sign-up`).send(user)
    expect(response.statusCode).toBe(422)
 })
 it('Create duplicate user - 400', async() => {
    const user = podcastFactory.createValidUser()
    await agent.post(`/sign-up`).send(user)
    const response = await agent.post(`/sign-up`).send(user)
    expect(response.statusCode).toBe(400)
 })
})



afterAll(async () => {
    await prisma.$executeRaw`TRUNCATE users CASCADE`
    await prisma.$executeRaw`TRUNCATE podcasts CASCADE`
    await prisma.$executeRaw`TRUNCATE comments CASCADE`
    await prisma.$executeRaw`TRUNCATE comments_likes CASCADE`
    await prisma.$executeRaw`TRUNCATE podcasts_likes CASCADE`
    await prisma.$disconnect()
})