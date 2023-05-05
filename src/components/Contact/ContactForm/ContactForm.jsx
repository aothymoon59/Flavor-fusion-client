import React, { useRef } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import toast from "react-hot-toast";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8lznrlj",
        "template_8spfqz8",
        form.current,
        "W5Pw7Q1ZLOHg6b6H5"
      )
      .then(
        (result) => {
          toast.success("Message send successfully");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };
  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div className="name-email grid grid-cols-2 gap-5">
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your name"
              name="user_name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Enter your email address"
              name="user_email"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter subject of your message"
            name="subject"
          />
        </div>
        <div className="mb-6">
          <textarea
            className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
            placeholder="Enter your message"
            name="message"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="my-btn w-fit flex gap-2 items-center hover:bg-transparent hover:text-[#FACC15] transition-colors duration-200 ease-in-out"
          >
            SEND MESSAGE <FaArrowCircleRight />
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
