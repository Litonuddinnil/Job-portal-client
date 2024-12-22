import React, { useState } from "react";
import { motion } from "framer-motion";
import image1 from "../assets/job2.jpeg"

const Banner = () => {
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    console.log("Search initiated with:", { industry, location, keyword });
  };

  return (
    <div className="bg-base-100 flex">
      <div className="container mx-auto px-6 lg:px-20 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col justify-center space-y-6">
          <motion.h1
            animate={{
              y: 20,
            }}
            transition={{
              duration: 2,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="text-4xl lg:text-5xl font-bold text-primary"
          >
            The{" "}
            <motion.span
              animate={{
                color: ["#33bbff", "#3358ff", "#ffe333"],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-blue-500"
            >
              Easiest Way
            </motion.span>{" "}
            <br />
            to Get Your New Job
          </motion.h1>
          <p className="text-base-content">
            Each month, more than 3 million job seekers turn to websites in
            their search for work, making over 140,000 applications every single
            day.
          </p>

          {/* Search Bar */}
          <div className="bg-base-200 rounded-lg shadow-lg p-4 flex flex-col lg:flex-row gap-4 items-center">
            <select
              className="select select-bordered w-full lg:w-auto"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="">Select Industry</option>
              <option value="IT">IT</option>
              <option value="Finance">Finance</option>
              <option value="Healthcare">Healthcare</option>
            </select>
            <select
              className="select select-bordered w-full lg:w-auto"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Select Location</option>
              <option value="New York">New York</option>
              <option value="California">California</option>
              <option value="Texas">Texas</option>
            </select>
            <input
              type="text"
              placeholder="Your keyword"
              className="input input-bordered w-full lg:w-auto flex-grow"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button
              className="btn btn-primary w-full lg:w-auto"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          {/* Popular Searches */}
          <p className="text-sm text-base-content">
            Popular Searches:{" "}
            <a href="#" className="link link-primary hover:text-blue-700">
              Designer
            </a>
            ,{" "}
            <a href="#" className="link link-primary hover:text-blue-700">
              Web
            </a>
            ,{" "}
            <a href="#" className="link link-primary hover:text-blue-700">
              iOS
            </a>
            ,{" "}
            <a href="#" className="link link-primary hover:text-blue-700">
              Developer
            </a>
            ,{" "}
            <a href="#" className="link link-primary hover:text-blue-700">
              PHP
            </a>
            ,{" "}
            <a href="#" className="link link-primary hover:text-blue-700">
              Senior
            </a>
          </p>
        </div>

        <div className="flex relative justify-center items-center">
          {/* Overlapping container */}
          <motion.div
            animate={{ y: [0, 50, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
          >
            <img
              className="w-72 border-l-8 border-b-8 border-blue-600 rounded-br-[40px] rounded-t-[40px] shadow-lg"
              src="https://i.ibb.co/BchKLzx/job-image.jpg"
              alt="Job Image"
            />
          </motion.div>

          {/* Second Image Animation */}
          <motion.div
            animate={{ x: [0, 50, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatDelay: 5,
              ease: "easeIn",
            }}
          >
            <img
              className="w-96 object-cover h-64 rounded-md shadow-lg absolute right-0  border-l-8 border-b-8 border-blue-600 rounded-br-[40px] rounded-t-[40px]"
              src={image1} // Fixed image URL
              alt="Job Image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
