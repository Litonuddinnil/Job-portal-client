import React, { useEffect, useState } from "react";
import useAuth from "../CustomHook/hook";
import { Link } from "react-router-dom";

const Recruiters = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:3000/jobAll?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [user?.email]);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">
        My Posted Jobs: <span className="text-blue-600">{jobs.length}</span>
      </h1>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="table w-full">
          {/* Table Header */}
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Company</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Job Type</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Application Count</th>
              <th className="py-3 px-4">Deadline</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {jobs.map((job, index) => (
              <tr
                key={job._id}
                className={`hover:bg-gray-100 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="py-3 px-4 text-center font-medium">
                  {index + 1}
                </td>
                <td className="py-3 px-4">{job.title}</td>
                <td className="py-3 px-4">{job.company}</td>
                <td className="py-3 px-4">{job.location}</td>
                <td className="py-3 px-4">{job.jobType}</td>
                <td className="py-3 px-4">{job.category}</td>
                <td className="py-3 px-4">{job.applicationCount}</td>
                <td className="py-3 px-4 text-center">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
                    {job.applicationDeadline}
                  </span>
                </td>
                <td className="py-3 px-4">
                 
                    <Link to={`/viewApplication/${job._id}`}> 
                      <button className="btn btn-sm btn-primary hover:bg-green-700 transition-all">
                        View Application
                      </button> 
                    </Link>
                    <Link to={"/recruitersAllDetails"}>
                      {" "} 
                      <button className="btn btn-sm btn-accent hover:bg-green-700 transition-all">
                        Show Details
                      </button>
                    </Link>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Recruiters;
