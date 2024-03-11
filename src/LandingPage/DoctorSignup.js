import React, { useState } from "react";
import './Styles.css';
import { Link } from "react-router-dom";
import "./Patient-Login";

const DoctorSignup = () => {
    const [formData, setFormData] = useState({
        name: "",
        dob: "",
        mobile: "",
        email: "",
        step: 1
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleGenerateClick = () => {
        // Here you can add your logic for generating the unique id and password
        setFormData({ ...formData, step: 2 });
    };

    const handleProceedClick = () => {
        // Here you can add your logic for proceeding to the next step
        // For example, sending the registration data to the server
        // and then redirecting to the login page
    };

    return (
        <div className="register-page">
            <div className="doctor-button">
                <Link to="/patient-login" className="patient-btn">Patient</Link>
            </div>
            <div style={{ borderRadius: '120px 0px 0px 120px'}} className="registration-form">
                <div className="registration-inner">
                <h1 style={{textAlign:"center"}}>Sign Up</h1>
                {formData.step === 1 && (
                    <>
                        <div className="input-group">
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name"/>
                        </div>
                    
                        <div className="input-group">
                            <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile No"/>
                        </div>
                        <div className="input-group">
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email"/>
                        </div>
                        
                        <button className="generate-btn" onClick={handleGenerateClick}>Generate</button>
                        <p style={{padding:"15px 15% 0px 20%", fontWeight:"bold"}}>Already have an account? <Link to="/doctor-login">Login</Link></p>
                    </>
                )}
                {formData.step === 2 && (
                    <>
                        <div className="input-group">
                            <input type="text" placeholder="Username"/>
                        </div>
                        <div className="input-group">
                            <input type="password" name="password" placeholder="Password"/>
                        </div>
                        <div className="input-group">
                            <input type="password" name="confirmPassword" placeholder="Confirm Password"/>
                        </div>
                        <div className="input-group">
                            <input type="text" name=" licensenumber" value={formData.name} onChange={handleChange} placeholder="License Number"/>
                        </div>
                        <div className="input-group">
                            <input type="text" name="speciality" value={formData.name} onChange={handleChange} placeholder="Speciality"/>
                        </div>
                        <button className="proceed-btn" onClick={handleProceedClick}>Proceed</button>
                        <p style={{padding:"15px 15% 0px 20%", fontWeight:"bold"}}>Already have an account? <Link to="/doctor-login">Login</Link></p>
                    </>
                )}
                </div>
            </div>
        </div>
    );
};

export default DoctorSignup;