import React from 'react'

const AboutUs = () => {
    const WebsiteTitle = "The Flavor Hub";
  return (
    <section id='aboutUs'>
        <div className='container'>
            <h2 className='mt-5'><strong>About Us 🍽️</strong></h2>
            <p className='mt-5'>Welcome to <strong>{WebsiteTitle}</strong>, your ultimate destination for delicious and easy-to-make recipes! Our goal is to bring you a diverse collection of recipes from around the world, making cooking an enjoyable experience for everyone.</p>
            <div className='mt-5'>
                <h6><strong>🍲 What We Offer</strong></h6>
                <ul>
                    <li>Handpicked recipes with step-by-step instructions</li>
                    <li>Cooking tips and tricks for beginners and experts</li>
                    <li>A collection of healthy, quick, and traditional meals</li>
                    <li> Video tutorials for a more interactive cooking experience</li>
                </ul>
            </div>
            <div className='mt-5'>
                <h6><strong>👩‍🍳 Our Mission</strong></h6>
                <p>We believe that <strong>cooking should be fun, accessible, and rewarding</strong>. Whether you’re a beginner or an experienced chef, we provide recipes that suit all skill levels and preferences.</p>
            </div> 
            <div className='mt-5'>
                <h6><strong>🌍 Explore, Cook & Share!</strong></h6>
                <p>Join our community, try new recipes, and share your cooking experiences with us. Let’s make every meal special!</p>
            </div>
        </div>
    </section>
  )
}

export default AboutUs;