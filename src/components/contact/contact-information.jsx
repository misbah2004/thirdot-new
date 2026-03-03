import React from 'react'

const ContactInformation = () => {
    return (
        <>
            <div>
                <div className="contact-information">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                {/* Contact Item Start */}
                                <div className="contact-item wow fadeInUp" data-wow-delay="0.25s">
                                    <div className="contact-content">
                                        <div className="contact-content-title">
                                            <h2>address</h2>
                                            <a href="#">
                                                <img src="/assets/images/icon-location.svg" alt="" />
                                            </a>
                                        </div>
                                        <p>123, Lorem Ipsum, Street no, City, Country 123456</p>
                                    </div>
                                    <div className="contact-image">
                                        <figure className="image-anime">
                                            <img src="/assets/images/contact-info-1.jpg" alt="" />
                                        </figure>
                                    </div>
                                </div>
                                {/* Contact Item End */}
                            </div>
                            <div className="col-md-4">
                                {/* Contact Item Start */}
                                <div className="contact-item wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="contact-content">
                                        <div className="contact-content-title">
                                            <h2>call now</h2>
                                            <a href="#">
                                                <img src="/assets/images/icon-phone.svg" alt="" />
                                            </a>
                                        </div>
                                        <p>(+0) 123 456 789</p>
                                        <p>(+0) 123 456 789</p>
                                    </div>
                                    <div className="contact-image">
                                        <figure className="image-anime">
                                            <img src="/assets/images/contact-info-2.jpg" alt="" />
                                        </figure>
                                    </div>
                                </div>
                                {/* Contact Item End */}
                            </div>
                            <div className="col-md-4">
                                {/* Contact Item Start */}
                                <div className="contact-item wow fadeInUp" data-wow-delay="0.75s">
                                    <div className="contact-content">
                                        <div className="contact-content-title">
                                            <h2>email us</h2>
                                            <a href="#">
                                                <img src="/assets/images/icon-mail.svg" alt="" />
                                            </a>
                                        </div>
                                        <p>info@domainname.com</p>
                                        <p>info@domainname.com</p>
                                    </div>
                                    <div className="contact-image">
                                        <figure className="image-anime">
                                            <img src="/assets/images/contact-info-3.jpg" alt="" />
                                        </figure>
                                    </div>
                                </div>
                                {/* Contact Item End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactInformation