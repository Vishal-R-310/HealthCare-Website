import React, { useState } from "react";
import './Styles.css';
import { Link } from "react-router-dom";

const PatientLogin = () => {
    const [formData, setFormData] = useState({
        mobile: "",
        uniqueId: "",
        dob: "",
        password: "",
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLoginClick = () => {
        // Here you can add your logic for handling login
        // For example, sending login data to the server
    };

    return (
        <div className="login-page">
            <div className="login-form">
                <div className="login-inner">
                    <h1 style={{textAlign:"center"}}>Patient</h1>
                    <h2 style={{textAlign:"center", fontSize:"22px"}}>Welcome back</h2>
                    <div className="input-group">
                        <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile No" />
                    </div>
                    <div className="input-group">
                        <input type="text" name="uniqueId" value={formData.uniqueId} onChange={handleChange} placeholder="Unique ID" />
                    </div>
                    <div className="input-group">
                        <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                    <p style={{textAlign:"right", fontWeight:"bold"}}><Link to="/forgot-password">Forgot password?</Link></p>
                    </div>
                    <button style={{margin:"0px 40% 0px 40%", borderRadius:"15px"}}className="login-btn" onClick={handleLoginClick}>Login</button>
                    <p style={{padding:"15px 15% 0px 20%", fontWeight:"bold"}}>Don't have an account? <Link to="/patient-signup">Register</Link></p>
                </div>
            </div>
            <div className="doctor-button">
                <Link to="/doctor-signup" className="doctor-btn">Doctor</Link>
            </div>
        </div>
    );
};

export default PatientLogin;
