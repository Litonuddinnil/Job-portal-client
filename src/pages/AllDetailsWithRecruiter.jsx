import React, { useEffect, useState } from "react";
import useAuth from "../CustomHook/hook";

const AllDetailsWithRecruiter = () => {
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
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">
        My Posted Jobs: <span className="text-blue-600">{jobs.length}</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="card bg-white shadow-xl border border-gray-200 rounded-lg transition-transform transform hover:scale-105"
          >
            <div className="card-body p-5">
              {/* Job Title */}
              <h2 className="card-title text-lg font-bold text-gray-800 mb-4">
                {job.title}
              </h2>

              {/* Job Details */}
              <p className="text-sm text-gray-600 mb-2">
                <strong>Company:</strong> {job.company}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Location:</strong> {job.location}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Job Type:</strong> {job.jobType}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Category:</strong> {job.category}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Application Deadline:</strong>{" "}
                <span className="text-red-500">{job.applicationDeadline}</span>
              </p>

              {/* HR Details */}
              <p className="text-sm text-gray-600 mb-2">
                <strong>HR Name:</strong> {job.hr_name}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>HR Email:</strong>{" "}
                <a
                  href={`mailto:${job.hr_email}`}
                  className="text-blue-500 hover:underline"
                >
                  {job.hr_email}
                </a>
              </p>

              {/* Job Description */}
              <p className="text-sm text-gray-600 mb-4">
                <strong>Description:</strong> {job.description}
              </p>

              {/* Requirements */}
              <p className="text-sm text-gray-600">
                <strong>Requirements:</strong>
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-600 mb-4">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>

              {/* Responsibilities */}
              <p className="text-sm text-gray-600">
                <strong>Responsibilities:</strong>
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-600 mb-4">
                {job.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>

              {/* Salary Range */}
              <p className="text-sm text-gray-600 mb-4">
                <strong>Salary Range:</strong>{" "}
                <span className="text-green-600 font-semibold">
                  {job.salaryRange.min} - {job.salaryRange.max}{" "}
                  {job.salaryRange.currencyType}
                </span>
              </p>

              {/* Actions */}
              <div className="flex justify-end gap-2">
                <button className="btn btn-sm btn-primary">
                  Edit Job
                </button>
                <button className="btn btn-sm btn-error">
                  Delete Job
                </button> 
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDetailsWithRecruiter;
