import { Router } from "express";
import { addPhoneController, getPhonesController } from "./controller.js";

export const phonesRouter = Router()


phonesRouter.get('/', getPhonesController)
phonesRouter.post('/', addPhoneController)
