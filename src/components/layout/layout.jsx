import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
    return (
        <>
            <div>
                {/* Preloader Start */}
                <div className="preloader">
                    <div className="loading-container">
                        <div className="loading" />
                        <div id="loading-icon">
                            <img src="/assets/images/loding-logo.jpeg" alt="" />
                        </div>
                    </div>
                </div>
                {/* Preloader End */}
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}

export default Layout