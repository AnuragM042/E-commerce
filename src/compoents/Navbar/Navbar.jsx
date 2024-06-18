import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaCartArrowDown } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { MdNightlight } from "react-icons/md";
import MyContext from "../../context/data/MyContext";
import { RxAvatar } from "react-icons/rx";
import { useSelector } from "react-redux";

const Navbar = () => {
  const context = useContext(MyContext);
  const { mode, toggleMode } = context;

  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user.user.email);

  const logout = () => {
    localStorage.clear("user");
    window.location.href = "/login";
  };

  const cartItems = useSelector((state) => state.cart);

  return (
    <nav
      className={`border-b-2 border-black fixed h-[80px]  top-0 w-full z-50 ${
        mode === "dark" ? "bg-gray-900" : "bg-white"
      } text-${mode === "dark" ? "white" : "black"}`}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={nav ? "true" : "false"}
              onClick={handleClick}
            >
              <span className="sr-only">Open main menu</span>
              {nav ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" alt="Logo" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavLink
                  exact="true"
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-700 text-white rounded-md px-2 py-2 text-sm font-medium"
                      : " hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 text-sm font-medium"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/allproducts"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-700 text-white rounded-md px-2 py-2 text-sm font-medium"
                      : " hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 text-sm font-medium"
                  }
                >
                  All Products
                </NavLink>
                {user && user.user.email !== "anurazzz.mishra098@gmail.com" && (
                  <NavLink
                    to="/order"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-700 text-white rounded-md px-2 py-2 text-sm font-medium"
                        : " hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 text-sm font-medium"
                    }
                  >
                    Order
                  </NavLink>
                )}
                {user && user.user.email === "anurazzz.mishra098@gmail.com" && (
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-700 text-white rounded-md px-2 py-2 text-sm font-medium"
                        : " hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 text-sm font-medium"
                    }
                  >
                    Admin
                  </NavLink>
                )}
                <NavLink
                  onClick=""
                  to="/Extra1"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-700 text-white rounded-md px-2 py-2 text-sm font-medium"
                      : " hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 text-sm font-medium"
                  }
                >
                  Extra1
                </NavLink>
                <NavLink
                  to="/Extra2"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-700 text-white rounded-md px-2 py-2 text-sm font-medium"
                      : " hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 text-sm font-medium"
                  }
                >
                  Extra2
                </NavLink>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-700 text-white rounded-md px-2 py-2 text-sm font-medium"
                      : " hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 text-sm font-medium"
                  }
                  onClick={logout}
                >
                  Logout
                </NavLink>
              </div>
            </div>
          </div>
          {/* Theme Changer and Other Icons */}
          <div className="flex items-center space-x-4 ml-2">
            <button onClick={toggleMode} className="focus:outline-none">
              {mode === "light" ? (
                <IoMdSunny size={30} />
              ) : (
                <MdNightlight size={30} />
              )}
            </button>
            <button className="focus:outline-none flex">
              <FaCartArrowDown size={30} />
              {cartItems.length}
            </button>
            <NavLink to={""}>
              <button className="focus:outline-none">
                <RxAvatar size={30} />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      {/* Mobile Section */}
      <div className={`sm:hidden ${nav ? "block" : "hidden"}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <NavLink
            exact="true"
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-700 text-white block rounded-md px-2 py-2 text-base font-medium"
                : "hover:bg-gray-700 hover:text-white block rounded-md px-2 py-2 text-base font-medium"
            }
            onClick={() => setNav(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/allproducts"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-700 text-white block rounded-md px-2 py-2 text-base font-medium"
                : "hover:bg-gray-700 hover:text-white block rounded-md px-2 py-2 text-base font-medium"
            }
            onClick={() => setNav(false)}
          >
            All Products
          </NavLink>
          {user && user.user.email !== "anurazzz.mishra098@gmail.com" && (
            <NavLink
              to="/order"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-700 text-white block rounded-md px-2 py-2 text-base font-medium"
                  : "hover:bg-gray-700 hover:text-white block rounded-md px-2 py-2 text-base font-medium"
              }
              onClick={() => setNav(false)}
            >
              Order
            </NavLink>
          )}
          {user && user.user.email === "anurazzz.mishra098@gmail.com" && (
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-700 text-white block rounded-md px-2 py-2 text-base font-medium"
                  : "hover:bg-gray-700 hover:text-white block rounded-md px-2 py-2 text-base font-medium"
              }
              onClick={() => setNav(false)}
            >
              Admin
            </NavLink>
          )}
          <NavLink
            to="/Extra1"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-700 text-white block rounded-md px-2 py-2 text-base font-medium"
                : "hover:bg-gray-700 hover:text-white block rounded-md px-2 py-2 text-base font-medium"
            }
            onClick={() => setNav(false)}
          >
            Extra1
          </NavLink>
          <NavLink
            to="/Extra2"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-700 text-white block rounded-md px-2 py-2 text-base font-medium"
                : "hover:bg-gray-700 hover:text-white block rounded-md px-2 py-2 text-base font-medium"
            }
            onClick={() => setNav(false)}
          >
            Extra2
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-700 text-white block rounded-md px-2 py-2 text-base font-medium"
                : "hover:bg-gray-700 hover:text-white block rounded-md px-2 py-2 text-base font-medium"
            }
            onClick={() => {
              logout();
              setNav(false);
            }}
          >
            Logout
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
