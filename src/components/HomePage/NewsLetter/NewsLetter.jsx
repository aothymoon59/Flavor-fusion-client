import React, { useRef } from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import toast from "react-hot-toast";

const NewsLetter = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8lznrlj",
        "template_bj9cqq9",
        form.current,
        "W5Pw7Q1ZLOHg6b6H5"
      )
      .then(
        (result) => {
          toast.success("Subscribe successfully");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };
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
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col sm:flex-row gap-3 sm:gap-0 justify-center items-center"
      >
        <input
          type="email"
          name="user_email"
          placeholder="Enter your email address"
          className="input input-bordered mx-2 w-full max-w-xs"
          required
        />
        <button
          type="submit"
          className="my-btn flex gap-2 items-center mx-2 hover:bg-transparent hover:text-[#FACC15] transition-colors duration-200 ease-in-out"
        >
          Submit <FaRegPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
