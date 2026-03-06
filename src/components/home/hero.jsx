import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <div>
                <div className="hero">
                    <div className="container">
                        <div className="row align-items-center px-10">
                            <div className="col-lg-8">
                                {/* Hero Content Start */}
                                <div className="hero-content hero-content-new">
                                    {/* Section Title Start */}
                                    <div className="section-title">
                                        {/* <h3 className="wow fadeInUp">about our Company</h3> */}
                                        <h1 className="text-anime-style-3">
                                            Engineering  &amp; Brilliance {" "}
                                            <span>Through Code.</span>
                                        </h1>
                                    </div>
                                    {/* Section Title End */}
                                    {/* Hero Body Start */}
                                    <div className="hero-body">
                                        <p className="wow fadeInUp" data-wow-delay="0.5s">
                                            We transform complex challenges into elegant software solutions. From high-growth startups to Fortune 500 enterprises, we deliver digital excellence.
                                        </p>
                                    </div>
                                    {/* Hero Body End */}
                                    {/* Hero Footer Start */}
                                    <Link to="/contact">
                                        <div className="hero-footer">
                                            <a
                                                href="#"
                                                className="btn-default wow fadeInUp"
                                                data-wow-delay="0.75s"
                                            >
                                                get consultation
                                            </a>
                                        </div>
                                    </Link>
                                    {/* Hero Footer End */}
                                </div>
                                {/* Hero Left Content End */}
                            </div>
                            <div className="col-lg-4">
                                {/* Hero Video Image Start */}
                                <div className="hero-video-image">
                                    <div className="hero-image">
                                        <figure className="image-anime ">
                                            <img src="/assets/images/hero-img.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="hero-play-button">
                                        <a
                                            href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                                            className="popup-video"
                                        >
                                            <i className="fa-solid fa-play" />
                                        </a>
                                    </div>
                                </div>
                                {/* Hero Video Image End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero