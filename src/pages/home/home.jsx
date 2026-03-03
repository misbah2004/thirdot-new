import React from 'react'
import Hero from '../../components/home/hero'
import About from '../../components/home/about'
import Services from '../../components/home/services'
import Work from '../../components/home/work'
import Choose from '../../components/home/choose'
import Partner from '../../components/home/partner'
import Testimonial from '../../components/home/testimonial'
import News from '../../components/home/news'

const Home = () => {
    return (
        <>
            <div>
                {/* Hero Section Start */}
                <Hero />
                {/* Hero Section End */}
                {/* About Section Start */}
                <About />
                {/* About Section End */}
                {/* Our Services Section Start */}
                <Services />
                {/* Our Services Section End */}
                {/* Our Work Section Start */}
                <Work />
                {/* Our Work Section End */}
                {/* Why Choose Us Section Start */}
                <Choose />
                {/* Why Choose Us Section End */}
                {/* Exclusive Partners Section Start */}
                <Partner />
                {/* Exclusive Partners Section End */}
                {/* Clients Testimonials Section Start */}
                <Testimonial />
                {/* Clients Testimonials Section End */}
                {/* Latest News Section Start */}
                <News />
                {/* Latest News Section End */}


            </div>
        </>
    )
}

export default Home