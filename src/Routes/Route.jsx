import { createBrowserRouter } from "react-router";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home";
import MyBookings from "../Pages/MyBookings";
import Blogs from "../Pages/Blogs";
import ContactUs from "../Pages/ContactUs";
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
        loader: () => fetch("../lawyerData.json"),
        Component: Home,
      },
      {
        path: "/lawyerDetails/:ids",
        loader: () => fetch("../lawyerData.json"),
        Component: LawyerDetails,
      },

      {
        path: "my-bookings",
        loader: () => fetch("../lawyerData.json"),
        Component: MyBookings,
      },
      {
        path: "blogs",
        Component: Blogs,
      },
      {
        path: "/contact-us",
        Component: ContactUs,
      },
    ],
  },
]);
