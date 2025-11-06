export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHERS = "OTHERS",
}

export type IResponse = {
  id: string;
  createAt: string;
  upadateAt: string;
};

export type IImage = {
  public_id: string;
  path: string;
};
