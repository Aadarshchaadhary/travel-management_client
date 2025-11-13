/* eslint-disable @typescript-eslint/no-explicit-any */

import api from ".";

export const getCategories = async () => {
  try {
    const response = await api.get("/category");
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};
