import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { projects } from '../../utils/data';

const Work = ({ start, end }) => {

    const location = useLocation().pathname;


    return (
        <div className="our-work">
            <div className="container">

                <div className="row section-row align-items-center px-10">

                    {location !== "/portfolio" && <div className="col-lg-8 col-md-9">
                        <div className="section-title">
                            <h3 className="wow fadeInUp">our works</h3>
                            <h2 className="text-anime-style-3">
                                Recent Projects
                            </h2>
                        </div>
                    </div>}

                    {location === "/" && <div className="col-lg-4 col-md-3">
                        <div className="section-btn wow fadeInUp" data-wow-delay="0.25s">
                            <Link to="/portfolio" className="btn-default">
                                all portfolio
                            </Link>
                        </div>
                    </div>}

                </div>

                <div className="row px-10">

                    {projects.slice(start, end).map((project, index) => (

                        <div className="col-md-6" key={index}>

                            <div className="works-item wow fadeInUp" data-wow-delay={project.delay}>

                                <div className="works-image">
                                    <figure className="image-anime">
                                        <img src={project.img} alt={project.title} />
                                    </figure>
                                </div>

                                <div className="works-content">
                                    <h2>{project.title}</h2>
                                    <p>{project.desc}</p>
                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </div>
    )
}

export default Work