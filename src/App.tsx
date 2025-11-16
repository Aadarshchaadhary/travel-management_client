import "./App.css";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import { BrowserRouter, Routes, Route } from "react-router";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/landing";
import Packages from "./pages/package/package";
import ClientLayout from "./layouts/layouts";
import AboutUs from "./pages/about_us";
import ContactUs from "./pages/contact_us";
import PackageDetailpage from "./pages/package/detail-page";
import BookPackage from "./pages/book";

function App() {
  return (
    <div className=" tracking-wider h-full w-full">
      <BrowserRouter>
        <Routes>
          {/* defining routes */}

          <Route path="/sign-in" element={<LoginPage />} />
          <Route path="/sign-up" element={<RegisterPage />} />

          <Route path="/" element={<ClientLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/packages/:id" element={<PackageDetailpage />} />
            <Route path="/Book/:id" element={<BookPackage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
        </Routes>
        {/* using react hot toaster */}
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
