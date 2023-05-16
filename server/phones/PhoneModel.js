import mongoose from "mongoose";
import { phoneSchema } from "./phoneSchema.js";

export const PhoneModel = mongoose.model("phone", phoneSchema)