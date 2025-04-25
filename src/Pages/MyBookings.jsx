import React, { useEffect, useState } from "react";
import { getLawyer, removeLawyer } from "../Utils";

import BookingCard from "./BookingCard";
import { Link } from "react-router";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  }, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
   Z`;

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const MyBookings = () => {
  const [displayLawyer, setDisplayLawyer] = useState([]);
  useEffect(() => {
    const saveLawyer = getLawyer();
    setDisplayLawyer(saveLawyer);
  }, []);

  const handleDelete = (id) => {
    removeLawyer(id);
    setDisplayLawyer(getLawyer());
  };

  return (
    <div className="mt-20">
      {displayLawyer.length === 0 ? (
        ""
      ) : (
        <div className="flex justify-center mb-10">
          <BarChart width={1000} height={300} data={displayLawyer}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
            <CartesianGrid></CartesianGrid>
            <Bar dataKey="fee" fill="#00C49F" shape={<TriangleBar />} />
          </BarChart>
        </div>
      )}
      <div>
        <div>
          {displayLawyer.length === 0 ? (
            <h1 className="text-5xl text-center font-extrabold">
              You have Not book any appointment yet
            </h1>
          ) : (
            <h1 className="text-5xl text-center font-extrabold">
              My Today Appointments
            </h1>
          )}
        </div>

        <p className="text-center opacity-80 mt-5 text-xl">
          Each appointment is handled with sincerity,dedication and utmost
          professionalism to ensure every client feels heard,respected and fully
          supported in their legal journey.
        </p>
        <div className="text-center mt-5">
          {displayLawyer.length === 0 ? (
            <Link to={"/"}>
              <button className="btn bg-[#0EA106] text-white text-center">
                Go to Home
              </button>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className=" mt-20">
        {displayLawyer.map((lawyer) => (
          <BookingCard
            key={lawyer.id}
            lawyer={lawyer}
            handleDelete={handleDelete}
          ></BookingCard>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
