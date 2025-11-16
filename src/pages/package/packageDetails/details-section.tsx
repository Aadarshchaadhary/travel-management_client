import React from "react";
import type { IPackageResponse } from "../../../@types/package.types";

type IProps = {
  pkg: IPackageResponse;
};

const DetailSection: React.FC<IProps> = ({ pkg }) => {
  return (
    <div className="w-full h-full">
      {/* name */}
      <h1 className="text-gray-800 font-bold text-2xl">{pkg.name}</h1>
    </div>
  );
};

export default DetailSection;
