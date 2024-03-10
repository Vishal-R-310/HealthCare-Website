import React from "react";
import DashBoard from "./Webpage/Dashboard";
//import LandingPage from "./LandingPage/LandingPage";
//import { Routes, Route } from "react-router-dom";
//import PatientLogin from "./LandingPage/Patient-Login";
//import PatientSignup from "./LandingPage/Patient-Signup";
//import ForgotResetPassword from "./LandingPage/Patient-ResetPass";

function App() {
  return (
    <div>
      <DashBoard/>
      {/* <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/patient-signup" element={<PatientSignup/>}/>
        <Route path="/patient-login" element={<PatientLogin/>} />
        <Route path="/forgot-password" element={<ForgotResetPassword/>} />
        <Route path="/patient-dashboard" element={<DashBoard/>} />
      </Routes> */}
    
    </div>
  );
}

export default App;
