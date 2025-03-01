import React from 'react';
import breakfast from '../assets/breakfast.jpg';
import lunch from '../assets/lunch.jpg';
import dinner from '../assets/dinner.jpg';
import dessert from '../assets/dessert.jpg';

function Categories() {
    const categories = [
        {id:1, type:"Breakfast", image: breakfast},
        {id:2, type:"Lunch", image: lunch},
        {id:3, type:"Dinner", image: dinner},
        {id:4, type:"Desserts", image: dessert},
    ];
  return (
    <section id='category'>
        <h2 className='mt-5 mb-4'>Categories</h2>
        <div className='row'>
            {categories.map((category) => (
                <div key={category.id} className='col-md-3 col-sm-12'>
                    <div className="card">
                        <img src={category.image} className="card-img-top" alt={category.type} />
                    </div>
                    <div className="card-body pt-1">
                        <h5 className="card-title">{category.type}</h5>
                        <a href="{#recipes}" className="btn mt-3">View Recipe</a>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Categories;