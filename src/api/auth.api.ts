import axios from "axios";

export const registerUser = async (data: any) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/auth/register",
      data
    );
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const LoginUser = async (data: any) => {
  try {
    const response = await axios.post("http://localhost:8000/auth/login", data);
    return response.data;
  } catch (error: any) {
    console.log(error);

    throw error?.response?.data || error;
  }
};
