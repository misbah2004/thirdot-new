import React from 'react'
import Testimonial from '../../components/home/testimonial'
import Choose from '../../components/home/choose'
import Partner from '../../components/home/partner'
import OverCompany from '../../components/about/over-company'
import ServicesHeader from '../../components/services/services-header'
import PageServices from '../../components/services/page-services'

const Services = () => {
    return (
        <>
            <div>
                <>
                    {/* Page Header Start */}
                    <ServicesHeader />
                    {/* Page Header End */}
                    {/* Our Services Section Start */}
                    <PageServices />
                    {/* Our Services Section End */}
                    {/* Overview Comapny Section Start */}
                    <OverCompany />
                    {/* Overview Comapny Section End */}
                    {/* Exclusive Partners Section Start */}
                    <Partner />
                    {/* Exclusive Partners Section End */}
                    {/* Why Choose Us Section Start */}
                    <Choose />
                    {/* Why Choose Us Section End */}
                    {/* clients testimonials Section Start */}
                    <Testimonial />
                    {/* clients testimonials Section End */}
                </>
            </div>
        </>
    )
}

export default Services