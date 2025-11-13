import "./App.css";

import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import { BrowserRouter, Routes, Route } from "react-router";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/landing";
import PackageDetailPage from "./pages/package/detail-page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* {defining routes} */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-in" element={<LoginPage />} />
          <Route path="/sign-up" element={<RegisterPage />} />
          <Route path="/package/:id" element={<PackageDetailPage />} />
        </Routes>

        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
