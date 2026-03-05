import React from "react";
// import { portfolioData } from "../../utils/data";
import Work from "../home/work";

const categories = [
    "all",
    "digital",
    "website",
    "app",
    "graphics",
];

const OurPortfolio = () => {
    return (
        <div className="our-projects">
            <div className="container">

                {/* Filter Buttons */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="our-projects-nav">
                            <ul>
                                {categories.map((cat, index) => (
                                    <li key={index}>
                                        {cat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Projects */}
                    {/* <div className="col-lg-12">
                        <div className="row project-item-boxes">
                            {portfolioData.map((project) => (
                                <div
                                    key={project.id}
                                    className={`col-md-6 project-item-box ${project.category.join(
                                        " "
                                    )}`}
                                >
                                    <div className="works-item">
                                        <div className="works-image">
                                            <figure className="image-anime">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="img-fluid"
                                                />
                                            </figure>
                                        </div>

                                        <div className="works-content">
                                            <h2>{project.title}</h2>
                                            <p>{project.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}
                    <Work />

                </div>
            </div>
        </div>
    );
};

export default OurPortfolio;