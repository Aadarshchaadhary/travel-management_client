import { Link, useLocation } from "react-router";

const navLinks: { label: string; link: string }[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Travels",
    link: "/packages",
  },
  {
    label: "About Us",
    link: "/about-us",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

const NavLinks = () => {
  const location = useLocation();

  return (
    <div className="flex gap-2 tracking-wider text-lg font-semibold text-grey-900/80">
      {navLinks.map((item) => {
        const isActive = item.link === location.pathname;
        return (
          <Link className={`${isActive ? "text-blue-500" : ""}`} to={item.link}>
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
