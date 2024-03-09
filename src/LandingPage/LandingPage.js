import React from "react";
import './Styles.css';
import { Link } from "react-router-dom";

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
        </>
    );
}
 
export default LandingPage;
