import React from "react";
import SectionHeading from "../../components/common/section-heading";
import { useParams, useSearchParams } from "react-router";
import ImageCarousel from "../../components/package/details/image-carousel";
import Details from "./packageDetails";

const PackageDetailPage = () => {
  const [search] = useSearchParams();
  const { id } = useParams();

  console.log("Package ID:", id);
  console.log("Package Name:", search.get("name"));

  return (
    <main className="h-full w-full px-8">
      {" "}
      <div className="h-fit w-full shadow p-4 rounded-lg bg-white">
        <SectionHeading
          title={search.get("name") || ""}
          subTitle={search.get("d") || "No description available"}
        />
      </div>
      {/* ✅ Placeholder for details component */}
      <div className="mt-6">
        <Details id={id || ""} />
      </div>
    </main>
  );
};

export default PackageDetailPage;
