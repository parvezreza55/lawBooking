import React from "react";

const BlogsData = ({ ques }) => {
  const { question, answer } = ques;
  return (
    <>
      <div className="bg-[#14141410] p-7 rounded-2xl space-y-3">
        <h1 className="text-xl font-bold">{question}</h1>
        <div className="border border-dashed border-[#14141450]"></div>
        <p className="text-blue-500">Answer:</p>
        <p className="opacity-80">{answer}</p>
      </div>
    </>
  );
};

export default BlogsData;
