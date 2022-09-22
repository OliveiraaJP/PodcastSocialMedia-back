import { Router } from "express";
import { postComment } from "../controllers/commentController.js";
import { tokenValidator } from "../middlewares/validToken.js";

const commentRouter = Router()

commentRouter.post('/comments', tokenValidator, postComment)

export default commentRouter