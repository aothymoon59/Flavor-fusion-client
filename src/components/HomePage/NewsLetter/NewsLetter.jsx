import React from "react";
import { FaRegPaperPlane } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div
      className="py-12 sm:py-20 my-16 sm:my-24 bg-[#000000] bg-opacity-[0.6] bg-blend-multiply bg-cover bg-center rounded-lg"
      style={{
        backgroundImage: `url(https://i.ibb.co/hFTpZm5/sign-Up-bg.jpg)`,
      }}
    >
      <div className="text-center mb-10 sm:mb-16">
        <h2 className="font-bold text-white text-3xl sm:text-4xl">
          Subscribe to Our Newsletter
        </h2>
        <p className="font-medium text-lg mx-2 mt-2 text-[#FACC15]">
          Get access to our latest recipes by joining the weekly news letter
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 justify-center items-center">
        <input
          type="email"
          placeholder="Enter your email address"
          className="input input-bordered mx-2 w-full max-w-xs"
        />
        <button
          type="submit"
          className="my-btn flex gap-2 items-center mx-2 hover:bg-transparent hover:text-[#FACC15] transition-colors duration-200 ease-in-out"
        >
          Submit <FaRegPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
