import instance from "./axiosConfig";

interface Params {
  email: string;
  number: string;
}

export const getUser = async ({ email, number }: Params) => {
  const response = await instance.post("login", {
    email,
    number,
  });
  return response.data.data;
};
