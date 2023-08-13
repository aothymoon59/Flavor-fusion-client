import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaArrowCircleLeft, FaClock } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const FeatureCardDetails = () => {
  const { id } = useParams();
  const recipes = useLoaderData();
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    const singleRecipe = recipes.find(
      (singleRecipe) => parseInt(singleRecipe.id) === parseInt(id)
    );
    setRecipe(singleRecipe);
  }, []);

  return (
    <div className="container mx-auto px-3 sm:px-5">
      <div
        style={{
          backgroundImage: `url(https://i.ibb.co/279ZRRB/about-banner.jpg)`,
        }}
        className="h-[50vh] flex justify-center items-center bg-[#000000] bg-opacity-[0.5] bg-blend-multiply bg-cover bg-center"
      >
        <h2 className="font-extrabold text-[32px] text-[#FACC15]">
          {recipe?.recipeName}
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-base-100 shadow-xl my-16 sm:my-24 lg:rounded-l-xl">
        <div className="lg:h-full">
          <img
            src={recipe?.recipeImage}
            className="lg:rounded-l-xl h-full w-full"
            alt="Album"
          />
        </div>
        <div className=" p-5 lg:p-10 space-y-4">
          <h2 className=" font-bold text-2xl">{recipe?.recipeName}</h2>
          <p className="font-bold text-lg">Ingredients:</p>
          <ul className="grid grid-cols-2 list-disc ml-4">
            {recipe?.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <div className="font-bold text-lg flex items-center gap-2">
            <FaClock /> <span>{recipe?.cookingTime} min</span>
          </div>
          <p>
            <span className="font-bold text-lg">Cooking method: </span>
            {recipe?.cookingMethod}
          </p>
          <div className="flex items-center gap-2">
            <Rating style={{ maxWidth: 100 }} value={recipe?.rating} readOnly />{" "}
            <span>{recipe?.rating} / 5</span>
          </div>
          <div className="card-actions justify-end">
            <Link
              to="/"
              className="my-btn flex gap-2 items-center mx-2 hover:bg-transparent transition-colors duration-200 ease-in-out"
            >
              <FaArrowCircleLeft /> Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCardDetails;
