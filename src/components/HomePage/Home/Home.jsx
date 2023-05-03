import React from "react";
import HomeBanner from "../Banner/HomeBanner";
import Chefs from "../Chefs/Chefs";

const Home = () => {
  return (
    <div className="container mx-auto px-3 sm:px-5">
      <HomeBanner></HomeBanner>
      <Chefs></Chefs>
    </div>
  );
};

export default Home;
