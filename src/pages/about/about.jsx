import React from 'react'
import Testimonial from '../../components/home/testimonial'
import Partner from '../../components/home/partner'
import Choose from '../../components/home/choose'
import AboutHeader from '../../components/about/about-header'
import PageAbout from '../../components/about/page-about'
import OverCompany from '../../components/about/over-company'
import OurTeam from '../../components/about/our-team'
import TickerSection from '../../components/about/ticker-section'

const About = () => {
    return (
        <>
            <div>
                <>
                    {/* Page Header Start */}
                    <AboutHeader />
                    {/* Page Header End */}
                    {/* Page About Section Start */}
                    <PageAbout />
                    {/* Page About Section End */}
                    {/* Why Choose Us Section Start */}
                    <Choose />
                    {/* Why Choose us Section End */}
                    {/* Exclusive Partners Section Start */}
                    <Partner />
                    {/* Exclusive Partners Section End */}
                    {/* Overview Comapny Section Start */}
                    <OverCompany />
                    {/* Overview Comapny Section End */}
                    {/* Our Team Section Start */}
                    <OurTeam />
                    {/* Our Team Section End */}
                    {/* Scrolling Ticker Section Start */}
                    <TickerSection />
                    {/* Scrolling Ticker Section End */}
                    {/* clients testimonials Section Start */}
                    <Testimonial />
                    {/* clients testimonials Section End */}
                </>

            </div>
        </>
    )
}

export default About