import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  role: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  phone: Number,
  address: String,
});
