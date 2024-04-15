import { NavLink } from "react-router-dom";

import ThemeSwitcher from "./ThemeSwitcher";

const navLinks = ["Home", "About", "Contact"];
const Navbar = () => {
  return (
    <nav className="px-16 h-[72px] flex justify-between items-center shadow-lg">
      <div className="logo">
        <img src="../assets/logo.png" alt="Site logo" />
      </div>
      <div className="flex items-center gap-10">
        <ul className="nav-links flex gap-4">
          {navLinks.map((link) => (
            <li key={link}>
              {link === "Home" ? (
                <NavLink to="/">{link}</NavLink>
              ) : (
                <NavLink to={link.toLowerCase()}>{link}</NavLink>
              )}
            </li>
          ))}
        </ul>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
export default Navbar;
