import api from ".";
import type { ILogin, IRegister } from "../@types/auth.types";

export const registerUser = async (data: IRegister) => {
  try {
    const response = await api.post("/auth/register", data);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const LoginUser = async (data: ILogin) => {
  try {
    const response = await api.post("/auth/login", data);
    return response.data;
  } catch (error: any) {
    console.log(error);

    throw error?.response?.data || error;
  }
};

// * check auth
export const me = async () => {
  try {
    const response = await api.get("/auth/me");
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};
