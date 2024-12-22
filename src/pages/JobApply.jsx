import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../CustomHook/hook";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  //   console.log(id,user);
  const submitJobFromData = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkeDin.value;
    const gitHub = form.gitHub.value;
    const resume = form.resume.value;
    console.log(linkedin, gitHub, resume);

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedin,
      gitHub,
      resume,
    };

    fetch(`http://localhost:3000/job-application`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/jobApplications')
        }
      });
  };
  return (
    <div className="card bg-base-100 w-full shadow-2xl">
      <h1 className="text-5xl font-bold text-center my-3">
        Apply Job And Good Luck!
      </h1>
      <form onSubmit={submitJobFromData} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkeDin URL</span>
          </label>
          <input
            type="url"
            name="linkeDin"
            placeholder="LinkeDin URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">GitHub URL</span>
          </label>
          <input
            type="url"
            placeholder="GitHub URL"
            name="gitHub"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume URL</span>
          </label>
          <input
            type="url"
            placeholder="Resume URL"
            name="resume"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
