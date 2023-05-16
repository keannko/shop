import { Router } from "express";
import { getPostsController } from "./controller.js";

export const postsRouter = Router()


postsRouter.get('/', getPostsController)