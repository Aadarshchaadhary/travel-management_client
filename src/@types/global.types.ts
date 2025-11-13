export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHERS = "OTHERS",
}

export type IResponse = {
  _id: string;
  createAt: string;
  upadateAt: string;
};

export type IImage = {
  public_id: string;
  path: string;
};

export enum PACKAGE_COST_TYPE {
  PER_PERSON = "PER_PERSON",
  PER_DAY = "PER_DAY",
}
