import React from "react";
import Navbar from "../Components/Navbar";
import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <Navbar></Navbar>
      <div className="py-24 text-center">
        <h1>{error?.status || 404}</h1>
        <p>{error?.error?.message || "No Page Found"}</p>
        <Link to={"/"}>
          <button className="btn btn-success">GO TO HOME</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
