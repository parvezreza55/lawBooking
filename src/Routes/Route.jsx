import { createBrowserRouter } from "react-router";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home";
import MyBookings from "../Pages/MyBookings";
import Blogs from "../Pages/Blogs";
import ErrorPage from "../Pages/ErrorPage";
import LawyerDetails from "../Pages/LawyerDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        hydrateFallbackElement: (
          <div className="text-center ">
            <span className="loading loading-bars loading-xs duration-1000"></span>
            <span className="loading loading-bars loading-sm duration-1000"></span>
            <span className="loading loading-bars loading-md duration-1000"></span>
          </div>
        ),
        loader: () => fetch("../lawyerData.json"),
        Component: Home,
      },
      {
        path: "/lawyerDetails/:ids",
        hydrateFallbackElement: (
          <div className="text-center py-10">
            <span className="loading loading-bars loading-xs duration-1000"></span>
            <span className="loading loading-bars loading-sm duration-1000"></span>
            <span className="loading loading-bars loading-md duration-1000"></span>
          </div>
        ),
        loader: () => fetch("../lawyerData.json"),
        Component: LawyerDetails,
      },

      {
        path: "my-bookings",
        hydrateFallbackElement: (
          <div className="text-center py-10">
            <span className="loading loading-bars loading-xs duration-1000"></span>
            <span className="loading loading-bars loading-sm duration-1000"></span>
            <span className="loading loading-bars loading-md duration-1000"></span>
          </div>
        ),
        loader: () => fetch("../lawyerData.json"),
        Component: MyBookings,
      },
      {
        path: "blogs",
        hydrateFallbackElement: (
          <div className="text-center py-10">
            <span className="loading loading-bars loading-xs duration-1000"></span>
            <span className="loading loading-bars loading-sm duration-1000"></span>
            <span className="loading loading-bars loading-md duration-1000"></span>
          </div>
        ),
        loader: () => fetch("../blog.json"),
        Component: Blogs,
      },
    ],
  },
]);
