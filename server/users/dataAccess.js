import { UserModel } from "./UserModel.js";

export const getUsersDataAccess = async () => {
  const data = await UserModel.find();

  return data;
};
