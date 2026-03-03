import React from "react";

const portfolioData = [
    {
        id: 1,
        title: "Operation Atlas",
        image: "/assets/images/works-img-1.jpg",
        category: ["website", "graphics"],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        title: "Quantum Quest",
        image: "/assets/images/works-img-2.jpg",
        category: ["digital", "website"],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 3,
        title: "Blue Horizon Initiative",
        image: "/assets/images/works-img-3.jpg",
        category: ["digital"],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 4,
        title: "Project Alpha",
        image: "/assets/images/works-img-4.jpg",
        category: ["app"],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 5,
        title: "Terra Nova",
        image: "/assets/images/works-img-3.jpg",
        category: ["app"],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 6,
        title: "Infinity Initiative",
        image: "/assets/images/works-img-4.jpg",
        category: ["graphics"],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];

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
                    <div className="col-lg-12">
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
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurPortfolio;