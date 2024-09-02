import React, { useState } from 'react';
import './MainPage.css';
import ConsumerProfile from './components/profile/Profile';
import ConsumerProducts from './components/products/Products';
import ConsumerCommunity from './components/community/Community';

function ConsumerMainPage() {
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
                            Products
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
                centerDiv === "profile" ? <ConsumerProfile /> : centerDiv === "products" ? <ConsumerProducts /> : <ConsumerCommunity />
            }
        </div>
    )
}

export default ConsumerMainPage