import React from 'react';
import './LandingPage.css';
import { NavLink, useNavigate } from 'react-router-dom';
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpeg'
import pic3 from '../assets/pic3.jpeg'

function LandingPage() {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();

    const handleRoleChange = (event) => {
        const role = event.target.value;
        if (role) {
            navigate(role);
        }
    };

    return (
        <div className="landing-page-wrapper">
            <div className="landing-header">
                <h2 className='appbar_title'>VYUUHA TECHNOLOGIES</h2>
                <nav className="landing-header-nav">
                    <ul className="landing-header-nav-list">
                        <li className="landing-header-nav-list-item">
                            <a href="#home">
                                Home
                            </a>
                        </li>
                        <li className="landing-header-nav-list-item">
                            <a href="#about">
                                About Us
                            </a>
                        </li>
                        <li className="landing-header-nav-list-item">
                            <a href="#what-we-do">
                                What We Do
                            </a>
                        </li>
                        <li className="landing-header-nav-list-item">
                            <a href="#contact">
                                Contact Us
                            </a>
                        </li>
                        <li className="landing-header-nav-list-item">
                            <select name="roles" id="roles" defaultValue="" onChange={handleRoleChange}>
                                <option value="" disabled>
                                    Login/Register
                                </option>
                                <option value="/poultry-auth">
                                    Poultry Farmers
                                </option>
                                <option value="/fuel-producers-auth">
                                    Bio-Fuel Producers
                                </option>
                                <option value="/consumers-auth">
                                    Consumers
                                </option>
                            </select>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="landing" id="home">
                <h1 className="landing-title">AVIAMMO</h1>
                <p className="landing-description">
                    Re-imagining Waste: From Poultry Farms to Renewable Energy Solutions
                </p>
            </div>

            <div className="landing-section landing-poultry">
                <div className="landing-poultry-brief">
                    <h2 className="landing-poultry-title">Poultry Farmers</h2>
                    <p className="landing-poultry-description">
                        Partner with us to turn your poultry waste into profit. Discover how you can contribute to sustainable energy solutions.
                    </p>
                    <NavLink to="/poultry-auth" activeClassName="active">
                        <button className="poultry-auth">Get Started</button>
                    </NavLink>
                </div>
                <img src={pic1} alt="" className="landing-poultry-img" />
            </div>

            <div className="landing-section landing-fuel-producers">
                <img src={pic2} alt="" className="landing-fuel-producers-img" />
                <div className="landing-fuel-producers-brief">
                    <h2 className="landing-fuel-producers-title">Bio-Fuel Producers</h2>
                    <p className="landing-fuel-producers-description">
                        Be a part of the future of energy. Connect with farmers and consumers to produce and distribute biofuel efficiently.
                    </p>
                    <NavLink to="/fuel-producers-auth" activeClassName="active">
                        <button className="fuel-producers-auth">Get Started</button>
                    </NavLink>
                </div>
            </div>

            <div className="landing-section landing-consumers">
                <div className="landing-consumers-brief">
                    <h2 className="landing-consumers-title">Consumers</h2>
                    <p className="landing-consumers-description">
                        Support sustainability with our eco-friendly organic fertilizers and manure. Enhance your agricultural productivity with our high-quality products.
                    </p>
                    <NavLink to="/consumers-auth" activeClassName="active">
                        <button className="consumers-auth">Get Started</button>
                    </NavLink>
                </div>
                <img src={pic3} alt="" className="landing-consumers-img" />
            </div>

            <div className="landing-about" id="about">
                <h2 className="landing-about-title">ABOUT US</h2>
                <img src="" alt="" className="landing-about-img" />
                <p className="landing-about-description">
                    Welcome to AviAmmo, where innovation meets sustainability. We are a forward-thinking company dedicated to transforming the poultry farming industry through cutting-edge waste-to-energy technology. Our mission is to provide sustainable, efficient, and eco-friendly solutions that not only enhance farm productivity but also contribute to a cleaner and greener environment.
                </p>
            </div>

            <div className="landing-we-do" id="what-we-do">
                <h2 className="landing-we-do-title">WHAT WE DO</h2>
                <p className="landing-we-do-description">
                    We specialize in converting poultry litter into renewable biofuel through state-of-the-art technology. Our process not only mitigates the environmental impact of ammonia emissions but also provides a reliable source of sustainable energy. This dual approach ensures that poultry farmers can manage waste more effectively while contributing to a cleaner environment.
                </p>
            </div>

            <div className="landing-contact" id="contact">
                <div className="landing-contact-brief">
                    <h2 className="landing-contact-title">CONTACT US</h2>
                    <p className="landing-contact-description">
                        Join us in our mission to create a sustainable future for the agricultural industry and beyond.
                    </p>
                </div>
                <form action="" className="landing-contact-form">
                    <input type="text" placeholder="Name" className="landing-contact-form-name" />
                    <input type="email" placeholder="Email" className="landing-contact-form-email" />
                    <textarea placeholder="Message" className="landing-contact-form-message"></textarea>
                    <button className="landing-contact-form-submit">Send Message</button>
                </form>
            </div>

            <footer className="landing-footer">
                <a href="" className="landing-footer-privacy-policy">Privacy Policy</a>
                <a href="" className="landing-footer-terms-of-use">Terms Of Use</a>
                <p className="landing-footer-copy">
                    &copy; {currentYear} AVIAMMO. All rights reserved.
                </p>
            </footer>
        </div>
    );
}

export default LandingPage;
