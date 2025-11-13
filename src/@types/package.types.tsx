import type { IImage, IResponse, PACKAGE_COST_TYPE } from "./global.types";

type ICategory = {
  name: string;
  description: string;
  logo: IImage;
};

type IDestination = {
  location: string;
  time: string;
};

export type IPackage = {
  name: string;
  description: string;
  category: ICategory;
  cover_image: IImage;
  images?: IImage[];
  start_date: string;
  end_date: string;
  total_seats: number;
  seats_available: number;
  price: number;
  destinations?: IDestination[];
  cost_type: PACKAGE_COST_TYPE;
};

export type IPackageResponse = IPackage & IResponse;
export type ICategoryResponse = ICategory & IResponse;
