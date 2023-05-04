import React from "react";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import LazyLoad from "react-lazy-load";

const FeaturedCard = ({ recipe }) => {
  const { id, recipeImage, recipeName, cookingTime, cookingMethod, rating } =
    recipe;
  return (
    <div className="card w-full bg-base-100 shadow-xl image-full opacity-100">
      <figure>
        <LazyLoad height={`100%`} width={`100%`} offset={300}>
          <img src={recipeImage} alt={recipeName} />
        </LazyLoad>
      </figure>
      <div className="card-body">
        <h2 className="card-title lg:text-2xl">{recipeName}</h2>
        <p>
          {cookingMethod.slice(0, 250)}...
          <Link className="text-[#FACC15]" to="/">
            see more
          </Link>
        </p>
        <div className="font-bold text-lg flex items-center gap-2">
          <FaClock /> <span>{cookingTime} min</span>
        </div>
        <div className="card-actions justify-start">
          <div className="flex items-center gap-2">
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />{" "}
            <span>{rating} / 5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
