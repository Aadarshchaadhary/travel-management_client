/* eslint-disable @typescript-eslint/no-explicit-any */
import api from ".";
import type { ILogin, IRegister } from "../@types/auth.types";

//* register user
export const registerUser = async (data: IRegister) => {
  try {
    const response = await api.post("/auth/register", data);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

//*  login user
export const loginUser = async (data: ILogin) => {
  try {
    const response = await api.post("/auth/login", data);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const logout = async () => {
  try {
    const response = await api.post("/auth/logout");
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};


//* check auth
export const me = async () => {
  try {
    const response = await api.get("/auth/me");
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};