import React from "react";
import { Link, NavLink } from "react-router";
import navImg from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar p-0 bg-base-100 shadow-sm  py-5 md:px-12 lg:px-24">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) => (isActive ? "underline" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/my-bookings"}
                  className={({ isActive }) => (isActive ? "underline" : "")}
                >
                  My-Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/blogs"}
                  className={({ isActive }) => (isActive ? "underline" : "")}
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact-us"}
                  className={({ isActive }) => (isActive ? "underline" : "")}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex">
            <Link to={"/"} className=" text-xl">
              <div className="flex gap-1  items-center ">
                <img src={navImg} alt="" />
                <h1 className="text-4xl font-extrabold">Law.BD</h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-medium text-[#0F0F0F70]">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/my-bookings"}
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                My-Bookings
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/blogs"}
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact-us"}
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden md:flex">
          <a className="btn bg-[#0EA106] text-white rounded-full font-bold text-lg p-6">
            Contact Now
          </a>
        </div>
        <div className="navbar-end  flex md:hidden">
          <Link to={"/"} className=" text-xl">
            <div className="flex gap-1  items-center ">
              <img src={navImg} alt="" />
              <h1 className="text-4xl font-extrabold">Law.BD</h1>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
