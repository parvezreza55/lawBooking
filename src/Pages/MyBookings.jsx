import React, { useEffect, useState } from "react";
import { getLawyer, removeLawyer } from "../Utils";

import BookingCard from "./BookingCard";
import { Link } from "react-router";

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

        <p className="text-center opacity-80 mt-5 ">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience.
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
