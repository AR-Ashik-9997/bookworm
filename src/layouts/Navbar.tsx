/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/bookWorm.png";
import { useCheckAuth } from "@/redux/feature/users/userSlice";
const Navbar: React.FC = () => {
  const [ixsenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!ixsenuOpen);
  };
  const auth: object | null = JSON.parse(
    localStorage.getItem("auth") || "null"
  );
  const isAuthenticated = useCheckAuth(auth);
  const handleLogOut = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };
  return (
    <nav className="bg-[#eff0ed]">
      <div className="container mx-auto px-4 max-w-[90%]">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              <img className="h-10 md:h-16" src={logo} alt="logo" />
            </Link>
          </div>

          <div className="hidden lg:flex md:items-center">
            <Link
              to="/"
              className="text-black mx-4 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300 text-xl  "
            >
              Home
            </Link>
            <Link
              to="/all-books"
              className="text-black mx-4 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300 text-xl  "
            >
              All Books
            </Link>
            {isAuthenticated && (
              <>
                <Link
                  to="/addbook"
                  className="text-black mx-4 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300 text-xl  "
                >
                  Add New Book
                </Link>
                <button
                  onClick={handleLogOut}
                  className="text-black mx-4 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300 text-xl "
                >
                  Logout
                </button>
              </>
            )}
            {!isAuthenticated && (
              <React.Fragment>
                <Link
                  to="/login"
                  className="text-black mx-4 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300 text-xl  "
                >
                  Sign-in
                </Link>
                <Link
                  to="/signup"
                  className="text-black mx-4 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300 text-xl  "
                >
                  Sign-up
                </Link>
              </React.Fragment>
            )}
          </div>

          <div className="lg:hidden">
            <button
              className="text-black focus:outline-none"
              onClick={toggleMenu}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {ixsenuOpen ? (
                  <path
                    className="block"
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

        {ixsenuOpen && (
          <div className="lg:hidden">
            <div className="mt-2 py-2 px-4">
              <Link
                to="/"
                className="block text-black mt-2 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/all-books"
                className="block text-black mt-2 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300"
              >
                All Books
              </Link>
              {isAuthenticated && (
                <React.Fragment>
                  <Link
                    to="/addbook"
                    className="block text-black mt-2 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300"
                  >
                    Add New Book
                  </Link>
                  <button
                    onClick={handleLogOut}
                    className="block text-black mt-2 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300"
                  >
                    Logout
                  </button>
                </React.Fragment>
              )}
              {!isAuthenticated && (
                <React.Fragment>
                  <Link
                    to="/login"
                    className="block text-black mt-2 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300"
                  >
                    Sign-in
                  </Link>
                  <Link
                    to="/signup"
                    className="block text-black mt-2 hover:text-white hover:bg-gray-700 px-2 py-1 rounded-lg transition duration-300"
                  >
                    Sign-up
                  </Link>
                </React.Fragment>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
