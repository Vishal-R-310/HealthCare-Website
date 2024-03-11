import React, { useState } from "react";
import './Styles1.css';
import logo from "../Assets/logo1.png";
import DashBoard from "./Dashboard";
import BookingActivity from "./BookingActivity";
import LabReport from "./LabReport";
import HealthRecord from "./HealthRecord";
import Billing from "./Billing";
import Notification from "./Notification";
import HelpAndSupport from "./HelpAndSupport";

const DashBoardMenu = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard"); 

    // Function to handle menu item clicks
    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
    };

    const DashboardContent = ({ selectedMenuItem }) => {
        switch (selectedMenuItem) {
            case "Dashboard":
                return <DashBoard />;
            case "Booking Activity":
                return <BookingActivity />;
            case "Lab Report":
                return <LabReport />;
            case "Health Record":
                return <HealthRecord />;
            case "Billing":
                return <Billing />;
            case "Notification":
                return <Notification />;
            case "Help & Support":
                return <HelpAndSupport />;
            default:
                return null;
        }
    }

    return (  
        <div className="dashboard-container">
            <div className="menu-container">
                <div className="title">
                    <img src={logo} alt="Logo"/>
                    <h3>HospiData</h3>
                </div>
                <hr style={{height:"1px", backgroundColor:"black"}}/>
                <ul className="menu">
                    <li className="menu-items" onClick={() => handleMenuItemClick("Dashboard")}><span>DashBoard</span></li>
                    <li className="menu-items" onClick={() => handleMenuItemClick("Booking Activity")}><span>Booking Activity</span></li>
                    <li className="menu-items" onClick={() => handleMenuItemClick("Lab Report")}><span>Lab Report</span></li>
                    <li className="menu-items" onClick={() => handleMenuItemClick("Health Record")}><span>Health Record</span></li>
                    <li className="menu-items" onClick={() => handleMenuItemClick("Billing")}><span>Billing</span></li>
                    <li className="menu-items" onClick={() => handleMenuItemClick("Notification")}><span>Notification</span></li>
                    <li className="menu-items" onClick={() => handleMenuItemClick("Help & Support")}><span>Help & Support</span></li>
                    {/* Add other menu items here */}
                </ul>
                <button className="logout-btn" >Logout</button>
            </div>
            <div className="dashboard">
                <DashboardContent selectedMenuItem={selectedMenuItem}/>
            </div>
        </div>
    );
}
 
export default DashBoardMenu;