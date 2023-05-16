import { getUsersDataAccess } from "./dataAccess.js";

export const getUserService = async () => {
  const data = await getUsersDataAccess();

  return data;
};
