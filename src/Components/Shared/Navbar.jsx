import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
   
  return (
    <nav className="bg-gray-800 shadow-lg fixed w-full top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white text-2xl font-bold">
            <h2>Jobbox</h2>
          </div>
          
          {/* Hamburger Menu (Mobile) */}
          <div className="lg:hidden">
            <label htmlFor="menu-toggle" className="text-white cursor-pointer">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          {/* Navbar Links */}
          <div className="hidden lg:flex lg:space-x-6">
            <Link
              to="/"
              className="text-white text-lg hover:text-yellow-500 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/find-a-job"
              className="text-white text-lg hover:text-yellow-500 transition duration-300"
            >
              Find a Job
            </Link>
            <Link
              to="/recruiters"
              className="text-white text-lg hover:text-yellow-500 transition duration-300"
            >
              Recruiters
            </Link>
            <Link
              to="/candidates"
              className="text-white text-lg hover:text-yellow-500 transition duration-300"
            >
              Candidates
            </Link>
            <Link
              to="/blog"
              className="text-white text-lg hover:text-yellow-500 transition duration-300"
            >
              Blog
            </Link>
            <Link
              to="/pages"
              className="text-white text-lg hover:text-yellow-500 transition duration-300"
            >
              Pages
            </Link>
            {/* Register and Sign In Buttons */}
            <div className="flex space-x-4">
              <Link
                to="/register"
                className="text-white bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-500 transition duration-300"
              >
                Register
              </Link>
              <Link
                to="/signin"
                className="text-white bg-green-600 py-2 px-4 rounded-md hover:bg-green-500 transition duration-300"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <input type="checkbox" id="menu-toggle" className="hidden" />
      <div className="lg:hidden bg-gray-700 text-white space-y-4 p-4">
        <Link
          to="/"
          className="block text-lg hover:text-yellow-500"
        >
          Home
        </Link>
        <Link
          to="/find-a-job"
          className="block text-lg hover:text-yellow-500"
        >
          Find a Job
        </Link>
        <Link
          to="/recruiters"
          className="block text-lg hover:text-yellow-500"
        >
          Recruiters
        </Link>
        <Link
          to="/candidates"
          className="block text-lg hover:text-yellow-500"
        >
          Candidates
        </Link>
        <Link
          to="/blog"
          className="block text-lg hover:text-yellow-500"
        >
          Blog
        </Link>
        <Link
          to="/pages"
          className="block text-lg hover:text-yellow-500"
        >
          Pages
        </Link>
        <Link
          to="/register"
          className="block text-lg bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-500 transition duration-300"
        >
          
        Register
      
        </Link>
        <Link
          to="/signin"
          className="block text-lg bg-green-600 py-2 px-4 rounded-md hover:bg-green-500 transition duration-300"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
