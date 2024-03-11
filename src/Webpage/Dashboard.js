import React from "react";
import logo from "../Assets/logo1.png";

const DashBoard = () => {
    return ( 
        <>
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
                <input className="dash-search-box" type="search" placeholder="Search"/>
            </div>
            <div className="dash-book-app">
                <button className="dash-book-app-btn" type="button">+  Book Appointment</button>
            </div>
            <div className="app-week-view">

            </div>
            <div className="app-doc-details">

            </div>
            <div className="dash-recent-notif">

            </div>
        </>
     );
}
 
export default DashBoard;