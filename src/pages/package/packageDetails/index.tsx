import React from "react";
import ImageCarousel from "../../../components/package/details/image-carousel";
import { useQuery } from "@tanstack/react-query";
import { getPackageById } from "../../../api/package.api";
type IProps = {
  id: string;
};

const Details: React.FC<IProps> = ({ id }) => {
  // get package by id
  const { isLoading, data } = useQuery({
    queryFn: () => getPackageById(id),
    queryKey: ["GET_PKG_BY_id"],
  });

  if (isLoading) {
    return (
      <div>
        <p>Loading Data.....</p>
      </div>
    );
  }
  return (
    <div>
      <div>
        <ImageCarousel
          pkgImages={data?.data?.images ?? [data?.data?.cover_image]}
        />
      </div>
      <div></div>
    </div>
  );
};

export default Details;
