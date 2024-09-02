import React, { useState } from 'react';
import './MainPage.css';
import PoultryProfile from './components/profile/Profile';
import PoultryProducts from './components/products/Products';
import PoultryCommunity from './components/community/Community';

function PoultryMainPage() {
    const [centerDiv, setCenterDiv] = useState("products");
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
                centerDiv === "profile" ? <PoultryProfile /> : centerDiv === "products" ? <PoultryProducts /> : <PoultryCommunity />
            }
        </div>
    )
}

export default PoultryMainPage