import React from "react";
import { useLoaderData } from "react-router";
import BlogsData from "../Components/BlogsData";

const Blogs = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="text-center py-16 space-y-7">
        <h1 className="text-5xl font-extrabold">Blogs</h1>
        <p className="opacity-90">
          Let's explore some basic concept will make you a good developer.
        </p>
      </div>
      <div className="space-y-7">
        {data.map((ques) => (
          <BlogsData key={ques.id} ques={ques}></BlogsData>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
