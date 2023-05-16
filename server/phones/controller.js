import { addPhoneService, getPhoneService } from "./service.js";

export const getPhonesController = async (req, res) => {
  try {
    const data = await getPhoneService();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addPhoneController = async (req, res) => {
  try {
    const data = await addPhoneService(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
