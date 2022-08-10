import {Podcast} from "@prisma/client"

export type PodcastData = Omit<Podcast, "createdAt" | "id">