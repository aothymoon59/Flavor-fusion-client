import React from "react";
import {
  FaArrowCircleRight,
  FaLocationArrow,
  FaPhoneAlt,
  FaMobileAlt,
  FaTelegramPlane,
} from "react-icons/fa";
import Leaflet from "./Leaflet/Leaflet";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="container mx-auto px-3 sm:px-5">
      <div
        style={{
          backgroundImage: `url(https://i.ibb.co/279ZRRB/about-banner.jpg)`,
        }}
        className="h-[50vh] flex justify-center items-center bg-[#000000] bg-opacity-[0.5] bg-blend-multiply bg-cover bg-center"
      >
        <h2 className="font-extrabold text-[32px] text-[#FACC15]">Contact</h2>
      </div>
      <div className="py-16 sm:py-24">
        <div className="text-left border-l-4 border-[#1d4ed8] pl-3">
          <h2 className="font-bold text-2xl sm:text-4xl">Reach Out to Us</h2>
          <p className="font-medium text-lg mt-2 text-[#1d4ed8]">
            Let's Connect
          </p>
        </div>
      </div>
      <div className="contact-body grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 pb-16 sm:pb-24">
        <div className="contact-left">
          <div className="mb-12">
            <h2 className="text-3xl font-medium mb-5 pb-3 border-b-2 border-[#1d4ed8]">
              Our Address
            </h2>
            <p className="text-lg my-3">
              Discover delicious recipes from around the world, right in your
              own kitchen. Explore our diverse collection today.
            </p>
            <div className="text-lg my-5 font-medium">
              <p className="flex items-center gap-2 mb-2">
                <FaLocationArrow className="text-[#1d4ed8]" /> 29 Street, New
                Delhi, India # 34 Road, House #10
              </p>
              <p className="flex items-center gap-2 cursor-pointer mb-2">
                <FaMobileAlt className="text-[#1d4ed8]" /> +123-5889-000
              </p>
              <p className="flex items-center gap-2 cursor-pointer mb-2">
                <FaPhoneAlt className="text-[#1d4ed8]" /> +987-5889-000
              </p>
              <p className="flex items-center gap-2 cursor-pointer mb-2">
                <FaTelegramPlane className="text-[#1d4ed8]" />
                flavor@fusion.com
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-medium mb-8 pb-3 border-b-2 border-[#1d4ed8]">
              Send Us Message
            </h2>
            <div>
              <ContactForm></ContactForm>
            </div>
          </div>
        </div>
        <div className="contact-right mb-5">
          <Leaflet />
        </div>
      </div>
    </div>
  );
};

export default Contact;
