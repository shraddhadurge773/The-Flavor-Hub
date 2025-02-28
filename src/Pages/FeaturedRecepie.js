import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FeaturedRecepie = () => {
    const [featuredRecipes, setFeaturedRecipes] = useState([]);

    useEffect(() =>{
        // Fetch data from dummy API
        fetch('https://dummyjson.com/recipes')
            .then(response => response.json())
            .then(data => {
                setFeaturedRecipes(data.recipes); // Update state with fetched recipes
            });
    },[]);
  return (
    <section className=" featureSection mt-5 mb-5 pb-5">
        <div className='container'>
            <h2 className="mb-4">Featured Recipes</h2>
            <div className='row'>
                {featuredRecipes.map((recipe) => (
                    <div key={recipe.id} className='col-md-4 col-sm-12 mt-5'>
                        <div className="card">
                            <img src={recipe.image} className="card-img-top" alt={recipe.name} />
                            <div className="card-body pt-1">
                                <h5 className="card-title">{recipe.name}</h5>
                                <Link to={`/recipe/${recipe.id}`} className='btn mt-3'>View Recipe</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default FeaturedRecepie;