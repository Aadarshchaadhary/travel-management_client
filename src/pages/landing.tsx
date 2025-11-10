import NavBar from "../components/header";
import { HeroSection } from "../components/landing/hero";
import PopularPackages from "../components/landing/popular-packages";

const LandingPage = () => {
  return (
    <main className="h-full">
      {/* {nav bar} */}
      <NavBar />

      {/* { page content} */}
      <HeroSection />
      <PopularPackages />

      {/* {footer} */}
    </main>
  );
};
export default LandingPage;
