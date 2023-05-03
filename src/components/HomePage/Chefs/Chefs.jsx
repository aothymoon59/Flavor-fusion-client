import React, { useEffect, useState } from "react";
import ChefCard from "../ChefCard/ChefCard";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch(
      "https://b7a10-chef-recipe-hunter-client-side-aothymoon59-aothymoon59.vercel.app/chefs"
    )
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  console.log(chefs);
  return (
    <div className="pt-16 sm:pt-24">
      <div className="text-left border-l-4 border-[#1d4ed8] pl-3 mb-16">
        <h2 className="font-bold text-3xl sm:text-4xl">Our Kitchen Heros</h2>
        <p className="font-medium text-lg mt-2 text-[#1d4ed8]">Chefs</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {chefs.map((chef) => (
          <ChefCard chef={chef} key={chef.id}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
