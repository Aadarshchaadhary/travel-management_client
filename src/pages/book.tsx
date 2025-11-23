import BookPkg from "../components/Book";
import SectionHeading from "../components/common/section-heading";
import { useParams, useSearchParams } from "react-router";

const BookPackage = () => {
  const { id } = useParams();
  const [search] = useSearchParams();

  const packageName = search.get("name") || "Travel Package";
  const packageDesc = search.get("d") || "Book your perfect adventure";

  return (
    <main className="min-h-screen w-full px-6 md:px-20 py-10 bg-gray-50">
      {/* Heading Section */}
      <section className="max-w-5xl mx-auto mb-10">
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 text-center">
          <SectionHeading title={packageName} subTitle={packageDesc} />
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Plan your journey with ease and book all your travel needs in one place.
          </p>
        </div>
      </section>

      {/* Booking Component */}
      <section className="max-w-5xl mx-auto">
        <BookPkg id={id || ""} />
      </section>
    </main>
  );
};

export default BookPackage;
