import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
    const {id} = useParams();
    const [recipe,setRecipe] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        fetch(`https://dummyjson.com/recipes/${id}`)
        .then(response => response.json())
        .then(data => {
            setRecipe(data); // Update state with fetched recipes
            setLoading(false);
        });
        // for errors
        
    },[id]);
  return (
    <section>
        {loading ? (
            <p>Loading recipe details...</p>
        ) : <h2>recipe</h2> ? (
            <div className="recipeDetail_page d-md-flex d-block flex-row">
                <div className="Image">
                    <img src={recipe.image} className="card-img-top" alt={recipe.name} style={{minHeight:"100%", width:"100%"}} />
                </div>
                <div className="Detail" style={{width:"70%", padding:"80px 75px"}}>
                    <h2 style={{textAlign:"left"}} className='mb-5'>{recipe.name}</h2>
                    <p><strong style={{textAlign:"left"}}>Ingredients:</strong></p>
                    <p>
                        <ul>
                            {recipe.ingredients?.length > 0 ? (
                                recipe.ingredients.map((ingredient, index) => <li style={{textAlign:"left"}} key={index}>{ingredient}</li>)
                                ) : (
                                    <li>Not available</li>
                                )}
                            {/* <li>{recipe.ingredients ? recipe.ingredients.join(', ') : "Not available"}</li> */}
                        </ul>
                    </p>
                    <p><strong style={{textAlign:"left"}}>Instructions:</strong></p> 
                    <p>
                        <ul>
                        {recipe.instructions?.length > 0 ? (
                                recipe.instructions.map((instruction, index) => <li style={{textAlign:"left"}} key={index}>{instruction}</li>)
                                ) : (
                                    <li>Instructions not available</li>
                                )}
                        
                             {/* {recipe.instructions || "Instructions not available"} */}
                        </ul>
                    </p>
                    <p><strong>prepTimeMinutes:</strong> {recipe.prepTimeMinutes}</p>
                    <p><strong>cuisine:</strong> {recipe.cuisine}</p>
                    <p><strong>tags:</strong> {recipe.tags ? recipe.tags.join(', '): 'Not available'}</p>
                </div>
            </div>
        ) : (
            <p>Recipe not found.</p>
        )}
    </section>
  )
}

export default RecipeDetails;