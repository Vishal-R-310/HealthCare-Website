import React from "react";
import DashBoard from "./Webpage/Dashboard";
import LandingPage from "./LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import PatientLogin from "./LandingPage/Patient-Login";
import PatientSignup from "./LandingPage/Patient-Signup";
import ForgotResetPassword from "./LandingPage/Patient-ResetPass";
import DoctorLogin from "./LandingPage/DoctorLogin";
import DoctorSignup from "./LandingPage/DoctorSignup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/patient-signup" element={<PatientSignup/>}/>
        <Route path="/patient-login" element={<PatientLogin/>} />
        <Route path="/forgot-password" element={<ForgotResetPassword/>} />
        <Route path="/patient-login/patient-dash" element={<DashBoard/>} />
        <Route path="/doctor-login" element={<DoctorLogin/>} />
        <Route path="/doctor-signup" element={<DoctorSignup/>} />
      </Routes>
    
    </div>
  );
}

export default App;
