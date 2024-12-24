import Lottie from "lottie-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import animationDataLogo from "../../assets/logo.json";
import AuthContext from "../../provider/AuthContext/AuthContext";

const Navbar = () => {
  const { user, useLogOut } = useContext(AuthContext);
  const handlerLogOut = () => {
    useLogOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <nav className=" bg-gray-900 shadow-lg w-full  ">
      <div className="px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white flex items-center justify-center text-2xl font-bold">
            <div className="w-12 h-12">
              <Lottie animationData={animationDataLogo}></Lottie>
            </div>
            <h2>Job-Portal</h2>
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
              className="text-white text-lg hover:underline hover:text-yellow-500 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/find-a-job"
              className="text-white text-lg hover:underline hover:text-yellow-500 transition duration-300"
            >
              Find A Jobs
            </Link>
            <Link
              to="/addJobs"
              className="text-white text-lg hover:underline hover:text-yellow-500 transition duration-300"
            >
              Add A Jobs
            </Link>
            <Link
              to="/recruiters"
              className="text-white text-lg hover:underline hover:text-yellow-500 transition duration-300"
            >
              Recruiters
            </Link>
            <Link
              to="/jobApplications"
              className="text-white text-lg hover:underline hover:text-yellow-500 transition duration-300"
            >
              My Application
            </Link>
            <Link
              to="/blog"
              className="text-white text-lg hover:underline hover:text-yellow-500 transition duration-300"
            >
              Blog
            </Link>
            <Link
              to="/pages"
              className="text-white text-lg hover:underline hover:text-yellow-500 transition duration-300"
            >
              Pages
            </Link>
            {/* Register and Sign In Buttons */}
            <div className="flex space-x-4">
              {user ? (
                <>
                  <button onClick={handlerLogOut} className="btn btn-error">
                    Log-Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="hover:text-yellow-500 text-white hover:underline"
                  >
                    Register
                  </Link>
                  <Link
                    to="/singIn"
                    className="text-white hover:underline bg-green-600 py-2 px-4 rounded-md hover:bg-green-500 transition duration-300"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <input type="checkbox" id="menu-toggle" className="hidden" />
      <div className="lg:hidden bg-gray-700 text-white space-y-4 p-4">
        <Link
          to="/"
          className="block text-lg hover:underline hover:text-yellow-500"
        >
          Home
        </Link>
        <Link
          to="/find-a-job"
          className="text-white text-lg hover:underline hover:text-yellow-500 transition duration-300"
        >
          Find A Jobs
        </Link>
        <Link
          to="/addJobs"
          className="block text-lg hover:underline hover:text-yellow-500"
        >
          Add A Jobs
        </Link>
        <Link
          to="/recruiters"
          className="block text-lg hover:underline hover:text-yellow-500"
        >
          Recruiters
        </Link>
        <Link
          to="/jobApplications"
          className="block text-lg hover:underline hover:text-yellow-500"
        >
          My Application
        </Link>
        <Link
          to="/blog"
          className="block text-lg hover:underline hover:text-yellow-500"
        >
          Blog
        </Link>
        <Link
          to="/pages"
          className="block text-lg hover:underline hover:text-yellow-500"
        >
          Pages
        </Link>
        <Link
          to="/register"
          className="  text-lg bg-blue-600 py-2 px-4 rounded-md hover:underline hover:bg-blue-500 transition duration-300"
        >
          Register
        </Link>
        <Link
          to="/singIn"
          className="block text-lg hover:underline bg-green-600 py-2 px-4 rounded-md hover:bg-green-500 transition duration-300"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
