import NavBar from "../components/header";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router";

const ClientLayout = () => {
  return (
    <main className="h-full w-full">
      {/* nav */}
      <NavBar />

      {/*page dynamic content */}
      <div className="w-full min-h-[85%]">
        <Outlet />
      </div>

      {/* footer */}
      <Footer />
    </main>
  );
};

export default ClientLayout;
