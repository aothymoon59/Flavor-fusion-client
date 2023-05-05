import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";
import { FaCheckCircle, FaHeart } from "react-icons/fa";

const ChefRecepies = () => {
  const [chef, setChef] = useState([]);
  const chefRecipe = useLoaderData();

  useEffect(() => {
    const fetchChef = async () => {
      try {
        const chef_id = chefRecipe[0]?.chef_id;
        const response = await fetch(
          `https://b7a10-chef-recipe-hunter-client-side-aothymoon59-aothymoon59.vercel.app/chefs/${chef_id}`
        );
        const data = await response.json();
        setChef(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchChef();
  }, [chefRecipe]);

  const {
    chefPicture,
    chefName,
    bio,
    likes,
    numberOfRecipes,
    yearsOfExperience,
  } = chef;

  return (
    <div className="container mx-auto px-5">
      <div
        className=" min-h-[calc(100vh-88px)] bg-[#000000] bg-opacity-[0.4] bg-blend-multiply bg-cover bg-center flex flex-col-reverse lg:flex-row justify-center gap-10 md:gap-5 items-center px-3"
        style={{
          backgroundImage: `url(https://i.ibb.co/fvgtJGX/recipe-banner-1.jpg)`,
        }}
      >
        <div className="banner-text lg:w-[50%] mb-5 lg:mb-0 leading-5 bg-white bg-opacity-[0.5] lg:bg-opacity-[0.7] rounded-2xl shadow-2xl p-10">
          <small className="text-[#1d4ed8] font-bold text-sm">
            Hi! This is
          </small>
          <h2 className="card-title mb-3 text-2xl sm:text-3xl lg:text-5xl">
            {chefName}
            <div className="text-[#1d4ed8]">
              <FaCheckCircle className="text-xl sm:text-2xl md:text-4xl" />
            </div>
          </h2>
          <p className="text-lg font-medium">{bio}</p>
          <div className="card-actions my-3">
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
        <div className="banner-img lg:w-[50%] mt-5 lg:mt-0 flex justify-center items-center">
          <img
            className="w-[250px] h-[250px] sm:h-[450px] sm:w-[450px] border-2 border-[#FACC15] rounded-[50%] object-cover"
            src={chefPicture}
            alt=""
          />
        </div>
      </div>
      <div className="py-16 sm:py-24">
        <div className="text-left border-l-4 border-[#1d4ed8] pl-3 mb-16">
          <h2 className="font-bold text-3xl sm:text-4xl">{chefName}</h2>
          <p className="font-medium text-lg mt-2 text-[#1d4ed8]">
            Special recipes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {chefRecipe.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefRecepies;
