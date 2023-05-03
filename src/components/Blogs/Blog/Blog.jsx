import React, { useEffect, useState } from "react";
import SingleQuestion from "../SingleQuestion/SingleQuestion";

const Blog = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);
  return (
    <div className="container mx-auto px-3 sm:px-5">
      <div
        style={{
          backgroundImage: `url(https://i.ibb.co/r0fzxqV/blog-banner.jpg)`,
        }}
        className="h-[70vh] flex justify-center items-center bg-[#000000] bg-opacity-[0.5] bg-blend-multiply bg-cover bg-center"
      >
        <h2 className="font-extrabold text-[32px] text-[#1A1919]">Blogs</h2>
      </div>

      <div className="py-16 sm:py-24">
        {questions.map((singleQues, index) => (
          <SingleQuestion key={index} singleQues={singleQues}></SingleQuestion>
        ))}
      </div>
    </div>
  );
};
// https://i.ibb.co/r0fzxqV/blog-banner.jpg

export default Blog;
