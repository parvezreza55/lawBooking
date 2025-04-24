import React from "react";
import Hero from "../Components/Hero";
import LawyerContainer from "../Components/LawyerContainer";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  return (
    <>
      <Hero></Hero>
      <LawyerContainer data={data}></LawyerContainer>
    </>
  );
};

export default Home;
