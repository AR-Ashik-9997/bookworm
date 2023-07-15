import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/bookWorm.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#eff0ed]">
      <div className="container mx-auto px-4 max-w-[90%]">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center border">
            <Link to="/" className="text-white font-bold text-xl">
              <img className="h-10 md:h-16" src={logo} alt="logo" />
            </Link>
          </div>

          <div className="hidden md:flex md:items-center">
            <Link
              to="/"
              className="text-black mx-4 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300 text-xl md:text-base lg:text-xl"
            >
              Home
            </Link>
            <Link
              to="/all-books"
              className="text-black mx-4 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300 text-xl md:text-base lg:text-xl"
            >
              All Books
            </Link>
            <Link
              to="/login"
              className="text-black mx-4 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300 text-xl md:text-base lg:text-xl"
            >
              Sign-in
            </Link>
            <Link
              to="/login"
              className="text-black mx-4 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300 text-xl md:text-base lg:text-xl"
            >
              Sign-up
            </Link>
          </div>

          <div className="md:hidden">
            <button
              className="text-black focus:outline-none"
              onClick={toggleMenu}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    className="hidden"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                ) : (
                  <path
                    className="hamburger"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1 6h22v2H1V6zm0 5h22v2H1v-2zm0 5h22v2H1v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="mt-2 py-2 px-4">
              <Link
                to="/"
                className="block text-black mt-2 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-black mt-2 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300"
              >
                All Books
              </Link>
              <Link
                to="/login"
                className="block text-black mt-2 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300"
              >
                Sign-in
              </Link>
              <Link
                to="/login"
                className="block text-black mt-2 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300"
              >
                Sign-up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
