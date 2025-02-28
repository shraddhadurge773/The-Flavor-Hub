import React from 'react'
import './navbar.css';
import logo from "../../assets/logo.jpg";
// import logo1 from "../../assets/logo1.png";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faHome, faBook} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
        <img src={logo} alt="Logo" height="40" className="me-1" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
              <FontAwesomeIcon icon={faHome} className="me-1" /> 
              Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/FeaturedRecepie">
              <FontAwesomeIcon icon={faBook} className="me-1" /> 
              Recipe
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AboutUs">
              <FontAwesomeIcon icon={faUser} className="me-2" /> 
              About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;