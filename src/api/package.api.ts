/* eslint-disable @typescript-eslint/no-explicit-any */

import api from ".";

export const getPopularPackage = async () => {
  try {
    const response = await api.get("/package");
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const getPackageById = async (id: string) => {
  try {
    const response = await api.get(`/package/${id}`);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};
