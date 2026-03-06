import React, { useState, useEffect } from 'react'
import Header from './header'
import Footer from './footer'
import Loading from '../loading/loading'

const Layout = ({ children }) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div>
            {/* Preloader Start */}
            {loading && (
                <div className="preloader">
                    <Loading />
                </div>
            )}
            {/* Preloader End */}

            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout