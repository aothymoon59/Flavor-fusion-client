import React, { useState } from "react";
import { FaClock, FaHeart } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import toast from "react-hot-toast";

const RecipeCard = ({ recipe }) => {
  const {
    id,
    recipeImage,
    recipeName,
    ingredients,
    cookingTime,
    cookingMethod,
    rating,
  } = recipe;
  const [btnDisable, setBtnDisable] = useState(false);
  const handleFavorite = () => {
    setBtnDisable(true);
    toast("The recipe is your favorite", {
      icon: <FaHeart />,
    });
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="w-full recipe-img" src={recipeImage} alt={recipeName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{recipeName}</h2>
        <p className="font-bold text-lg">Ingredients:</p>
        <ul className="grid grid-cols-2 list-disc">
          {ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <div className="font-bold text-lg flex items-center gap-2">
          <FaClock /> <span>{cookingTime} min</span>
        </div>
        <p>
          <span className="font-bold text-lg">Cooking method: </span>
          {cookingMethod}
        </p>
        <div className="card-actions justify-between items-center mt-3">
          <div className="flex items-center gap-2">
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />{" "}
            <span>{rating} / 5</span>
          </div>
          <button
            onClick={handleFavorite}
            disabled={btnDisable}
            className={`flex items-center gap-2 cursor-pointer ${
              btnDisable ? "text-gray-400" : "text-red-600"
            }`}
          >
            <FaHeart /> Add to favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
