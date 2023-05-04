import React from "react";

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
        <div className="text-left border-l-4 border-[#1d4ed8] pl-3 mb-16">
          <h2 className="font-bold text-2xl sm:text-4xl">Reach Out to Us</h2>
          <p className="font-medium text-lg mt-2 text-[#1d4ed8]">
            Let's Connect
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
