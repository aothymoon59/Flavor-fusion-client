import React, { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/categories.json");
        const data = await response.json();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="pt-16 sm:pt-24">
      <div className="text-right border-r-4 border-[#1d4ed8] pr-3 mb-16">
        <h2 className="font-bold text-3xl sm:text-4xl">Browse Categories</h2>
        <p className="font-medium text-lg mt-2 text-[#1d4ed8]">
          Meal Inspirations
        </p>
      </div>
      {loading ? (
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => {
            return (
              <div
                key={category.id}
                className="bg-[#FACC15] bg-opacity-[0.5] hover:bg-opacity-[1] p-5 text-center rounded-2xl transition-colors duration-500 ease-in-out shadow-xl cursor-pointer"
              >
                <figure className="flex justify-center mb-3">
                  <img src={category?.category_icon} alt="" />
                </figure>
                <div>
                  <h2 className="mb-3 font-semibold text-lg">
                    {category?.category_name}
                  </h2>
                  <div className="badge badge-outline font-medium p-3">
                    {category?.num_recipes} Recipes
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Categories;
