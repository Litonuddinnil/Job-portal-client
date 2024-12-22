 
import Swal from "sweetalert2";
import useAuth from "../../CustomHook/hook";
import { useNavigate } from "react-router-dom";

const AddJobs = () => {
    const {user} = useAuth();
    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());
    const { min, max, currencyType, ...newJob } = formObject;
    newJob.salaryRange = { min, max, currencyType };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");

    fetch('http://localhost:3000/jobs', {
      method: "POST",
      headers: {
        "content-type":"application/json",
      },
      body: JSON.stringify(newJob),
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
          navigate("/recruiters")
        }
      });
  };

  return (
    <div className="container mx-auto py-10 px-5 md:px-10">
      <h1 className="text-3xl font-bold text-center mb-10">Add a New Job</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-6"
      >
        {/* Job Title */}
        <div className="form-control">
          <label className="label" htmlFor="title">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="input input-bordered w-full"
            placeholder="Enter job title"
            required
          />
        </div>

        {/* Location */}
        <div className="form-control">
          <label className="label" htmlFor="location">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="input input-bordered w-full"
            placeholder="Enter job location"
            required
          />
        </div>

        {/* Job Type */}
        <div className="form-control">
          <label className="label" htmlFor="jobType">
            <span className="label-text">Job Type</span>
          </label>
          <input
            type="text"
            id="jobType"
            name="jobType"
            className="input input-bordered w-full"
            placeholder="e.g., Full-time, Part-time"
            required
          />
        </div>

        {/* Category */}
        <div className="form-control">
          <label className="label" htmlFor="category">
            <span className="label-text">Category</span>
          </label>
          <input
            type="text"
            id="category"
            name="category"
            className="input input-bordered w-full"
            placeholder="e.g., IT, Marketing"
            required
          />
        </div>

        {/* Application Deadline */}
        <div className="form-control">
          <label className="label" htmlFor="applicationDeadline">
            <span className="label-text">Application Deadline</span>
          </label>
          <input
            type="date"
            id="applicationDeadline"
            name="applicationDeadline"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Salary Range */}
        <div className="form-control">
          <label className="label" htmlFor="salaryRange">
            <span className="label-text">Salary Range</span>
          </label>
          <div className="flex space-x-4">
            <input
              type="number"
              id="min"
              name="min"
              placeholder="Min"
              className="input input-bordered w-1/2"
              required
            />
            <input
              type="number"
              id="max"
              name="max"
              placeholder="Max"
              className="input input-bordered w-1/2"
              required
            />
            <select
              name="currencyType"
              id="currencyType"
              className="select select-bordered w-full"
              required
            >
              <option value="" disabled>
                Select Currency
              </option>
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="BDT">BDT - Bangladeshi Taka</option>
              <option value="GBP">GBP - British Pound</option>
              <option value="INR">INR - Indian Rupee</option>
              <option value="AUD">AUD - Australian Dollar</option>
            </select>
          </div>
        </div>

        {/* Company Name */}
        <div className="form-control">
          <label className="label" htmlFor="company">
            <span className="label-text">Company Name</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="input input-bordered w-full"
            placeholder="Enter company name"
            required
          />
        </div>
        
        {/*Name */}
        <div className="form-control">
          <label className="label" htmlFor="company">
            <span className="label-text">HR_Name</span>
          </label>
          <input
            type="text" 
            name="hr_name" 
            className="input input-bordered w-full"
            placeholder="Enter company name"
            required
          />
        </div>
        {/* email */}
        <div className="form-control">
          <label className="label" htmlFor="company">
            <span className="label-text">HR_Email</span>
          </label>
          <input
            type="text" 
            name="hr_email"
            defaultValue={user?.email}
            className="input input-bordered w-full"
            placeholder="Enter company name"
            required
          />
        </div>

        {/* Description */}
        <div className="form-control">
          <label className="label" htmlFor="description">
            <span className="label-text">Description</span>
          </label>
          <textarea
            id="description"
            name="description"
            className="textarea textarea-bordered w-full"
            placeholder="Enter job description"
            required
          />
        </div>

        {/* Requirements */}
        <div className="form-control">
          <label className="label" htmlFor="requirements">
            <span className="label-text">Requirements</span>
          </label>
          <textarea
            id="requirements"
            name="requirements"
            className="textarea textarea-bordered w-full"
            placeholder="Enter job requirements, one per line"
            required
          />
        </div>

        {/* Responsibilities */}
        <div className="form-control">
          <label className="label" htmlFor="responsibilities">
            <span className="label-text">Responsibilities</span>
          </label>
          <textarea
            id="responsibilities"
            name="responsibilities"
            className="textarea textarea-bordered w-full"
            placeholder="Enter job responsibilities, one per line"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full">
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJobs;
