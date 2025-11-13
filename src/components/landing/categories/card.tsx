import React from "react";
import type { ICategoryResponse } from "../../../@types/package.types";

type IProps = {
  category: ICategoryResponse;
};

const CategoryCard: React.FC<IProps> = ({ category }) => {
  return (
    <div className="flex gap-2 items-center border border-gray-300 py-2  px-1 rounded-lg shadow">
      {/* img */}
      <div className="h-12 aspect-square rounded-md">
        <img
          src={category?.logo?.path}
          className="h-full w-full rounded-md object-fill"
        />
      </div>

      {/* detail */}
      <div>
        <p className="text-[16px] font-bold text-gray-700">{category.name}</p>
        <p className="line-clamp-1 text-[13px] text-gray-500">
          {category.description}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
