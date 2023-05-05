import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { FaUserCircle, FaSun, FaHeart } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };

  // theme toggle
  const [theme, setTheme] = useState("light");
  const [themeIcon, setThemeIcon] = useState(true);

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "valentine" : "light");
    setThemeIcon(!themeIcon);
  };

  console.log(themeIcon);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="border-b-2 bg-base-100">
      <div className="navbar container mx-auto p-3 sm:p-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  aria-label="Home"
                  title="Home"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  aria-label="Blog"
                  title="Blog"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  aria-label="About"
                  title="About"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  aria-label="Contact"
                  title="Contact"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <Link className="normal-case font-semibold text-xl sm:text-2xl p-0">
            Flavor Fusion
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                aria-label="Blog"
                title="Blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                aria-label="About"
                title="About"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                aria-label="Contact"
                title="Contact"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-2">
          {user && (
            <div>
              {user?.photoURL ? (
                <img
                  src={user?.photoURL}
                  className="w-10 h-10 sm:w-14 sm:h-14 rounded-[50%] border-2 border-[#FACC15] object-cover object-center"
                  alt={user?.displayName}
                  title={user?.displayName || "Anonymous User"}
                />
              ) : (
                <FaUserCircle
                  className="w-10 h-10 sm:w-14 sm:h-14"
                  title={user?.displayName || "Anonymous User"}
                />
              )}
            </div>
          )}

          <div>
            {user ? (
              <Link
                onClick={handleLogOut}
                className="my-btn hover:bg-transparent transition-colors duration-200 ease-in-out"
              >
                LogOut
              </Link>
            ) : (
              <Link
                to="/login"
                className="my-btn hover:bg-transparent transition-colors duration-200 ease-in-out"
              >
                Login
              </Link>
            )}
          </div>
          <div>
            <button
              className="w-[40px] h-[40px] text-lg flex justify-center items-center rounded-[50%] bg-[#a4b9f2]"
              onClick={handleToggleTheme}
              title={themeIcon ? "Light" : "Valentine"}
            >
              {themeIcon ? <FaSun /> : <FaHeart />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
