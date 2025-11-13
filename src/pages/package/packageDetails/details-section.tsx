import React from "react";
import type { IPackageResponse } from "../../../@types/package.types";

type IIprops = {
  pkg: IPackageResponse;
};
const DetailsSection: React.FC<IIprops> = ({ pkg }) => {
  return (
    <div>
      D<h1>{pkg.name}</h1>
    </div>
  );
};

export default DetailsSection;
