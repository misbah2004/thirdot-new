import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div>
                <header className="main-header">
                    <div className="header-sticky">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container">
                                {/* Logo Start */}
                                <Link to={"/"}> <a className="navbar-brand" href="">
                                    <img src="/assets/images/logo.webp" alt="Logo" />
                                </a>
                                </Link>
                                {/* Logo End */}
                                {/* Main Menu Start */}
                                {/* collapse */}
                                <div className="navbar-collapse main-menu">
                                    <div className="nav-menu-wrapper">
                                        <ul className="navbar-nav mr-auto" id="menu">
                                            <Link to="/">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="">
                                                        home
                                                    </a>
                                                </li>
                                            </Link>
                                            <Link to="/about">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="">
                                                        about us
                                                    </a>
                                                </li>
                                            </Link>
                                            <Link to="/services">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="">
                                                        services
                                                    </a>
                                                </li>
                                            </Link>
                                            <Link to="/portfolio">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="">
                                                        portfolio
                                                    </a>
                                                </li>
                                            </Link>
                                            <Link to="/blog">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="">
                                                        blog
                                                    </a>
                                                </li>
                                            </Link>
                                            <li className="nav-item highlighted-menu">
                                                <a className="nav-link" href="">
                                                    free consultation
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Let’s Start Button Start */}
                                    <div className="header-btn d-inline-flex">
                                        <a href="contact-us.html" className="btn-default">
                                            free consultation
                                        </a>
                                    </div>
                                    {/* Let’s Start Button End */}
                                </div>
                                {/* Main Menu End */}
                                <div className="navbar-toggle" />
                            </div>
                        </nav>
                        <div className="responsive-menu" />
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header