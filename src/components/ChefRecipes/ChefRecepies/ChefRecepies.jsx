import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";

const ChefRecepies = () => {
  const [chef, setChef] = useState([]);
  const chefRecipe = useLoaderData();

  useEffect(() => {
    const chef_id = chefRecipe[0]?.chef_id;
    fetch(
      `https://b7a10-chef-recipe-hunter-client-side-aothymoon59-aothymoon59.vercel.app/chefs/${chef_id}`
    )
      .then((res) => res.json())
      .then((data) => setChef(data));
  }, []);
  console.log(chef);

  const {
    chefPicture,
    chefName,
    bio,
    likes,
    numberOfRecipes,
    yearsOfExperience,
  } = chef;

  console.log(chefRecipe);
  return (
    <div className="container mx-auto px-5">
      <div></div>
      <h2>Chef Recipes Here: {chefRecipe.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {chefRecipe.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>
        ))}
      </div>
    </div>
  );
};

export default ChefRecepies;
