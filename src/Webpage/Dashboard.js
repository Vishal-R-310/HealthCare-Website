import React from "react";
import './Styles1.css';
import logo from "../Assets/logo1.png";

const DashBoard = () => {
    return (  
        <div className="dashboard-container">
            <div className="menu-container">
                <div className="title">
                    <img src={logo} alt="Logo"/>
                    <h3>HospiData</h3>
                </div>
                <hr style={{height:"1px", backgroundColor:"black"}}/>
                <ul className="menu">
                    <li className="menu-items"><span>DashBoard</span></li>
                    <li className="menu-items"><span>Booking Activity</span></li>
                    <li className="menu-items"><span>Lab Report</span></li>
                    <li className="menu-items"><span>Health Record</span></li>
                    <li className="menu-items"><span>Billing</span></li>
                    <li className="menu-items"><span>Notification</span></li>
                    <li className="menu-items"><span>Help & Support</span></li>
                    <li className="menu-items"><span>Settings</span></li>
                </ul>
                <button className="logout-btn" >Logout</button>
            </div>
            <div className="dashboard">
                <div className="user-welcome">
                    <h2>Welcome User</h2>
                </div>
                <div className="user-profile">
                    <div className="user-profile-inner">
                        <img src={logo} alt="User_Photo" />
                        <p className="user-name">User Name</p>
                        <p className="user-age">Age</p>
                        <div className="user-med-info">
                            <div className="user-med-data-blood">
                                <p className="user-med-data-type">Blood{}</p>
                                <p className="user-med-data-val">A+{}</p>
                            </div>
                        </div>
                        <div className="user-med-info">
                            <div className="user-med-data-weight">
                                <p className="user-med-data-type">Weight{}</p>
                                <p className="user-med-data-val">52Kg{}</p>
                            </div>
                        </div>
                        <div className="user-med-info">
                            <div className="user-med-data-height">
                                <p className="user-med-data-type">Height{}</p>
                                <p className="user-med-data-val">160cm{}</p>
                            </div>
                        </div>
                        <div className="user-allergy"><p>Drug Allergy: <span>Penicilin</span></p></div>
                    </div>
                </div>
                <div className="user-remainder">

                </div>
                <div className="user-bp">

                </div>
                <div className="user-hemo">

                </div>
                <div className="user-glucose">

                </div>
                <div className="user-bmi">

                </div>
                <div className="dash-search">

                </div>
                <div className="dash-book-app">

                </div>
                <div className="app-week-view">

                </div>
                <div className="app-doc-details">

                </div>
                <div className="dash-recent-notif">

                </div>
            </div>
        </div>
    );
}
 
export default DashBoard;