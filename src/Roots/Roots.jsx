import React from "react";
import { Outlet } from "react-router";

const Roots = () => {
  return (
    <>
      <h1>THis is root</h1>
      <Outlet></Outlet>
    </>
  );
};

export default Roots;
