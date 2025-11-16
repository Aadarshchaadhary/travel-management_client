import SectionHeading from "../../components/common/section-heading";
import { useParams, useSearchParams } from "react-router";
import Details from "./packageDetails";

const PackageDetailpage = () => {
  const { id } = useParams();
  const [search] = useSearchParams();

  return (
    <main className="h-full w-full px-22 mt-6">
      {/* heading */}
      <div className="h-fit w-full shadow p-2 rounded-md">
        <SectionHeading
          title={search.get("name") || ""}
          subTitle={search.get("d") || ""}
        />
      </div>

      {/* detail component */}
      <div className="h-full w-full">
        <Details id={id || ""} />
      </div>
    </main>
  );
};

export default PackageDetailpage;
