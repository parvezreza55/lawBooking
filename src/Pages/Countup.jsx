import React from "react";
import lawyerImg from "../assets/success-doctor.png";
import reviewImg from "../assets/success-review.png";
import clientImg from "../assets/success-patients.png";
import saffImg from "../assets/success-staffs.png";
import CountUp from "react-countup";

const Coutnup = () => {
  return (
    <div>
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold mb-5">
          We Provide Best Law Services
        </h1>
        <p className="opacity-70 text-lg">
          Our platform offer top quality leagal servicies with professionalism,
          dedication and client-focoused solutions to ensure justice.
        </p>
      </div>
      {/* container div  */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 justify-items-center mt-10">
        <div className="bg-[#0F0F0F10] p-5 rounded-2xl w-3/4">
          <div>
            <img src={lawyerImg} alt="" />
          </div>
          <div className="font-extrabold text-2xl">
            <CountUp end={199} duration={10}></CountUp> +
          </div>
          <div>
            <h1 className="opacity-60">Total Lawyer</h1>
          </div>
        </div>
        {/* cart 2  */}
        <div className="bg-[#0F0F0F10] p-5 rounded-2xl w-3/4">
          <div>
            <img src={reviewImg} alt="" />
          </div>
          <div className="font-extrabold text-2xl">
            <CountUp end={467} duration={10}></CountUp> +
          </div>
          <div>
            <h1 className="opacity-60">Total Reviews</h1>
          </div>
        </div>

        {/* cart 3    */}
        <div className="bg-[#0F0F0F10] p-5 rounded-2xl w-3/4">
          <div>
            <img src={clientImg} alt="" />
          </div>
          <div className="font-extrabold text-2xl">
            <CountUp end={1900} duration={10}></CountUp> +
          </div>
          <div>
            <h1 className="opacity-60">Cases Initiated</h1>
          </div>
        </div>
        {/* cart 4  */}
        <div className="bg-[#0F0F0F10] p-5 rounded-2xl w-3/4">
          <div>
            <img src={saffImg} alt="" />
          </div>
          <div className="font-extrabold text-2xl">
            <CountUp end={300} duration={10}></CountUp> +
          </div>
          <div>
            <h1 className="opacity-60">Total Stuffs</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coutnup;
