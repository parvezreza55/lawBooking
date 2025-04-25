import React from "react";
import navImg from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="footer footer-horizontal footer-center bg-[#0F0F0F]  text-white rounded p-10 gap-3 mt-20">
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link to={"/"} className=" text-xl">
              <div className="flex gap-1 items-center ">
                <img src={navImg} alt="" />
                <h1 className="text-4xl font-extrabold">Law.BD</h1>
              </div>
            </Link>
          </div>
        </nav>
        <nav className="grid grid-flow-col gap-4">
          <ul className="menu menu-horizontal px-1 text-lg font-medium text-[#FFFFFF70]">
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
        </nav>
        <div className="border w-full border-dashed border-[#FFFFFF70]"></div>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link
              to={"https://www.facebook.com/parvez.reza.312357/"}
              target="_blank"
            >
              <FaFacebook size={50} className=" p-2" />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/parvez-reza-9a78a42a8/"}
              target="_blank"
            >
              <FaLinkedin size={50} className="p-2"></FaLinkedin>
            </Link>
            <Link to={"https://www.youtube.com"} target="_blank">
              <FaYoutube size={50} className=" p-2"></FaYoutube>
            </Link>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
