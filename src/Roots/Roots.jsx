import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";

const Roots = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-288px)]">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-24">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default Roots;
