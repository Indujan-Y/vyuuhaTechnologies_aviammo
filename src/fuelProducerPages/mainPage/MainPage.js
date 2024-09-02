import React, { useState } from 'react';
import './MainPage.css';
import FuelProducersProfile from './components/profile/Profile';
import FuelProducersProducts from './components/products/Products';
import FuelProducersCommunity from './components/community/Community';
import Dashboard from './components/dashboard/Dashboard';

function FuelProducersMainPage() {
    const [centerDiv, setCenterDiv] = useState("profile");
    return (
        <div className="main-page-wrapper">
            <div className="side-bar">
                <div className="side-bar-upper">
                    <div className="side-bar-role">
                        <p className="side-bar-role-title">
                            AviAmmo
                        </p>
                        <p className="side-bar-role-subtitle">
                            Consumer
                        </p>
                    </div>
                    <ul className="side-bar-nav">
                        <li className="side-bar-nav-item" onClick={() => setCenterDiv("profile")}>
                            Profile
                        </li>
                        <li className="side-bar-nav-item" onClick={() => setCenterDiv("products")}>
                            My Products
                        </li>
                        <li className="side-bar-nav-item" onClick={() => setCenterDiv("dashboard")}>
                            Dashboard
                        </li>
                        <li className="side-bar-nav-item" onClick={() => setCenterDiv("community")}>
                            Community
                        </li>
                    </ul>
                </div>
                <div className="side-bar-lower">
                    <button className="side-bar-logout">
                        Log Out
                    </button>
                </div>
            </div>
            {
                // centerDiv === "profile" ? <FuelProducersProfile /> : centerDiv === "products" ? <FuelProducersProducts /> : <FuelProducersCommunity />
                centerDiv === "profile" ? <FuelProducersProfile /> : centerDiv === "products" ? <FuelProducersProducts /> : centerDiv === "dashboard" ? <Dashboard /> : <FuelProducersCommunity />
            }
        </div>
    )
}

export default FuelProducersMainPage