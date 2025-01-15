import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-transprent">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <p className="text-2xl font-semibold text-gray-600 mt-4">
          Oops! Page not found.
        </p>
        <p className="text-gray-500 mt-2">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="px-6 py-3 text-white bg-black rounded-md transition duration-300"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
