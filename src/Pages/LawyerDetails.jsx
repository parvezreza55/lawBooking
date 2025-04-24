import React from "react";
import { CiWarning } from "react-icons/ci";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { setLawyer } from "../Utils";
const LawyerDetails = () => {
  const { ids } = useParams();
  const data = useLoaderData();
  const navigate = useNavigate();
  const data1 = data.find((layers) => layers.id === parseInt(ids));
  console.log(data1);

  const {
    name,
    image,
    license,
    experience,
    availability,
    expertise,
    fee,
    availableDay,
  } = data1;
  const handleBooking = () => {
    // toast("Wow so easy!");
    // setLawyer(data1);
    const result = setLawyer(data1);
    if (result) {
      navigate("/my-bookings");
    } else {
      navigate("");
    }
  };

  return (
    <>
      <div className="text-center bg-[#0F0F0F10] py-20 rounded-2xl mt-10">
        <h1 className="text-4xl font-extrabold">Lawyer’s Profile Details</h1>
        <p className="mt-3 opacity-80 ">
          A lawyer is a professional who provides legal advice, represents
          clients in legal matters,and ensure justice is served.
        </p>
      </div>
      <div className="mt-10">
        <div className="card card-side bg-base-100 gap-7 shadow-sm border border-[#14141420]">
          <figure>
            <img
              src={image}
              alt="Movie"
              className="w-60 h-60 p-4 rounded-4xl"
            />
          </figure>
          <div className="flex flex-col justify-center text-left  gap-2 ">
            <div>
              <p className="bg-[#176AE510] text-[#176AE5] px-3 py-1 rounded-full w-fit">
                {experience}
              </p>
            </div>
            <h1 className="text-2xl font-extrabold">{name}</h1>
            <div className="opacity-70 flex gap-5">
              <p>{expertise}</p>
              <p>&reg; License No: {license}</p>
            </div>
            <div>
              <h1>
                <span className="flex gap-3 items-center">
                  <span className="font-bold">Availability</span>
                  {availableDay.map((day, index) => (
                    <p
                      key={index}
                      className="font-semibold border border-[#FFA000] bg-[#FFA00020] px-4 rounded-full py-2"
                    >
                      {" "}
                      {day}
                    </p>
                  ))}
                </span>
              </h1>
            </div>
            <h1>
              <span className="font-bold"> Consultation Fee:</span>{" "}
              <span className="font-extrabold text-[#0EA106] ">
                Taka: {fee}
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* appointment div  */}
      <div className="space-y-3 py-10 bg-base-100 shadow-sm rounded-2xl px-5 mt-7 border border-[#14141420]">
        <h3 className="text-2xl font-bold text-center ">Book an Appointment</h3>
        <div className="border border-dashed border-[#14141420]"></div>
        <div className="flex justify-between">
          <h1>Availability</h1>
          <p className="bg-[#09982F10] text-[#09982F] px-3 py-1 rounded-full">
            Lawyer {availability} Today
          </p>
        </div>
        <div className="border  border-[#14141420]"></div>
        <div>
          <h1 className="border-[#FFA000] text-[#FFA000] bg-[#FFA00020] px-4 rounded-full py-2 flex items-center gap-1">
            <CiWarning />
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.
          </h1>
        </div>
        <div>
          <button
            onClick={handleBooking}
            className="rounded-full w-full bg-[#09982F] text-white font-bold py-3"
          >
            Book Appointment Now
          </button>
        </div>
      </div>
    </>
  );
};

export default LawyerDetails;
