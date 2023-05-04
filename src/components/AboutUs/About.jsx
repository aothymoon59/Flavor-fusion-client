import React from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="container mx-auto px-3 sm:px-5">
      <div
        style={{
          backgroundImage: `url(https://i.ibb.co/279ZRRB/about-banner.jpg)`,
        }}
        className="h-[50vh] flex justify-center items-center bg-[#000000] bg-opacity-[0.5] bg-blend-multiply bg-cover bg-center"
      >
        <h2 className="font-extrabold text-[32px] text-[#FACC15]">About</h2>
      </div>
      <div className="py-16 sm:py-24">
        <div className="text-right border-r-4 border-[#1d4ed8] pr-3 mb-16">
          <h2 className="font-bold text-2xl sm:text-4xl">Foodies at Heart</h2>
          <p className="font-medium text-lg mt-2 text-[#1d4ed8]">
            From Our Kitchen to Yours
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <figure>
            <img
              src="https://i.ibb.co/4M7XLR2/about-me.jpg"
              alt="About Us Page"
              className="w-full rounded-lg"
            />
          </figure>
          <div>
            <h2 className="text-3xl md:text-[42px] mb-7 leading-10">
              A Cook for 25 Years, a Hobbies for 30
            </h2>
            <div className="text-lg">
              <p className="mb-5">
                As a seasoned cook for 25 years and a passionate hobbyist for
                over 30, our website's chef brings a wealth of knowledge and
                experience to the table. With a passion for food that spans
                decades, our chef has honed their skills and developed a deep
                understanding of the art and science of cooking. From the
                simplest home-cooked meals to complex, multi-course gourmet
                experiences, our chef's expertise and creativity shine through
                in every dish.
              </p>
              <p>
                Whether you are a novice cook or an experienced foodie, our
                chef's recipes and cooking tips are sure to inspire you to take
                your culinary skills to the next level. Join us on a delicious
                journey through the world of food, and discover the joys of
                cooking with our seasoned chef.
              </p>
              <img
                src="https://i.ibb.co/vkJX0GK/signature.png"
                alt="signature"
                className="my-5"
              />
              <Link
                to="/contact"
                className="my-btn w-fit flex gap-2 items-center hover:bg-transparent hover:text-[#FACC15] transition-colors duration-200 ease-in-out"
              >
                Contact Us <FaArrowCircleRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
