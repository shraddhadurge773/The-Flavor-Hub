import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import HeroSection from './Pages/HeroSection';
import Categories from './Pages/Categories';
import FeaturedRecepie from './Pages/FeaturedRecepie';
import RecipeDetails from './Pages/RecipeDetails';
import Recipes from './Pages/Recipes';
import RecipeVideo from './Pages/RecipeVideo';
import AboutUs from './Pages/AboutUs';

const AppRoutes = () => {
  return (
    <div id='pagewrapper'>
      <Router>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/notfound' element={<NotFound/>}/>
              <Route path='/herosection' element={<HeroSection/>}/>
              <Route path='/categories' element={<Categories/>}/>
              <Route path='/featuredrecepie' element={<FeaturedRecepie/>}/>
              <Route path='/recipe/:id' element={<RecipeDetails/>}/>
              <Route path='/recipes' element={<Recipes/>}/>
              <Route path='/recipevideo' element={<RecipeVideo/>}/>
              <Route path='/aboutus' element={<AboutUs/>}/>
          </Routes>
          <Footer/>
      </Router>
    </div>
  )
}

export default AppRoutes;