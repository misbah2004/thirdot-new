import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="main-header px-10">
            <div className="header-sticky ">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container !px-7">

                        {/* Logo */}
                        <Link to="/" className="navbar-brand">
                            <img src="/assets/images/logo.webp" alt="Logo" />
                        </Link>

                        {/* Hamburger Button (Only Mobile) */}
                        <div 
                            className={`navbar-toggle ${menuOpen ? "active" : ""}`} 
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        {/* Menu */}
                        <div className={`navbar-collapse main-menu ${menuOpen ? "mobile-open" : ""}`}>
                            <div className="nav-menu-wrapper">
                                <ul className="navbar-nav mr-auto">

                                    <li className="nav-item">
                                        <Link onClick={() => { setMenuOpen(!menuOpen); window.scrollTo(0, 0); }} className="nav-link" to="/">Home</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link onClick={() => { setMenuOpen(!menuOpen); window.scrollTo(0, 0); }} className="nav-link" to="/about">About Us</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link onClick={() => { setMenuOpen(!menuOpen); window.scrollTo(0, 0); }} className="nav-link" to="/services">Services</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link onClick={() => { setMenuOpen(!menuOpen); window.scrollTo(0, 0); }} className="nav-link" to="/portfolio">Portfolio</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link onClick={() => { setMenuOpen(!menuOpen); window.scrollTo(0, 0); }} className="nav-link" to="/blog">Blog</Link>
                                    </li>

                                </ul>
                            </div>

                            <div className="header-btn d-inline-flex">
                                <Link to="/contact" className="btn-default">
                                    get Consultation
                                </Link>
                            </div>

                        </div>

                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;