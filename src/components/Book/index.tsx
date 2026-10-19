
import type React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPackageById } from "../../api/package.api";

import BookForm from "./book-form";
import DetailSection from "../packages/packageDetail/packageDetails/details-section";

type IProps = {
  id: string;
};

const BookPkg: React.FC<IProps> = ({ id }) => {
  const { isLoading, data, isError } = useQuery({
    queryFn: () => getPackageById(id),
    queryKey: ["get_pkg_by_id", id],
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <p>Loading data...</p>
      </div>
    );
  }

  if (isError || !data?.data) {
    return <p>Failed to load package details.</p>;
  }

  return (
    <div className="mt-10 flex gap-10 min-h-[500px]">
      <div className="flex-1 border border-gray-300 rounded-md p-2">
        <DetailSection pkg={data.data} />
      </div>

      <div className="flex-1 border border-gray-300 rounded-md p-2">
        <BookForm packageId={data.data._id} />
      </div>
    </div>
  );
};

export default BookPkg;
