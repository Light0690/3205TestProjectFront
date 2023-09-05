import instance from "./axiosConfig";

import { User } from "../interfaces/User";

export const getUser = async ({ email, number }: User) => {
  const response = await instance.post("login", {
    email,
    number,
  });
  return response.data.data;
};
