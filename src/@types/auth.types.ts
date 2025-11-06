import type { Gender, IImage, IResponse } from "./global.types";

export type ILogin = {
  email: string;
  password: string;
};

export type IRegister = {
  first_name: string;
  last_name: string;
  confirm_password: string;
  gender?: Gender;
  phone?: string;
} & ILogin;

export type IUser = Omit<IRegister, "confirm_password"> &
  IResponse & {
    profile_image: IImage;
  };
