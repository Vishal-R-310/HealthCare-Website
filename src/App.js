import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import PatientLogin from "./LandingPage/Patient-Login";
import PatientSignup from "./LandingPage/Patient-Signup";
import ForgotResetPassword from "./LandingPage/Patient-ResetPass";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/patient-signup" element={<PatientSignup/>}/>
        <Route path="/patient-login" element={<PatientLogin/>} />
        <Route path="/forgot-password" element={<ForgotResetPassword/>} />

      </Routes>
    
    </div>
  );
}

export default App;
