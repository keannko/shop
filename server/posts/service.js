import { getPostsDataAccess } from "./dataAccess.js";

export const getProductService = async () => {
    const data = await getPostsDataAccess();
  
    return data?.reverse();
  };