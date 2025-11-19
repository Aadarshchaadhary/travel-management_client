import type React from "react";

import { useQuery } from "@tanstack/react-query";
import { getPackageById } from "../../../../api/package.api";
import DetailSection from "./details-section";
import ImageCarousel from "../../details/image-carousel";

type IProps = {
  id: string;
};

const Details: React.FC<IProps> = ({ id }) => {
  // get package by id

  const { isLoading, data } = useQuery({
    queryFn: () => getPackageById(id),
    queryKey: ["get_pkg_by_id"],
  });

  // is loading

  if (isLoading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <p>Loading data....</p>
      </div>
    );
  }

  return (
    <div className="mt-10 flex gap-10">
      {/* image */}
      <div className="">
        <ImageCarousel
          pkgImages={data?.data?.images ?? [data?.data?.cover_image]}
        />
      </div>
      {/* detail */}
      <div className=" flex-1 border border-gray-300 rounded-md p-2">
        <DetailSection show_button pkg={data?.data} />
      </div>
    </div>
  );
};

export default Details;
