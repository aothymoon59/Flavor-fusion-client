import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="border-b-2 bg-base-100">
      <div className="navbar container mx-auto p-5">
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
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl sm:text-2xl p-0">
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
          </ul>
        </div>
        <div className="navbar-end flex gap-2">
          {user && (
            <div>
              {user.photoURL ? (
                <img
                  src={user?.photoURL}
                  className="w-10 h-10 sm:w-14 sm:h-14 rounded-[50%] border-2 border-yellow-400 object-cover object-center"
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
        </div>
      </div>
    </div>
  );
};

export default Header;
