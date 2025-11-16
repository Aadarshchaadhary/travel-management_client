/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import SectionHeading from "../../common/section-heading";
import type { ICategoryResponse } from "../../../@types/package.types";
import CategoryCard from "./card";
import { getCategories } from "../../../api/category.api";

const CategoryList = () => {
  // get popular packages
  const { data, isLoading } = useQuery({
    queryFn: getCategories,
    queryKey: ["get_package_category"],
  });

  console.log(data, isLoading);

  return (
    <div className="my-10 w-full px-24">
      <SectionHeading
        title="All Featured Category"
        subTitle="Discover tours by category"
        link="/packages"
      />
      <div className="mt-6">
        {isLoading && <p>Loading Categories....</p>}
        {/* show package card */}
        {!isLoading && data?.data?.length > 0 && (
          <div className="grid grid-cols-5 gap-8">
            {data?.data?.map((category: ICategoryResponse) => (
              <CategoryCard category={category} />
            ))}
          </div>
        )}
        {!isLoading && data?.data?.length === 0 && (
          <div>
            <p>No Data Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
