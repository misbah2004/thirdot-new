import React from 'react'
import Hero from '../../components/home/hero'
import About from '../../components/home/about'
import Services from '../../components/home/services'
import Work from '../../components/home/work'
import Choose from '../../components/home/choose'
import Partner from '../../components/home/partner'
import Testimonial from '../../components/home/testimonial'
import News from '../../components/home/news'
import OurBlogs from '../../components/blog/our-blogs'
import AboutSection from '../../components/home/about'

const Home = () => {
    return (
        <>
            <div className=''>
                {/* Hero Section Start */}
                <Hero />
                {/* Hero Section End */}
                {/* About Section Start */}
                <AboutSection />
                {/* About Section End */}
                {/* Our Services Section Start */}
                <Services />
                {/* Our Services Section End */}
                {/* Our Work Section Start */}
                <Work start="0" end="4" />
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
                {/* <News /> */}
                <OurBlogs start="0" end="3" />
                {/* Latest News Section End */}


            </div>
        </>
    )
}

export default Home