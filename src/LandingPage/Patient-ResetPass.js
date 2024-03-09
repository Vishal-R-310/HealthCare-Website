import React, { useState } from "react";
import './Styles.css';

const ForgotResetPassword = ({ onContinue, onVerify }) => {
    const [formData, setFormData] = useState({
        mobile: "",
        email: "",
        newPassword: "",
        confirmPassword: "",
        step: 1
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleContinueClick = () => {
        // Here you can add your logic for handling continue action
        onContinue(formData.mobile, formData.email);
        setFormData({ ...formData, step: 2 });
    };

    const handleVerifyClick = () => {
        // Here you can add your logic for handling verify action
        onVerify(formData.newPassword, formData.confirmPassword);
        setFormData({ ...formData, step: 1 });
    };

    return (
        <div className="forgot-reset-password-page">
        <div className="forgot-reset-password-inner">
        {formData.step === 1 && (
                <>
                    <h2 style={{marginBottom:"25px", fontSize:"22px"}}>Forgot your password?</h2>
                    <div className="input-group">
                        <label>Mobile No</label>
                        <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <button className="continue-btn" onClick={handleContinueClick}>Continue</button>
                </>
            )}
            {formData.step === 2 && (
                <>
                    <h2>Reset your password</h2>
                    <div className="input-group">
                        <label>New Password</label>
                        <input type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Confirm Password</label>
                        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                    </div>
                    <button className="verify-btn" onClick={handleVerifyClick}>Verify</button>
                </>
            )}
        </div>
        </div>
    );
};

export default ForgotResetPassword;
