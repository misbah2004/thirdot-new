import React from 'react'

const OverCompany = () => {
    return (
        <>
            <div>
                <div className="overview-company">
                    <div className="container">
                        <div className="row section-row align-items-center">
                            <div className="col-lg-12">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">ourview comapny</h3>
                                    <h2 className="text-anime-style-3">Stats that matter</h2>
                                </div>
                                {/* Section Title End */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                {/* Counter Box Start */}
                                <div className="counter-box">
                                    <h3>
                                        <em>#</em>
                                        <span>1</span> IT Services
                                    </h3>
                                    <p>Company In UK</p>
                                </div>
                                {/* Counter Box End */}
                            </div>
                            <div className="col-lg-3 col-md-6">
                                {/* Counter Box Start */}
                                <div className="counter-box">
                                    <h3>
                                        <span className="counter">300</span>
                                        <em>+</em>
                                    </h3>
                                    <p>Global Clients</p>
                                </div>
                                {/* Counter Box End */}
                            </div>
                            <div className="col-lg-3 col-md-6">
                                {/* Counter Box Start */}
                                <div className="counter-box">
                                    <h3>
                                        <span className="counter">21</span>
                                        <em>+</em> years
                                    </h3>
                                    <p>In Development</p>
                                </div>
                                {/* Counter Box End */}
                            </div>
                            <div className="col-lg-3 col-md-6">
                                {/* Counter Box Start */}
                                <div className="counter-box">
                                    <h3>
                                        <em>$</em>
                                        <span className="counter">50</span>
                                        <em>+</em> Million
                                    </h3>
                                    <p>Total Revenue</p>
                                </div>
                                {/* Counter Box End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OverCompany