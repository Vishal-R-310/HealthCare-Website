import React, { useState } from "react";
import './Styles.css';
import { Link } from "react-router-dom";
import "./Patient-Login";

const PatientSignup = () => {

    const [formData, setFormData] = useState({
        name: "",
        dob: "",
        mobile: "",
        email: "",
        uniqueId: "", 
        password: "",
        step: 1
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleGenerateClick = () => {
        // Here you can add your logic for generating the unique id and password
        const uniqueId = formData.name.replace(/\s+/g, '') + formData.dob.replace(/-/g, '');
        setFormData({ ...formData, uniqueId, step: 2 });
    };

    const handleProceedClick = async () => {
        try {
                console.log(formData.name);
                const response = await fetch('http://localhost:3000/api/patient/patient-login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log('Registration successful:', data);


        } catch (error) {
            console.error('Error during registration:', error);
            // Handle error, show error message to user, etc.
        }
    };    

    return (
        <div className="register-page">
            <div className="registration-form">
                <div className="registration-inner">
                <h1 style={{textAlign:"center", marginBottom:"35px"}}>Sign Up</h1>
                {formData.step === 1 && (
                    <>
                        <div className="input-group">
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name"/>
                        </div>
                        <div className="input-group">
                            <input type="date" name="dob" value={formData.dob} onChange={handleChange} placeholder="Date of Birth"/>
                        </div>
                        <div className="input-group">
                            <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile No"/>
                        </div>
                        <div className="input-group">
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email"/>
                        </div>
                        <button className="generate-btn" onClick={handleGenerateClick}>Generate</button>
                        <p style={{padding:"15px 15% 0px 20%", fontWeight:"500"}}>Already have an account? <Link to="/patient-login">Login</Link></p>
                    </>
                )}
                {formData.step === 2 && (
                    <>
                        <div className="input-group">
                            <input type="text" placeholder="Unique ID"/>
                        </div>
                        <div className="input-group">
                            <input type="password" name="password" placeholder="Password"/>
                        </div>
                        <div className="input-group">
                            <input type="password" name="confirmPassword" placeholder="Confirm Password"/>
                        </div>
                        <button className="proceed-btn" onClick={handleProceedClick}>Proceed</button>
                        <p style={{padding:"15px 15% 0px 20%", fontWeight:"500"}}>Already have an account? <Link to="/patient-login">Login</Link></p>
                    </>
                )}
                </div>
            </div>
            <div className="doctor-button">
                <Link to="/doctor-login" className="doctor-btn">Doctor</Link>
            </div>
        </div>
    );
};

export default PatientSignup;