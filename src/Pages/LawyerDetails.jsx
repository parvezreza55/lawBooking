import React from "react";
import { useLoaderData, useParams } from "react-router";

const LawyerDetails = () => {
  const { ids } = useParams();
  const data = useLoaderData();
  const data1 = data.find((layers) => layers.id === parseInt(ids));
  console.log(data1);
  const {
    name,
    image,
    license,
    experience,
    availability,
    expertise,
    id,
    fee,
    availableDay,
  } = data1;

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
        <div className="card card-side bg-base-100 gap-7 shadow-sm">
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
                  {availableDay.map((day) => (
                    <p className="font-semibold border border-[#FFA000] bg-[#FFA00020] px-4 rounded-full py-2">
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
    </>
  );
};

export default LawyerDetails;
