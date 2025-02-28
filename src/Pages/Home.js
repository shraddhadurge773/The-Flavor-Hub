import React from 'react'
import HeroSection from './HeroSection'
import Categories from './Categories'
import RecipeVideo from './RecipeVideo'

const Home = () => {
  return (
    <div>
       <HeroSection/>
      <div className="container">
        <Categories/>
        <RecipeVideo/>
      </div>
    </div>
  )
}

export default Home