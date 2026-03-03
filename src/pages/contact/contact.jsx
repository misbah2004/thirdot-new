import React from 'react'
import ContactHeader from '../../components/contact/contact-header'
import ContactInformation from '../../components/contact/contact-information'
import ContactUs from '../../components/contact/contact-us'
import ContactMap from '../../components/contact/contact-map'

const Contact = () => {
    return (
        <>
            <div>
                <>
                    {/* Page Header Start */}
                    <ContactHeader />
                    {/* Page Header End */}
                    {/* Contact Information Section Start */}
                    <ContactInformation />
                    {/* Contact Information Section End */}
                    {/* Contact Us Section Start */}
                    <ContactUs />
                    {/* Contact Us Section End */}
                    {/* Google Map Section Start */}
                    <ContactMap />
                    {/* Google Map Section End */}
                </>

            </div>
        </>
    )
}

export default Contact