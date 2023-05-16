import { addPhoneDataAccess, getPhonesDataAccess } from "./dataAccess.js";

export const getPhoneService = async () => {
  const data = await getPhonesDataAccess();

  return data?.reverse();
};

export const addPhoneService = async ({ brand, model }) => {
  const newPhone = await addPhoneDataAccess({ brand, model });
  return newPhone;
};
