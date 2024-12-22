  
import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FindAJob = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jobAll")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
   <div>
    <div className="flex items-center justify-center">
    <motion.h1
            animate={{
               x:20
            }}
            transition={{
              duration: 2,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="text-4xl lg:text-5xl font-bold text-primary"
          >
            New a{" "}
            <motion.span
              animate={{
                color: ["#33bbff", "#3358ff", "#ffe333"],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-blue-500"
            >
              Find
            </motion.span>{" "}
           
            All Job
          </motion.h1>
    </div>
     <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job, index) => (
        <div
          key={index}
          className="card w-full bg-base-100 shadow-xl border border-gray-200"
        >
          <div className="flex items-center p-5">
            <img
              src={job.company_logo}
              alt={`${job.company} logo`}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-3">
              <h2 className="font-bold text-lg">{job.company}</h2>
              <div className="flex items-center gap-1">
                <p><FaLocationDot></FaLocationDot></p>
              <p className="text-sm text-gray-500">{job.location}</p>
              </div>
            </div>
          </div>
          <div className="card-body pt-0">
            <h3 className="card-title text-blue-600 font-semibold">
              {job.title}
            </h3>
            <p className="text-sm text-gray-500">
              {job.description.slice(0, 100)}... <span>See More</span>
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {job.requirements.map((req, reqIndex) => (
                <span
                  key={reqIndex}
                  className="badge badge-outline badge-primary"
                >
                  {req}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                <strong>Type:</strong> {job.jobType}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Deadline:</strong> {job.applicationDeadline}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Salary:</strong>{" "}
                {job.salaryRange.min}-{job.salaryRange.max} {job.salaryRange.currency}
              </p>
            </div>
            <Link to={`/jobs/${job._id}`}><button className="btn btn-primary mt-4">Apply Now</button></Link>
          </div>
        </div>
      ))}
      
    </div> 
   </div>
  );
};

export default FindAJob;
