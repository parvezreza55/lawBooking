import React from "react";
import "./Css/hero.css";

const Hero = () => {
  return (
    <>
      <div className=" pb-32 hero-background  text-white rounded-2xl">
        <div className="py-10 md:py-30 flex flex-col justify-center items-center text-center gap-4">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold w-10/12 mx-auto">
            It avoids subjective claims or exaggeration that might raise red
            flags legally
          </h1>
          <p className="opacity-80 w-10/12 mx-auto">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
