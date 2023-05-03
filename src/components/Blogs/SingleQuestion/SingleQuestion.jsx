import React from "react";

const SingleQuestion = (props) => {
  const singleQues = props.singleQues;
  return (
    <div className="card bg-base-100 shadow-xl mb-5">
      <figure className="h-[60%] border-2 border-[#1d4ed8]">
        <img className="w-full h-full" src={singleQues.img} alt="Album" />
      </figure>
      <div className="card-body p-5">
        <div>
          <div className="mb-2 text-xl md:text-2xl font-medium">
            {singleQues.question}
          </div>
          <div className="">
            <p>{singleQues.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleQuestion;
