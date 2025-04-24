import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Roots from "./Roots/Roots.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import Home from "./Pages/Home.jsx";
import MyBookings from "./Pages/MyBookings.jsx";
import Blogs from "./Pages/Blogs.jsx";
import ContactUs from "./Pages/ContactUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "my-bookings",
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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
