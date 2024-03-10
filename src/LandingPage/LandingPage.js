import React from "react";
import './Styles.css';
import { Link } from "react-router-dom";
import doctorpng from "../Assets/doctor.png";

const LandingPage = () => {
    return (
        <>
        <nav className="navbar">
            <Link to="/" className="brand">HospiData</Link>
            <ul className="navbar-link">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/services" className="nav-link">Services</Link></li>
                <li><Link to="/patient-login" className="getstart-btn">Get Started</Link></li>
            </ul>
        </nav>
        <div className="Home-page">
            <div className="home-items-head"><h3>We Always Provide the Best Service</h3></div>
            <div className="home-items-info"><p>We will help you to feel better and enjoy every single day of your life</p></div>
            <img className="home-items-doc" src={doctorpng} alt="Doctor"></img>
            <div className="timing-container">
                
            </div>
        </div>
        </>
    );
}
 
export default LandingPage;
