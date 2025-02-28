import React from 'react'

const HeroSection = () => {
  return (
    <div className='Hero_Section'>
        <div className="container-fluid bg-dark text-white py-5">
            <div className="row align-items-center text-center">
                <div className="col-md-6 mx-auto">
                    <h1 className="display-4 fw-bold">Discover Delicious Recipes</h1>
                    <p className="lead">Find and share everyday cooking inspiration.</p>
                    <div className="input-group my-4">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Search for recipes..."
                        />
                        <button className="btn">Search</button>
                    </div>
                    <a href="#recipes" className="btn btn-lg">
                    Explore Recipes
                    </a>
                </div>
             </div>
        </div>
  </div>
  )
}

export default HeroSection;