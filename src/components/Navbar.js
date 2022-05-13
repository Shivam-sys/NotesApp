import React from "react";
import "../App.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log("Nav to login");
    navigate("/login");
  };
  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font shadow-md rounded-lg md:mx-2 bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <div className="container  mx-auto flex flex-wrap p-5 flex-col sm:flex-row justify-around items-center w-full">
          <Link to="/" className="flex font-medium mb-4 sm:mb-0">
            <span className="ml-3 text-xl text-slate-400 hover:text-gray-300">
              NotesApp
            </span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-lg justify-center">
            <Link
              to="/"
              className={
                "mr-5 mycolor-1 hover:text-red-300 myfont-1 " +
                `${
                  location.pathname === "/"
                    ? "underline decoration-red-300 decoration-dotted decoration-4 !text-red-300"
                    : " "
                }`
              }
            >
              Notes
            </Link>
            <Link
              to="/user"
              className={
                "mr-5 mycolor-1 hover:text-red-300 myfont-1 " +
                `${
                  location.pathname === "/user"
                    ? "underline decoration-red-300 decoration-dotted decoration-4 !text-red-300"
                    : " "
                }`
              }
            >
              Profile
            </Link>
            <Link
              to="/about"
              className={
                "mr-5 mycolor-1 hover:text-red-300 myfont-1 " +
                `${
                  location.pathname === "/about"
                    ? "underline decoration-red-300 decoration-dotted decoration-4 !text-red-300"
                    : " "
                }`
              }
            >
              About
            </Link>
          </nav>
          <div>
            {!localStorage.getItem("token") ? (
              <>
                <Link
                  to="/signup"
                  className="inline-flex items-center myfont-1 border-0 py-1 px-3 focus:outline-none hover:text-gray-300 text-lg mt-4 sm:mt-0"
                >
                  Signup
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center bg-teal-600 hover:bg-teal-500 text-gray-100 myfont-1 border-0 py-1 px-3 focus:outline-none rounded text-lg  mt-4 sm:mt-0"
                >
                  Login
                </Link>
              </>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center bg-teal-600 hover:bg-teal-500 text-gray-100 myfont-1 border-0 py-1 px-3 focus:outline-none rounded text-lg  mt-4 sm:mt-0"
                onClick={handleLogout}
              >
                Logout
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
