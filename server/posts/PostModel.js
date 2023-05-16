import mongoose from "mongoose";
import { postSchema } from "./postSchema.js";

export const PostModel = mongoose.model("post", postSchema)