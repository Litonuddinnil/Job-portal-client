import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplication = () => {
  const applicationMembers = useLoaderData();
  
  const handlerStatusUpdate = (e, id) => {
    const status = e.target.value;
    const data = {
      status: status
    };

    // Update status via PATCH request
    fetch(`http://localhost:3000/job-application/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
         if (data.modifiedCount) {
                  Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your Job Status Updated",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
      })
      .catch(error => console.error("Error updating status:", error));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Application Details
      </h1>
      {applicationMembers && applicationMembers.length > 0 ? (
        applicationMembers.map((applicationMember, index) => (
          <div key={index} className="overflow-x-auto mb-6">
            <table className="table w-full border rounded-lg shadow-lg bg-white">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="py-3 px-6">Field</th>
                  <th className="py-3 px-6">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100">
                  <td className="py-3 px-6 font-semibold">Applicant Email</td>
                  <td className="py-3 px-6">{applicationMember.applicant_email}</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="py-3 px-6 font-semibold">GitHub</td>
                  <td className="py-3 px-6">
                    <a
                      href={applicationMember.gitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View GitHub Profile
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="py-3 px-6 font-semibold">Job ID</td>
                  <td className="py-3 px-6">{applicationMember.job_id}</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="py-3 px-6 font-semibold">LinkedIn</td>
                  <td className="py-3 px-6">
                    <a
                      href={applicationMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View LinkedIn Profile
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="py-3 px-6 font-semibold">Resume</td>
                  <td className="py-3 px-6">
                    <a
                      href={applicationMember.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View Resume
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="py-3 px-6 font-semibold">Update Status</td>
                  <td className="py-3 px-6">
                    <select 
                      onChange={(e) => handlerStatusUpdate(e, applicationMember._id)} 
                      defaultValue={applicationMember.status || "Change Status"} 
                      className="select select-bordered select-sm w-full max-w-xs"
                    >
                      <option disabled>Change Status</option>
                      <option value="Under Review">Under Review</option>
                      <option value="Set Review">Set Review</option>
                      <option value="Hired">Hired</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="py-3 px-6 font-semibold">Status</td>
                  <td className="py-3 px-6">
                    {applicationMember.status ?applicationMember.status :"Not Updated"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))
      ) : (
        <p className="text-center text-red-600">No application data available.</p>
      )}
    </div>
  );
};

export default ViewApplication;
