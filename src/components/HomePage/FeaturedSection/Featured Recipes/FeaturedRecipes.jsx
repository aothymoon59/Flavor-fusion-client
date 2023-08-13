import React, { useEffect, useState } from "react";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { ThreeCircles } from "react-loader-spinner";

const FeaturedRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          "https://b7a10-chef-recipe-hunter-client-side-aothymoon59-aothymoon59.vercel.app/recipes"
        );
        const data = await response.json();
        setRecipes(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
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
      <div className="text-right border-r-4 border-[#1d4ed8] pr-3 mb-16">
        <h2 className="font-bold text-3xl sm:text-4xl">Featured Recipes</h2>
        <p className="font-medium text-lg mt-2 text-[#1d4ed8]">
          Signature Dishes
        </p>
      </div>
      {isLoading ? (
        <div className="flex items-center mt-10 justify-center h-[400px]">
          <ThreeCircles
            height="100"
            width="100"
            color="#1d4ed8"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {newRecipe.map((recipe) => (
              <FeaturedCard key={recipe.id} recipe={recipe}></FeaturedCard>
            ))}
          </div>
          <div
            className={`${newRecipe.length > 6 ? "hidden" : ""} text-center`}
          >
            <button
              onClick={handleSeeAll}
              className="mt-10 my-btn flex gap-2 items-center mx-auto text-xl"
            >
              See All Recipes <FaAngleDoubleDown />
            </button>
          </div>
          <div
            className={`${newRecipe.length > 6 ? "" : "hidden"} text-center`}
          >
            <button
              onClick={handleSeeLess}
              className="mt-10 my-btn flex gap-2 items-center mx-auto text-xl"
            >
              See Less <FaAngleDoubleUp />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FeaturedRecipes;
