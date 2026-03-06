import React from 'react'
import { Link } from 'react-router-dom'

const AboutSection = () => {
    return (
        <>
            <div>
                <div className="about-us">
                    <div className="container">
                        <div className="row section-row align-items-center px-10">
                            <div className="col-lg-8">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">about Company</h3>
                                    <h2 className="text-anime-style-3">
                                        Who We Are
                                    </h2>
                                </div>
                                {/* Section Title End */}
                            </div>
                        </div>
                        <div className="row align-items-center px-10">
                            <div className="col-lg-6">
                                {/* About Us Image Start */}
                                <div className="about-image">
                                    <div className="about-img">
                                        <figure className="image-anime ">
                                            <img src="/assets/images/about-us-img.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="about-consultation">
                                        <figure>
                                            <img src="/assets/images/thirdot-bout.png" alt="" />
                                        </figure>
                                    </div>
                                </div>
                                {/* About Us Image End */}
                            </div>
                            <div className="col-lg-6">
                                {/* About Us Content Start */}
                                <div className="about-content">
                                    <p className="wow fadeInUp" data-wow-delay="0.25s">
                                        At Thirdot, we’re more than just developers and marketers—we’re problem solvers. With years of real-world experience and a growing list of satisfied clients, we pride ourselves on delivering solutions that are innovative, scalable, and results-driven. Whether you need a mobile app to simplify your business processes or a digital campaign that connects with your audience, we’ve got you covered.
                                    </p>
                                    <h3 className="wow fadeInUp">Business Growth</h3>
                                    <p className="wow fadeInUp" data-wow-delay="0.5s">
                                        totam rem aperiam, eaque ipsa quae ab illo inventore et quasi
                                        architecto beatae vitae dicta sunt explicabo. sed quia
                                        consequuntur magni dolores eos qui ratione voluptatem sequi
                                        nesciunt.
                                    </p>
                                    <h3 className="wow fadeInUp">Technology Consultancy</h3>
                                    <p className="wow fadeInUp" data-wow-delay="0.75s">
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                        blanditiis praesentium voluptatum deleniti cupiditate non
                                        provident, similique sunt in culpa qui officia deserunt mollitia
                                        animi, id est laborum et dolorum fuga.
                                    </p>
                                    {/* <ul className="wow fadeInUp" data-wow-delay="1s">
                                        <li>Ease of Scalability</li>
                                        <li>Instant Impact</li>
                                        <li>Expertise and Experience</li>
                                        <li>Time Zone Aligned</li>
                                        <li>Full Flexibility</li>
                                        <li>Proactive Support</li>
                                    </ul> */}
                                    <Link onClick={() => window.scrollTo(0, 0)} to="/contact">
                                        <a
                                            href="#"
                                            className="btn-default wow fadeInUp"
                                            data-wow-delay="1.25s"
                                        >
                                            get consultation
                                        </a>
                                    </Link>
                                </div>
                                {/* About Us Content End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection    