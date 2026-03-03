import React from "react";

const blogData = [
    {
        id: 1,
        image: "/assets/images/post-1.jpg",
        date: "10 April 2024",
        title: "Unlocking the Potential of AI in Business Success",
        delay: "0.25s",
    },
    {
        id: 2,
        image: "/assets/images/post-2.jpg",
        date: "10 April 2024",
        title: "Strategies for Building a Successful Distributed Team",
        delay: "0.5s",
    },
    {
        id: 3,
        image: "/assets/images/post-3.jpg",
        date: "10 April 2024",
        title: "Empowering Citizen Developers and Accelerating Innovation",
        delay: "0.75s",
    },
    {
        id: 4,
        image: "/assets/images/post-4.jpg",
        date: "10 April 2024",
        title: "Revolutionizing Software Development",
        delay: "1s",
    },
    {
        id: 5,
        image: "/assets/images/post-5.jpg",
        date: "10 April 2024",
        title: "Ensuring Compliance and Trust in Software Solutions",
        delay: "1.25s",
    },
    {
        id: 6,
        image: "/assets/images/post-7.jpg",
        date: "10 April 2024",
        title: "Creating Immersive Software Experiences",
        delay: "1.5s",
    },
    {
        id: 7,
        image: "/assets/images/post-8.jpg",
        date: "10 April 2024",
        title: "Revolutionizing Software Development",
        delay: "1s",
    },
    {
        id: 8,
        image: "/assets/images/post-5.jpg",
        date: "10 April 2024",
        title: "Ensuring Compliance and Trust in Software Solutions",
        delay: "1.25s",
    },
    {
        id: 9,
        image: "/assets/images/post-9.jpg",
        date: "10 April 2024",
        title: "Creating Immersive Software Experiences",
        delay: "1.5s",
    },
];

const OurBlogs = () => {
    return (
        <div className="latest-news our-blog">
            <div className="container">
                <div className="row">
                    {blogData.map((blog) => (
                        <div key={blog.id} className="col-lg-4 col-md-6">
                            <div
                                className="blog-item wow fadeInUp"
                                data-wow-delay={blog.delay}
                            >
                                <div className="post-featured-image">
                                    <figure className="image-anime">
                                        <a href="#">
                                            <img src={blog.image} alt={blog.title} />
                                        </a>
                                    </figure>
                                </div>

                                <div className="post-item-body">
                                    <p>
                                        <a href="#">{blog.date}</a>
                                    </p>
                                    <h2>
                                        <a href="#">{blog.title}</a>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination (Static) */}
                <div className="row">
                    <div className="col-md-12">
                        <div
                            className="post-pagination wow fadeInUp"
                            data-wow-delay="1.50s"
                        >
                            <ul className="pagination">
                                <li>
                                    <a href="#">
                                        <i className="fa-solid fa-arrow-left-long" />
                                    </a>
                                </li>
                                <li className="active">
                                    <a href="#">1</a>
                                </li>
                                <li>
                                    <a href="#">2</a>
                                </li>
                                <li>
                                    <a href="#">3</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurBlogs;