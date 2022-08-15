import { jest } from "@jest/globals"
import * as podcastRepository from "../../src/repositories/podcastRepository.js"
import * as podcastService from "../../src/services/podcastService.js"

beforeEach(() => {
    jest.clearAllMocks()
    jest.resetAllMocks()
})

describe("Podcast unit test", () => {
    jest.spyOn(podcastRepository, "getAllPodcasts").mockImplementationOnce(():any => {
        return {
            id:1,
            name: 'teste',
            episodes: 2,
            finished: false,
            image: 'https://i.imgur.com/TLCUliA.png',
            beginAt: '27/11/1998',
            description: 'testetesteteste'
        }
    })

    it('Get all poscasts', async () => {
        const response = await podcastService.getAllPodcasts()
        expect(response).toBeCalled()
        expect(response.length).toBeGreaterThanOrEqual(1)
        expect(response[0].name).toEqual('teste')
    })
    it('Get one podcast', async () => {
        const response = await podcastService.getOnePodcast(1, 1)
        expect(response).toBeCalled()
        expect(response[0].name).toEqual('teste')

    })
})