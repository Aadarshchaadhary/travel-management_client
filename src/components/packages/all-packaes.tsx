import { useQuery } from "@tanstack/react-query";
import { getPopularPackage } from "../../api/package.api";
import SectionHeading from "../common/section-heading";
import type { IPackageResponse } from "../../@types/package.types";
import DetailSection from "../landing/package/card";

const AllPackages = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: getPopularPackage,
    queryKey: ["get_popular_package"],
  });

  return (
    <div className="px-22 min-h-[85%] mt-10">
      <SectionHeading
        title="Browse Our All Available Packages"
        subTitle="Browse Our All Available Packages"
      />

      {isLoading && (
        <p className="mt-5">Loading Packages....</p>
      )}

      {isError && (
        <p className="mt-5 text-red-500">
          Failed to load packages.
        </p>
      )}

      {!isLoading && !isError && data?.data?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {data.data.map((tourPackage: IPackageResponse) => (
            <div
              key={tourPackage._id}
              className="border rounded-lg p-5 shadow-sm bg-white"
            >
              <DetailSection
                pkg={tourPackage}
                show_button={true}
              />
            </div>
          ))}
        </div>
      )}

      {!isLoading && !isError && data?.data?.length === 0 && (
        <p className="mt-5 text-gray-500">
          No packages available.
        </p>
      )}
    </div>
  );
};

export default AllPackages;