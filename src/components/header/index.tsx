import { Link } from "react-router";
import { useAuth } from "../../context/auth.context";
import NavLinks from "./nav_links";
import UserProfile from "./user_profile";

const NavBar = () => {
  const { isLoading, user } = useAuth();
  return (
    <div className="h-16 border border-gray-200 flex itmes-center justify-between px-2">
      {/* icon */}
      <div>
        <p className="text-2xl font-bold italic text-blue-600">
          Travel Management
        </p>
      </div>

      {/* nav links */}
      <NavLinks />

      {/* auth section */}
      <div className="'w-fit min-w-[150px]">
        {isLoading && <p>loading...</p>}
        {!isLoading && !user && (
          <Link
            to={"/sign-in"}
            className="bg-blue-900 px-9 py-3 rounded-md text-lg font-bold text-white"
          >
            Login
          </Link>
        )}
        {!isLoading && user && <UserProfile />}
      </div>
    </div>
  );
};

export default NavBar;
