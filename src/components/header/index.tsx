import NavLinks from "./nav_links";
import UserProfile from "./user_profile";

const NavBar = () => {
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
      <UserProfile />
    </div>
  );
};

export default NavBar;
