import React from "react";
import { useNavigate } from "react-router";
const DynamicEorror = ({ ids }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-center py-20 space-y-3">
        <h1 className="text-4xl font-extrabold">No Lawyer found !!</h1>
        <p className="opacity-60">No lawyer found with this License No-</p>
        <p className="opacity-60">&reg; {ids}</p>
        <button
          onClick={() => navigate("/")}
          className="text-xl font-bold text-white bg-[#0EA106] px-7 py-3 rounded-lg hover:bg-[#0EA10670]"
        >
          View All Lawyer
        </button>
      </div>
    </>
  );
};

export default DynamicEorror;
