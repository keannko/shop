import { Router } from "express";
import { addPhoneController, getPhonesController, getUsersController } from "./controller.js";


export const usersRouter = Router()


usersRouter.get('/', getUsersController)

