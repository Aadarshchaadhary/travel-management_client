import React from "react";
import SectionHeading from "../common/section-heading";
import { useQuery } from "@tanstack/react-query";
import { getPopularPackage } from "../../api/package.api";
import type { IPackageResponse } from "../../@types/package.types";
import PackageCard from "./package/card";

const AllPackages = () => {
  const { data, isLoading } = useQuery({
    queryFn: getPopularPackage,
    queryKey: ["get_popular_package"],
  });

  return (
    <div className="px-22 min-h-[85%] mt-10">
      <SectionHeading
        title="Browse Our All Available Packages"
        subTitle="Browse Our All Available Packages"
      />
      <div className="mt-6">
        {isLoading && <p>Loading Packages....</p>}
        {/* show package card */}
        {!isLoading && data?.data?.length > 0 && (
          <div className="grid grid-cols-5 gap-8">
            {data?.data?.map((tourPackage: IPackageResponse) => (
              <PackageCard tourPackage={tourPackage} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPackages;
