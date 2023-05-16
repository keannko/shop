import { PostModel } from "./PostModel.js";

export const getPostsDataAccess = async () => {
  const data = await PostModel.find();

  return data;
};