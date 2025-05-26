import React from 'react'
import { useState, useEffect } from 'react';

const RecipeVideo = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() =>{
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
            .then(response => response.json())
            .then(data => {
                setVideos(data.meals); // Update state with fetched recipes
            });
    },[])
  return (
    <section className="recipeVideo mt-5 mb-5 pb-5">
        <h2 className="mb-4">Featured Recipes</h2>
        <div className='row'>
            {videos.map((video) => (
                <div key={video.idMeal} className="recipe">
                    <div className='recipeVideo_text' style={{position:"relative", display:"flex",justifyContent:"center",alignItems:"center",width:"100%",backgroundImage:`url(${video.strMealThumb})`}}>
                    <h1 style={{position:"absolute",fontWeight:"bold"}}>{video.strMeal}</h1>
                        {/* <img src={video.strMealThumb} className="card-img-top" alt={video.strMeal} style={{minHeight:"100%", width:"100%"}} /> */}
                        <div className='mt-3' style={{position:"absolute", top:"50%"}}>
                            {/* <p>{video.strMeal}</p> */}
                            <a className='btn' href={video.strYoutube} target="_blank" rel="noopener noreferrer" style={{marginTop:"20px"}}>
                                Watch Video
                            </a>
                        </div>
                    </div>
                    {/* <a className='btn' href={video.strYoutube} target="_blank" rel="noopener noreferrer">
                            Watch Video
                    </a> */}
                </div>
            ))}
        </div>
            
    </section>
  )
}

export default RecipeVideo;