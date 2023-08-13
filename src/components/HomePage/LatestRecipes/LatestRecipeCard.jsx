import React from 'react';
import { FaRegClock } from 'react-icons/fa';
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from 'react-router-dom';

const LatestRecipeCard = ({ recipe }) => {
    const { id, recipeName, recipeImage, cookingTime, cookingMethod, rating } = recipe
    return (
        <div className="card shadow-xl">
            <figure><img src={recipeImage} alt={recipeName} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {recipeName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <div className="flex items-center gap-2">
                    <Rating style={{ maxWidth: 100 }} value={rating} readOnly />{" "}
                    <span>{rating} / 5</span>
                </div>
                <p className='font-medium my-2'>
                    {cookingMethod.slice(0, 150)}...
                    <Link className="text-[#1d4ed8]" to={`/featureDetails/${id}`}>
                        see more
                    </Link>
                </p>

                <div className='font-bold text-lg flex items-center gap-2'><FaRegClock className="text-[#1d4ed8]" /> {cookingTime} mins</div>

            </div>
        </div>
    );
};

export default LatestRecipeCard;