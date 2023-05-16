import mongoose from "mongoose";

export const phoneSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: String,
});
