import React from "react";
import { services } from "../../utils/data";



const PageServices = () => {
  return (
    <div className="our-services page-service">
      <div className="container">
        <div className="row px-10">
          {services.map((service) => (
            <div className="col-lg-4 col-md-6" key={service.id}>
              <div
                className="service-item wow fadeInUp"
                data-wow-delay={service.delay}
              >
                <div className="service-content">
                  <div className="service-content-title">
                    <h2>{service.title}</h2>
                    <a href="#">
                      <img src="/assets/images/arrow.svg" alt="" />
                    </a>
                  </div>
                  <p>{service.description}</p>
                </div>

                <div className="service-image">
                  <figure className="image-anime">
                    <img src={service.image} alt={service.title} />
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageServices;