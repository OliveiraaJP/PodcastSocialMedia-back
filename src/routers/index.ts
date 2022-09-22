import { Router } from "express";
import authRouter from "./authRouter.js";
import commentRouter from "./commentRouter.js";
import podcastRouter from "./podcastRouter.js";

const router = Router()
router.use(authRouter)
router.use(podcastRouter)
router.use(commentRouter)

export default router;