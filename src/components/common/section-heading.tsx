import React from "react";
import { Link } from "react-router";
import { IoChevronDownOutline } from "react-icons/io5";

type IProps = {
  title: string;
  subTitle: string;
  link?: string;
};

const SectionHeading: React.FC<IProps> = ({ subTitle, title, link }) => {
  return (
    <div className="w-full flex justify-between items-center">
      <div>
        {/* title */}
        <h1 className="text-2xl font-bold text-blue-600">{title}</h1>
        <p className="text-gray-700 text-[15px] ">{subTitle}</p>
      </div>
      {link && (
        <Link to={link} className="flex items-center gap-1">
          <span className="text-[15px] ">Explore All</span>
          <IoChevronDownOutline className="text-gray-600 " size={20} />
        </Link>
      )}
    </div>
  );
};

export default SectionHeading;
