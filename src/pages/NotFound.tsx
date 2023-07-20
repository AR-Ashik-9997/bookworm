import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-top via-sky-middle to-sky-bottom">
      <div className="text-center">
        <div className="text-6xl font-bold text-blood mb-4">
          404
        </div>
        <p className="text-xl text-black mb-8">
          Oops! Page not found
        </p>
        <div className="flex justify-center">
          <Link
            to="/"
            className="text-lg font-semibold border-b-2 px-4 py-2  hover:border-opacity-75 transition-all ease-in-out duration-300 bg-teal-600 text-white rounded-xl"
          >
            Go back to Home
          </Link>
        </div>
      </div>
      {/* Fancy animations */}
      
      <div className="animate-bounce absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <svg
          className="h-6 w-6 text-black opacity-30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </div>
    </div>
  );
};

export default NotFoundPage;
