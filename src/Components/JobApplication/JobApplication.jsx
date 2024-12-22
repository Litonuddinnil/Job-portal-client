import React, { useEffect, useState } from 'react';
import useAuth from '../../CustomHook/hook';
 

const JobApplication = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/job-application?email=${user.email}`)
                .then(res => res.json())
                .then(data => setJobs(data))
        }
    }, [user.email]);  
    return (
        <div className="p-5">
      <h1 className="text-2xl font-bold text-center mb-5">My Job Applications</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* Table Head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Company Logo</th>
              <th>Company</th>
              <th>Job Title</th>
              <th>Applicant Email</th>
              <th>LinkedIn</th>
              <th>GitHub</th>
              <th>Resume</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {jobs.length > 0 ? (
              jobs.map((job, index) => (
                <tr key={job._id} className="hover">
                  <th>{index + 1}</th>
                  <td>
                    <img
                      src={job.company_logo}
                      alt={job.company}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </td>
                  <td>{job.company}</td>
                  <td>{job.title}</td>
                  <td>{job.applicant_email}</td>
                  <td>
                    <a
                      href={job.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link link-primary"
                    >
                      LinkedIn
                    </a>
                  </td>
                  <td>
                    <a
                      href={job.gitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link link-primary"
                    >
                      GitHub
                    </a>
                  </td>
                  <td>
                    <a
                      href={job.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link link-primary"
                    >
                      Resume
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center text-gray-500">
                  No job applications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default JobApplication;
