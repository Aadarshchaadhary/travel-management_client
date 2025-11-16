import React from "react";
import type { IPackageResponse } from "../../../@types/package.types";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiStopwatch } from "react-icons/ci";
import { IoBed } from "react-icons/io5";
import { Link } from "react-router";
import moment from "moment";
type IProps = {
  tourPackage: IPackageResponse;
};

const PackageCard: React.FC<IProps> = ({ tourPackage }) => {
  const daysAgo = moment(tourPackage.createdAt).fromNow();
  const currentDate = moment(new Date(Date.now()));
  const startDate = moment(tourPackage.start_date);
  const endDate = moment(tourPackage.end_date);
  const daystoGo = startDate.diff(currentDate, "days");
  const totalDays = endDate.diff(startDate, "days");

  return (
    <div className="min-h-[200px]  border border-gray-300 rounded-lg shadow-sm">
      {/* image */}
      <div className="w-full h-[250px] p-2 rounded-md overflow-clip">
        <img
          src={tourPackage?.cover_image.path}
          className="h-full w-full object-fill rounded-md"
        />
      </div>
      {/* detail */}
      <div className="px-1 mt-2 flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold text-blue-700">
            {tourPackage.name}
          </p>
          <div className="flex items-center gap-1">
            <CiStopwatch size={19} className="text-blue-700" />
            <p className="text-[14px] font-semibold text-gray-700">{daysAgo}</p>
          </div>
        </div>

        {/* price */}
        <div className="flex items-center gap-1">
          <TbCurrencyRupeeNepalese size={20} className="text-blue-700" />
          <span className="text-[12px] font-semibold text-gray-700">
            {tourPackage.price}{" "}
            {tourPackage.cost_type.replace("_", " ").toLocaleLowerCase()}
          </span>
        </div>
        {/* price */}
        <div className="flex items-center gap-1">
          <MdOutlineAirlineSeatReclineNormal
            size={20}
            className="text-blue-700"
          />
          <span className="text-[12px] font-semibold text-gray-700">
            {tourPackage.seats_available} / {tourPackage.total_seats}
          </span>{" "}
          seats available
        </div>
        <div className="flex items-center gap-1">
          <FaRegCalendarAlt size={18} className="text-blue-700" />
          <span className="text-[12px] font-semibold text-gray-700">
            {Math.abs(daystoGo)} {daystoGo > 0 ? "days to go" : "days ago"} (
            {startDate.format("D MMM YYYY")})
          </span>
        </div>

        <div className="flex items-center gap-1">
          <IoBed size={20} className="text-blue-700" />
          <span className="text-[12px] font-semibold text-gray-700">
            {totalDays} Days stay
          </span>
        </div>

        {/* desc */}
        <p className="line-clamp-2 text-[12px] text-gray-700 mt-2">
          {tourPackage?.description ||
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
        </p>
      </div>

      {/* button */}
      <div className="my-2 px-1 w-full">
        <Link
          to={`/packages/${tourPackage?._id}?name=${tourPackage.name}&d=${tourPackage?.description}`}
        >
          <p className="h-full w-full  bg-blue-600 py-3 text-center tex-lg font-bold text-white rounded-md">
            View Detail
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
