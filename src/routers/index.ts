import { Router } from "express";
import authRouter from "./authRouter.js";
import podcastRouter from "./podcastRouter.js";

const router = Router()
router.use(authRouter)
router.use(podcastRouter)

export default router;