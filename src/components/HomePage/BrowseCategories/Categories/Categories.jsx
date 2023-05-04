import React, { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="pt-16 sm:pt-24">
      <div className="text-right border-r-4 border-[#1d4ed8] pr-3 mb-16">
        <h2 className="font-bold text-3xl sm:text-4xl">Browse Categories</h2>
        <p className="font-medium text-lg mt-2 text-[#1d4ed8]">
          All Categories Here
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category) => {
          return (
            <div className="bg-[#FACC15] bg-opacity-[0.5] hover:bg-opacity-[1] p-5 text-center rounded-2xl transition-colors duration-500 ease-in-out shadow-xl">
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
    </div>
  );
};

export default Categories;
