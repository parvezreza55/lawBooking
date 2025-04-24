import React, { useEffect, useState } from "react";
import { getLawyer } from "../Utils";

import BookingCard from "./BookingCard";

const MyBookings = () => {
  const [displayLawyer, setDisplayLawyer] = useState([]);
  useEffect(() => {
    const saveLawyer = getLawyer();
    setDisplayLawyer(saveLawyer);
  }, []);

  return (
    <div className="mt-20">
      <h1 className="text-5xl text-center font-extrabold">
        My Today Appointments
      </h1>
      <p className="text-center opacity-80">
        Our platform connects you with verified, experienced Lawyers across
        various specialties — all at your convenience.
      </p>

      <div className=" mt-20">
        {displayLawyer.map((lawyer) => (
          <BookingCard key={lawyer.id} lawyer={lawyer}></BookingCard>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
