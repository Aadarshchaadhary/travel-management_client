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
  _id: string;

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

  destination?: IDestination[];

  cost_type: PACKAGE_COST_TYPE;
};

export type IPackageResponse = IPackage & IResponse;
export type ICategoryResponse = ICategory & IResponse;

export type IBookPackage = {
  full_name: string;
  phone: string;
  total_person: number;
  tour_package: string;
};
