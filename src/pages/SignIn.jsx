import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import animationDataLogin from "../assets/login.json";
import AuthContext from "../provider/AuthContext/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Components/Shared/SocialLogin";
const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // const from = location?.state || '/';
  // State management for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle sign-in
  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Sign In Attempt:", { email, password });
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        // navigate(from)
        navigate(location?.state ? location.state : "/");
        // toast.success("Login successful!");
      })
      .catch((err) => {
        console.log(err.code, err.message);
      });
    // You can replace this with your backend/API logic for authentication
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div>
        <Lottie animationData={animationDataLogin}></Lottie>
      </div>
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-gray-800 sm:text-3xl">
          Welcome Back
        </h2>
        <p className="mt-2 text-sm text-center text-gray-600">
          Please sign in to your account
        </p>

        {/* Form */}
        <form className="mt-6" onSubmit={handleSignIn}>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="example@example.com"
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-medium text-sm rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
          >
            Sign In
          </button>
        </form>
        <div>
          <SocialLogin></SocialLogin>
        </div>

        {/* Links */}
        <div className="mt-6 text-sm text-center text-gray-600">
          <p>
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
