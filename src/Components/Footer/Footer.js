import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <footer className="text-center py-3 fixed-bottom">
      <div className="container">
        <p>© {new Date().getFullYear()} JobBoard. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer