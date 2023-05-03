import React from "react";

const SingleQuestion = (props) => {
  const singleQues = props.singleQues;
  return (
    <div className="card md:card-side bg-base-100 shadow-xl mb-5">
      <figure className="md:w-[50%] border-2 border-[#1d4ed8]">
        <img className="w-full  " src={singleQues.img} alt="Album" />
      </figure>
      <div className="card-body p-3 md:w-[50%]">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl md:text-2xl font-medium">
            {singleQues.question}
          </div>
          <div className="collapse-content">
            <p>{singleQues.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleQuestion;
