import React, { useEffect, useState } from "react";
import LawyerCard from "./LawyerCard";

const LawyerContainer = ({ data }) => {
  const [displayLawyer, setDisplayLawyer] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    if (showAll) {
      setDisplayLawyer(data);
    } else {
      setDisplayLawyer(data.slice(0, 6));
    }
  }, [data, showAll]);
  return (
    <div className="mt-20">
      <h1 className="text-5xl text-center font-extrabold mb-5">
        Our Best Lawyers
      </h1>
      <p className="text-center opacity-90 text-lg">
        Our best lawyer are experienced, reliable and commited to delivering
        exceptional legal solutions, ensuring you receive the heighest standard
        of support in every case.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        {displayLawyer.map((lawyer) => (
          <LawyerCard key={lawyer.id} lawyer={lawyer}></LawyerCard>
        ))}
      </div>
      <button
        onClick={() => {
          setShowAll((prv) => !prv);
          if (showAll) {
            window.scrollTo(0, 700);
          }
        }}
        className="btn hover:bg-[#0EA106] hover:text-white mt-5 rounded-full border-2 font-bold border-[#0EA10620] text-[#0EA106]"
      >
        {showAll ? "Show less Lawyer" : "Show All Lawyer"}
      </button>
    </div>
  );
};

export default LawyerContainer;
