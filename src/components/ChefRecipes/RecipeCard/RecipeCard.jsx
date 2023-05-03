import React from "react";
import { FaHeart } from "react-icons/fa";

const RecipeCard = ({ recipe }) => {
  const { id, recipeImage, recipeName, ingredients, cookingMethod, rating } =
    recipe;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={recipeImage} alt={recipeName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {recipeName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="font-bold">Ingredients:</p>
        <ul className="grid grid-cols-2 list-disc">
          {ingredients.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </ul>
        <p>
          <span className="font-bold">Cooking method: </span>
          {cookingMethod}
        </p>
        <div className="card-actions justify-start">
          <span>Rating coming soon...</span>
          <span className="flex items-center">
            <FaHeart /> Add to favorites
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
