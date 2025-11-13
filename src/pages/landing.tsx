import CategoryList from "../components/landing/categories/category-list";
import { HeroSection } from "../components/landing/hero";
import PopularPackages from "../components/landing/popular-packages";

const LandingPage = () => {
  return (
    <main className="h-full w-full">
      {/* page content */}
      <HeroSection />
      <CategoryList />
      <PopularPackages />
    </main>
  );
};

export default LandingPage;
