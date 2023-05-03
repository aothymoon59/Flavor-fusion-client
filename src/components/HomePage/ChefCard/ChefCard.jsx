import React from "react";
import { FaCheckCircle, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Chefcard.css";
import LazyLoad from "react-lazy-load";

const ChefCard = ({ chef }) => {
  const {
    id,
    chefPicture,
    chefName,
    likes,
    numberOfRecipes,
    yearsOfExperience,
  } = chef;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="h-[60%]">
        <LazyLoad height={`100%`} offset={300}>
          <img
            className="chef-img w-full h-full"
            src={chef.chefPicture}
            alt={chefName}
          />
        </LazyLoad>
      </figure>
      <div className="card-body px-3 pb-3 md:px-5">
        <h2 className="card-title mb-3">
          {chefName}
          <div className="text-[#1d4ed8]">
            <FaCheckCircle />
          </div>
        </h2>
        <div className="card-actions justify-start">
          <div className="badge badge-outline font-medium p-3">
            Experience: {yearsOfExperience} years
          </div>
          <div className="badge badge-outline font-medium p-3">
            {numberOfRecipes} Recipes
          </div>
        </div>
        <p className="flex items-center gap-1 my-2">
          <FaHeart className="text-[#1d4ed8]" /> {likes} likes
        </p>
      </div>

      <Link
        to={`/chef-recipe/${id}`}
        className="my-btn hover:bg-transparent w-fit transition-colors duration-200 ease-in-out mb-5 mx-3 md:mx-5"
      >
        View Recipes
      </Link>
    </div>
  );
};

export default ChefCard;
