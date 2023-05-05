import React, { useEffect, useState } from "react";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

const FeaturedRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          "https://b7a10-chef-recipe-hunter-client-side-aothymoon59-aothymoon59.vercel.app/recipes"
        );
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipes();
  }, []);

  useEffect(() => {
    setNewRecipe(recipes.slice(0, 6));
  }, [recipes]);

  const handleSeeAll = () => {
    setNewRecipe(recipes);
  };
  const handleSeeLess = () => {
    setNewRecipe(recipes.slice(0, 6));
  };

  return (
    <div className="pt-16 sm:pt-24">
      <div className="text-left border-l-4 border-[#1d4ed8] pl-3 mb-16">
        <h2 className="font-bold text-3xl sm:text-4xl">Featured Recipes</h2>
        <p className="font-medium text-lg mt-2 text-[#1d4ed8]">
          Signature Dishes
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {newRecipe.map((recipe) => (
          <FeaturedCard key={recipe.id} recipe={recipe}></FeaturedCard>
        ))}
      </div>
      <div className={`${newRecipe.length > 6 ? "hidden" : ""} text-center`}>
        <button
          onClick={handleSeeAll}
          className="mt-10 my-btn flex gap-2 items-center mx-auto text-xl"
        >
          See All Recipes <FaAngleDoubleDown />
        </button>
      </div>
      <div className={`${newRecipe.length > 6 ? "" : "hidden"} text-center`}>
        <button
          onClick={handleSeeLess}
          className="mt-10 my-btn flex gap-2 items-center mx-auto text-xl"
        >
          See Less <FaAngleDoubleUp />
        </button>
      </div>
    </div>
  );
};

export default FeaturedRecipes;
