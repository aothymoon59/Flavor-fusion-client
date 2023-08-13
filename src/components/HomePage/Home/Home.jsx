import React from "react";
import HomeBanner from "../Banner/HomeBanner";
import Chefs from "../Chefs/Chefs";
import Categories from "../BrowseCategories/Categories/Categories";
import FeaturedRecipes from "../FeaturedSection/Featured Recipes/FeaturedRecipes";
import NewsLetter from "../NewsLetter/NewsLetter";
import LatestRecipes from "../LatestRecipes/LatestRecipes";

const Home = () => {
  return (
    <div className="container mx-auto px-3 sm:px-5">
      <HomeBanner />
      <Chefs />
      <Categories />
      <LatestRecipes />
      <FeaturedRecipes />
      <NewsLetter />
    </div>
  );
};

export default Home;
