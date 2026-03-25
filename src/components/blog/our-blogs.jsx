import React from "react";
import { blogData } from "../../utils/data";
import { Link, useLocation } from "react-router-dom";

const OurBlogs = ({ start, end }) => {
  const location = useLocation().pathname;

  return (
    <div className="latest-news our-blog">
      <div className="container">
        {location === "/" && (
          <div className="row section-row align-items-center px-8">
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
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  to="/blog"
                  className="btn-default"
                >
                  view all articles
                </Link>
              </div>
              {/* Section Btn End */}
            </div>
          </div>
        )}
        <div className="row px-8">
          {blogData.slice(start, end).map((blog) => (
            <div className="col-lg-4 col-md-6">
              {/* <Link to={`/blog/${blog.id}`} key={blog.id}> */}
              <div
                className="blog-item wow fadeInUp"
                data-wow-delay={blog.delay}
              >
                <Link to={`/blog/${blog.id}`} key={blog.id}>
                  <div className="post-featured-image">
                    <figure className="image-anime">
                      <a href="#">
                        <img src={blog.image} alt={blog.title} />
                      </a>
                    </figure>
                  </div>
                </Link>

                <div className="post-item-body">
                  <p>
                    <a href="#">{blog.date}</a>
                  </p>
                  <h2>
                    <Link to={`/blog/${blog.id}`} key={blog.id}>
                      {blog.title}
                    </Link>
                  </h2>
                  <p>{blog.paragraph.split(" ").slice(0, 30).join(" ")}...</p>
                </div>
              </div>
              {/* </Link> */}
            </div>
          ))}
        </div>

        {/* Pagination (Static) */}
        {/* <div className="row">
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
                </div> */}
      </div>
    </div>
  );
};

export default OurBlogs;
