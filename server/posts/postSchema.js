import mongoose from "mongoose";

export const postSchema = new mongoose.Schema({
  title: String,
  text: String
});
