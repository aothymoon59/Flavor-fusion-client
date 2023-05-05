import React, { useEffect, useState } from "react";
import ChefCard from "../ChefCard/ChefCard";
import { ThreeCircles } from "react-loader-spinner";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize the loading state to true

  useEffect(() => {
    const fetchChefs = async () => {
      try {
        const response = await fetch(
          "https://b7a10-chef-recipe-hunter-client-side-aothymoon59-aothymoon59.vercel.app/chefs"
        );
        const data = await response.json();
        setChefs(data);
        setLoading(false); // Update the loading state when data is loaded
      } catch (error) {
        console.error(error);
      }
    };
    fetchChefs();
  }, []);

  if (loading) {
    // Return a loading indicator while data is loading
    return (
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
    );
  }

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
