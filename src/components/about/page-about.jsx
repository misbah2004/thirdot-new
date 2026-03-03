import React from 'react'

const PageAbout = () => {
    return (
        <>
            <div>
                <div className="page-about">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                {/* About Us Image Start */}
                                <div className="page-about-image">
                                    <div className="about-img-1">
                                        <figure className="image-anime ">
                                            <img src="/assets/images/page-about-1.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="about-img-2">
                                        <figure className="image-anime ">
                                            <img src="/assets/images/page-about-2.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="work-experience">
                                        <div className="work-experience-icon">
                                            <img src="/assets/images/icon-work-experience.svg" alt="" />
                                        </div>
                                        <div className="work-experience-content">
                                            <h3>
                                                <span className="counter">30</span>+
                                            </h3>
                                            <p>Work Experience</p>
                                        </div>
                                    </div>
                                </div>
                                {/* About Us Image End */}
                            </div>
                            <div className="col-lg-6">
                                {/* About Us Content Start */}
                                <div className="about-content">
                                    {/* Section Title Start */}
                                    <div className="section-title">
                                        <h3 className="wow fadeInUp">about us</h3>
                                        <h2 className="text-anime-style-3">
                                            Websites that tell your brand's story
                                        </h2>
                                    </div>
                                    {/* Section Title End */}
                                    <p className="wow fadeInUp" data-wow-delay="0.25s">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium , totam rem aperiam, eaque ipsa quae ab illo inventore
                                        et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                                        ipsam voluptatem quia voluptas sit.
                                    </p>
                                    <p className="wow fadeInUp" data-wow-delay="0.5s">
                                        totam rem aperiam, eaque ipsa quae ab illo inventore et quasi
                                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                                        quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                        nesciunt.
                                    </p>
                                    <ul className="wow fadeInUp" data-wow-delay="0.75s">
                                        <li>Ease of Scalability</li>
                                        <li>Instant Impact</li>
                                        <li>Expertise and Experience</li>
                                        <li>Time Zone Aligned</li>
                                        <li>Full Flexibility</li>
                                        <li>Proactive Support</li>
                                    </ul>
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

export default PageAbout