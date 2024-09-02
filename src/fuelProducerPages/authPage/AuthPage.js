import React, { useState } from 'react';
import './AuthPage.css';
import { NavLink, useNavigate } from 'react-router-dom';

function FulProducerAuthPage() {
    const [register, setRegister] = useState(true);

    return (
        <div className="auth-page">
            {register === true ? (
                <>
                    <h1 className="auth-title">
                        Get Started
                    </h1>
                    <div className="auth-page-register">
                        <form action="" className="auth-form">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" className="auth-input" />
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className="auth-input" />
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" className="auth-input" />
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input type="password" name="confirm-password" id="confirm-password" className="auth-input" />
                            <NavLink to="/fuel-producers-main" activeClassName="active">
                                <button className="auth-button">Register</button>
                            </NavLink>
                            <p className="auth-text">
                                Already have an account? <a href="#" onClick={() => setRegister(false)}>Login</a>
                            </p>
                        </form>
                    </div>
                </>
            ) : (
                <>
                    <h1 className="auth-title">
                        Welcome Back
                    </h1>
                    <div className="auth-page-login">
                        <form action="" className="auth-form">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" className="auth-input" />
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" className="auth-input" />
                            <p className="auth-text">
                                Don't have an account? <a href="#" onClick={() => setRegister(true)}>Register</a>
                            </p>
                            <NavLink to="/fuel-producers-main" activeClassName="active">
                                <button className="auth-button">Login</button>
                            </NavLink>
                        </form>
                    </div>
                </>
            )}
        </div>
    );
}

export default FulProducerAuthPage;
