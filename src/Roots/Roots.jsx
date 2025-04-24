import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const Roots = () => {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <div className="max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-24">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Roots;
