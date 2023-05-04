import React, { useEffect, useState } from "react";
import SingleQuestion from "../SingleQuestion/SingleQuestion";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const options = {
  orientation: "portrait",
  unit: "in",
  format: [10, 10],
};

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
          backgroundImage: `url(https://i.ibb.co/279ZRRB/about-banner.jpg)`,
        }}
        className="h-[50vh] flex justify-center items-center bg-[#000000] bg-opacity-[0.5] bg-blend-multiply bg-cover bg-center"
      >
        <h2 className="font-extrabold text-[32px] text-[#FACC15]">Blogs</h2>
      </div>

      <div className="py-16 sm:py-24">
        <div className="text-left border-l-4 border-[#1d4ed8] pl-3 mb-16">
          <h2 className="font-bold text-2xl sm:text-4xl">
            Fun and Interesting Reads
          </h2>
          <p className="font-medium text-lg mt-2 text-[#1d4ed8]">
            Curious Insights
          </p>
        </div>
        <div>
          <Pdf
            targetRef={ref}
            filename="blog.pdf"
            options={options}
            x={1}
            y={1}
            scale={0.5}
          >
            {({ toPdf }) => (
              <div className="text-right">
                <button
                  className="my-btn hover:bg-transparent transition-colors duration-200 ease-in-out"
                  onClick={toPdf}
                >
                  Download PDF
                </button>
              </div>
            )}
          </Pdf>
        </div>

        <div ref={ref} className="grid mt-5 sm:grid-cols-2 gap-5">
          {questions.map((singleQues, index) => (
            <SingleQuestion
              key={index}
              singleQues={singleQues}
            ></SingleQuestion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
