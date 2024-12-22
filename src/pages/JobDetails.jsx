import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const singleJobData = useLoaderData();
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
    company_logo,
  } = singleJobData;

  return (
    <div className="p-6 md:p-12 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="flex items-center p-6 bg-blue-500 text-white">
          <img
            src={company_logo}
            alt={`${company} logo`}
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-sm">{company}</p>
            <p className="text-sm">{location}</p>
          </div>
        </div>

        {/* Job Details Section */}
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-2 text-blue-600">Job Overview</h2>
          <p className="text-gray-700 mb-4">{description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p>
              <strong>Category:</strong> {category}
            </p>
            <p>
              <strong>Job Type:</strong> {jobType}
            </p>
            <p>
              <strong>Salary:</strong> {salaryRange.min}-{salaryRange.max}{" "}
              {salaryRange.currency}
            </p>
            <p>
              <strong>Deadline:</strong> {applicationDeadline}
            </p>
          </div>
        </div>

        {/* Requirements Section */}
        <div className="p-6 border-t">
          <h2 className="text-lg font-semibold mb-2 text-blue-600">Requirements</h2>
          <ul className="list-disc list-inside text-gray-700">
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        {/* Responsibilities Section */}
        <div className="p-6 border-t">
          <h2 className="text-lg font-semibold mb-2 text-blue-600">
            Responsibilities
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            {responsibilities.map((res, index) => (
              <li key={index}>{res}</li>
            ))}
          </ul>
        </div>

        {/* HR Contact Section */}
        <div className="p-6 border-t">
          <h2 className="text-lg font-semibold mb-2 text-blue-600">
            Contact Information
          </h2>
          <p>
            <strong>HR Name:</strong> {hr_name}
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${hr_email}`}
              className="text-blue-500 hover:underline"
            >
              {hr_email}
            </a>
          </p>
        </div>

        {/* Apply Now Button */}
        <div className="p-6 border-t bg-gray-50 text-center">
         <Link to={`/jobApply/${_id}`}> <button className="btn btn-primary">Apply Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
