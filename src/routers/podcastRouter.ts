import { Router } from "express";
import { getAllPodcasts, insertPodcast} from "../controllers/podcastController.js";
import { validateSchemaMiddleware } from "../middlewares/validSchema.js";
import { tokenValidator } from "../middlewares/validToken.js";
import { InsertPodcastSchema } from "../models/podcastSchema.js";

const podcastRouter = Router()

podcastRouter.post('/podcast', validateSchemaMiddleware(InsertPodcastSchema), tokenValidator ,insertPodcast)
podcastRouter.get('/podcasts', tokenValidator ,getAllPodcasts)

export default podcastRouter