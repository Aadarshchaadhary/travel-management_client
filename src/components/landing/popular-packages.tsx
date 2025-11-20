import SectionHeading from "../common/section-heading";

import { useQuery } from "@tanstack/react-query";
import { getPopularPackage } from "../../api/package.api";
import type { IPackageResponse } from "../../@types/package.types";

const PopularPackages = () => {
  // get popular packages
  const { data, isLoading } = useQuery({
    queryFn: getPopularPackage,
    queryKey: ["get_popular_package"],
  });

  console.log(data, isLoading);

  return (
    <div className="my-10 w-full px-24">
      <SectionHeading
        title="Popular Packages"
        subTitle="Discover our most popular tour packages"
        link={"/packages"}
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

export default PopularPackages;
