import React from "react";
import { Link } from "react-router";

const BookingCard = ({ lawyer, handleDelete }) => {
  const { name, expertise, fee, id } = lawyer;

  return (
    <div>
      <div className="space-y-3 py-10 bg-base-100 shadow-sm rounded-2xl px-5 mt-7 border border-[#14141420]">
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold">{name}</h1>
            <p className="opacity-60">{expertise}</p>
          </div>
          <div>
            <p className="opacity-60">Appointment Fee : {fee}</p>
          </div>
        </div>
        <div className="border border-dashed border-[#14141420]"></div>

        <div>
          <Link to={"/my-bookings"}>
            <button
              onClick={() => handleDelete(id)}
              className="rounded-full w-full text-[#FF0000] border border-[#FF0000]  font-bold py-3"
            >
              Book Appointment Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
