import type React from "react";
import ImageCarousel from "../package/details/image-carousel";
import { useQuery } from "@tanstack/react-query";
import { getPackageById } from "../../api/package.api";
import DetailSection from "../package/package/packageDetails/details-section";
import BookForm from "./book-form";

type IProps = {
  id: string;
};

const BookPkg: React.FC<IProps> = ({ id }) => {
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
    <div className="mt-10 flex gap-10 min-h-[400px]">
      {/* image */}
      <div className="h-full flex-1 border border-gray-300 rounded-md p-2 ">
        {/* <ImageCarousel
          pkgImages={data?.data?.images ?? [data?.data?.cover_image]}
        /> */}
        <DetailSection pkg={data?.data} />
      </div>
      {/* detail */}
      <div className=" flex-1 border border-gray-300 rounded-md p-2">
        <BookForm />
      </div>
    </div>
  );
};

export default BookPkg;
