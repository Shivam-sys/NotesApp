import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font shadow-md rounded-lg md:mx-2 my-2">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex font-medium items-center text-white mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl">NotesApp</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              to="/home"
              className="mr-5 mycolor-1 hover:text-red-300 myfont-1"
            >
              Notes
            </Link>
            <Link
              to="/user"
              className="mr-5 mycolor-1 hover:text-red-300 myfont-1"
            >
              Profile
            </Link>
            <Link
              to="/about"
              className="mr-5 mycolor-1 hover:text-red-300 myfont-1"
            >
              About
            </Link>
          </nav>
          <button className="inline-flex items-center myfont-1 border-0 py-1 px-3 focus:outline-none text-base mt-4 md:mt-0">
            Signup
          </button>
          <button className="inline-flex items-center mybgc-1 mycolor-3 myfont-1 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
            Login
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
