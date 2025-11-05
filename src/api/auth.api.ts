import api from ".";

export const registerUser = async (data: any) => {
  try {
    const response = await api.post("/auth/register", data);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const LoginUser = async (data: any) => {
  try {
    const response = await api.post("/auth/login", data);
    return response.data;
  } catch (error: any) {
    console.log(error);

    throw error?.response?.data || error;
  }
};
