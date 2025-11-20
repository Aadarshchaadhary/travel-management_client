/* eslint-disable @typescript-eslint/no-explicit-any */
import api from ".";
import type { IBookPackage } from "../@types/package.types";

export const bookPackage = async (data: IBookPackage) => {
  try {
    const response = await api.post("/booking", data);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};
export const getCategories = async () => {
  try {
    const response = await api.get("/category");
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};
