import React from 'react'

const News = () => {
    return (
        <>
            <div>
                <div className="latest-news">
                    <div className="container">
                        <div className="row section-row align-items-center">
                            <div className="col-lg-6 col-md-8">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">Latest Blog &amp; Articles</h3>
                                    <h2 className="text-anime-style-3">
                                        The latest insights you need to know
                                    </h2>
                                </div>
                                {/* Section Title End */}
                            </div>
                            <div className="col-lg-6 col-md-4">
                                {/* Section Btn Start */}
                                <div className="section-btn wow fadeInUp" data-wow-delay="0.25s">
                                    <a href="#" className="btn-default">
                                        view all articles
                                    </a>
                                </div>
                                {/* Section Btn End */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                {/* Blog Item Start */}
                                <div className="blog-item wow fadeInUp" data-wow-delay="0.25s">
                                    {/* Blog Image Start */}
                                    <div className="post-featured-image">
                                        <figure className="image-anime">
                                            <a href="#">
                                                <img src="/assets/images/post-1.jpg" alt="" />
                                            </a>
                                        </figure>
                                    </div>
                                    {/* Blog Image End */}
                                    {/* Blog Content Start */}
                                    <div className="post-item-body">
                                        <p>
                                            <a href="#">10 April 2024</a>
                                        </p>
                                        <h2>
                                            <a href="#">
                                                Unlocking the Potential of AI in Business Success
                                            </a>
                                        </h2>
                                    </div>
                                    {/* Blog Content End */}
                                </div>
                                {/* Blog Item End */}
                            </div>
                            <div className="col-lg-4 col-md-6">
                                {/* Blog Item Start */}
                                <div className="blog-item wow fadeInUp" data-wow-delay="0.5s">
                                    {/* Blog Image Start */}
                                    <div className="post-featured-image">
                                        <figure className="image-anime">
                                            <a href="#">
                                                <img src="/assets/images/post-2.jpg" alt="" />
                                            </a>
                                        </figure>
                                    </div>
                                    {/* Blog Image End */}
                                    {/* blog content Start */}
                                    <div className="post-item-body">
                                        <p>
                                            <a href="#">10 April 2024</a>
                                        </p>
                                        <h2>
                                            <a href="#">
                                                Strategies for Building a Successful Distributed Team
                                            </a>
                                        </h2>
                                    </div>
                                    {/* Blog Content End */}
                                </div>
                                {/* Blog Item End */}
                            </div>
                            <div className="col-lg-4 col-md-6">
                                {/* Blog Item Start */}
                                <div className="blog-item wow fadeInUp" data-wow-delay="0.75s">
                                    {/* Blog Image Start */}
                                    <div className="post-featured-image">
                                        <figure className="image-anime">
                                            <a href="#">
                                                <img src="/assets/images/post-3.jpg" alt="" />
                                            </a>
                                        </figure>
                                    </div>
                                    {/* Blog Image End */}
                                    {/* Blog Content Start */}
                                    <div className="post-item-body">
                                        <p>
                                            <a href="#">10 April 2024</a>
                                        </p>
                                        <h2>
                                            <a href="#">
                                                Empowering Citizen Developers and Accelerating Innovation
                                            </a>
                                        </h2>
                                    </div>
                                    {/* Blog Content End */}
                                </div>
                                {/* Blog Item End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News