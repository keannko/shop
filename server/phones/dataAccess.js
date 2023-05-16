import { PhoneModel } from "./PhoneModel.js";

export const getPhonesDataAccess = async () => {
  const data = await PhoneModel.find();

  return data;
};

export const addPhoneDataAccess = async ({ brand, model }) => {
  if(!PhoneModel.find(brand)){
    console.log('est takoe')
  }
  const newPhone = new PhoneModel({ brand, model }).save();
  return newPhone;
};
