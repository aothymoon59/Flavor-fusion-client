import React, { useEffect, useState } from 'react';
import LatestRecipeCard from './LatestRecipeCard';

const LatestRecipes = () => {
    const [recipes, setRecipes] = useState([]);

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


    return (
        <div className="pt-16 sm:pt-24">
            <div className="text-left border-l-4 border-[#1d4ed8] pl-3 mb-16">
                <h2 className="font-bold text-3xl sm:text-4xl">Recent Recipes</h2>
                <p className="font-medium text-lg mt-2 text-[#1d4ed8]">
                    Latest Recipes
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    recipes.slice(0, 6).reverse().map(recipe => <LatestRecipeCard key={recipe?.id} recipe={recipe} />)
                }
            </div>
        </div>
    );
};

export default LatestRecipes;