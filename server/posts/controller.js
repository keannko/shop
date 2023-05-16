import { getProductService } from "./service.js";

export const getPostsController = async (req, res) => {
    try {
      const data = await getProductService();
  
      res.json(data);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };