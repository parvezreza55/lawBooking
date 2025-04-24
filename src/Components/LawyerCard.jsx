import React from "react";
import { Link } from "react-router";

const LawyerCard = ({ lawyer }) => {
  const { name, image, license, experience, availability, expertise, id } =
    lawyer;
  return (
    <>
      <div className="card card-side bg-base-100 gap-7 shadow-sm">
        <figure>
          <img src={image} alt="Movie" className="w-60 h-60 p-4 rounded-4xl" />
        </figure>
        <div className="flex flex-col gap-3 mt-4  w-3/6">
          <div className="flex gap-4 text-xs">
            <p className="bg-[#09982F10] text-[#09982F] px-3 py-1 rounded-full">
              {availability}
            </p>
            <p className="bg-[#176AE510] text-[#176AE5] px-3 py-1 rounded-full">
              {experience}
            </p>
          </div>
          <h1 className="text-2xl font-extrabold">{name}</h1>
          <div className="opacity-70 ">
            <p>{expertise}</p>
            <p>&reg; License No: {license}</p>
          </div>
          <Link to={`/lawyerDetails/${id}`} className="mt-5">
            <button className="btn hover:bg-[#176AE5] hover:text-white w-full rounded-full border-2 font-bold border-[#176AE520] text-[#176AE5]">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LawyerCard;
