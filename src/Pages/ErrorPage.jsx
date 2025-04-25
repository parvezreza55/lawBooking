import React from "react";
import Navbar from "../Components/Navbar";
import { Link, useRouteError } from "react-router";
import errorImg from "../assets/error.jpg";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <Navbar></Navbar>
      <div className="py-24 text-center space-y-3">
        <div className="w-96 shadow-sm rounded-4xl mx-auto">
          <img src={errorImg} alt="" />
        </div>
        <p>{error?.error?.message || "No Page Found"}</p>
        <Link to={"/"}>
          <button className="text-xl font-bold text-white bg-[#0EA106] px-7 py-3 rounded-lg">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
