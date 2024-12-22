import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply";
import JobApplication from "../Components/JobApplication/JobApplication";
import AddJobs from "../Components/JobApplication/AddJobs";
import Recruiters from "../pages/Recruiters";
import FindAJob from "../pages/FindAJob";
import AllDetailsWithRecruiter from "../pages/AllDetailsWithRecruiter";
import ViewApplication from "../pages/ViewApplication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path:"/jobApply/:id",
        element:<PrivateRoute>
          <JobApply></JobApply>
        </PrivateRoute>
      },
      {
        path:"/jobApplications",
        element:<PrivateRoute><JobApplication></JobApplication></PrivateRoute>
      },
      {
        path:"/viewApplication/:job_id",
        element:<PrivateRoute><ViewApplication></ViewApplication></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:3000/job-application/jobs/${params.job_id}`)
      },
      {
        path:"/find-a-job",
        element:<PrivateRoute><FindAJob></FindAJob></PrivateRoute>, 
      },
      {
        path:"/addJobs",
        element:<PrivateRoute><AddJobs></AddJobs></PrivateRoute>, 
      },
      {
        path:"/recruiters",
        element:<PrivateRoute><Recruiters></Recruiters> </PrivateRoute>, 
      },
      {
        path:"/recruitersAllDetails",
        element:<PrivateRoute><AllDetailsWithRecruiter></AllDetailsWithRecruiter></PrivateRoute>, 
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/singIn",
        element: <SignIn></SignIn>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;
