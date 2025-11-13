import { useQuery } from "@tanstack/react-query";
import api from ".";

export const getPopularPackage = async () => {
 

  

  try {
    const response = await api.get("/package");
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export default getPopularPackage;
