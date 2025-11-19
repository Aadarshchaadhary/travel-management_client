import BookPkg from "../components/Book";
import SectionHeading from "../components/common/section-heading";
import { useParams, useSearchParams } from "react-router";

const BookPackage = () => {
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
        <BookPkg id={id || ""} />
      </div>
    </main>
  );
};

export default BookPackage;
