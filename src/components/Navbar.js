import React from "react";
import "../App.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font shadow-md rounded-lg mx-2 bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col sm:flex-row items-center w-full"> 
          <Link
            to="/"
            className="flex font-medium items-center text-white mb-4 sm:mb-0"
          >
            <span className="ml-3 text-xl text-slate-300">NotesApp</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              to="/"
              className={
                "mr-5 mycolor-1 hover:text-red-300 text-lg myfont-1 " +
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
                "mr-5 mycolor-1 hover:text-red-300 text-lg myfont-1 " +
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
                "mr-5 mycolor-1 hover:text-red-300 text-lg myfont-1 " +
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
            <button className="inline-flex items-center myfont-1 border-0 py-1 px-3 focus:outline-none text-lg mt-4 sm:mt-0">
              Signup
            </button>
            <button className="inline-flex items-center mybgc-1 mycolor-3 myfont-1 border-0 py-1 px-3 focus:outline-none rounded text-lg mt-4 sm:mt-0">
              Login
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
