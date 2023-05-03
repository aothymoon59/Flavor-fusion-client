import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="container mx-auto px-5 h-[100vh] flex items-center">
      <div className="max-w-md mx-auto text-center">
        <div className="flex flex-col items-center">
          <img
            className="w-[250px] sm:w-[450px]"
            src="https://i.ibb.co/F8D4nMw/page404.png"
            alt=""
          />
        </div>
        <p className="text-2xl text-red-600 font-semibold md:text-3xl mb-8">
          {status || 404} {error?.message}
        </p>
        <p>
          The page you are looking is not available or has been removed. Try
          going to Home Page by using the button below.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="my-btn px-3 sm:px-7 py-2 sm:py-5 text-sm sm:text-xl"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
