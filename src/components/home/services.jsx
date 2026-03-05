import React from 'react'

const Services = () => {

    const services = [
        {
            title: "Mobile Application Development",
            desc: "We create mobile apps that aren’t just functional — they’re addictive. Using Flutter, Android, and iOS, we deliver apps that load fast, look beautiful, and scale with your business. Whether it’s an on-demand app, a mobile e-commerce store, or a secure enterprise solution, we make sure your users love every tap, swipe, and click.",
            img: "/assets/images/service-img-1.jpg",
            delay: "0.25s"
        },
        {
            title: "CMS Application Development",
            desc: "We design web solutions that work as hard as you do. From ERP, CRM, and HRMS platforms that keep your teams productive, to POS systems, booking platforms, and e-commerce dashboards that keep customers happy — our web apps are powerful, secure, and future-ready. Add to that corporate websites and custom portals that impress at first click, and you’ve got the perfect digital backbone for your business.",
            img: "/assets/images/service-img-2.jpg",
            delay: "0.5s"
        },
        {
            title: "Digital Marketing",
            desc: "We don’t just market your brand — we make it unforgettable. From scroll-stopping social media posts to SEO that puts you on Google’s front page, and from laser-targeted Google & Meta ads to email campaigns that actually convert — we handle it all. Our creative designs and data-driven strategies make sure your brand gets the attention (and sales) it deserves.",
            img: "/assets/images/service-img-3.jpg",
            delay: "0.75s"
        },
        {
            title: "Graphics Designing",
            desc: "Our Graphics Designing service delivers creative, modern, and brand-focused visual designs that enhance your business identity. We specialize in logos, social media creatives, banners, brochures, packaging, and complete brand kits. With attention to detail and industry-standard design practices, we ensure high-quality visuals that communicate your message clearly and leave a lasting impact.",
            img: "/assets/images/service-img-4.jpg",
            delay: "1s"
        },
        {
            title: "Ecommerce Store",
            desc: "eCommerce websites, SaaS platforms, mobile apps, startups, and growing businesses looking to improve user experience and increase engagement. Whether you are launching a new product or enhancing an existing platform, we design intuitive and visually appealing interfaces that help users navigate easily, stay longer, and convert faster. Our user-focused approach ensures your digital product meets customer expectations while supporting your business growth.",
            img: "/assets/images/service-img-5.jpg",
            delay: "1.25s"
        },
        {
            title: "UI UX Design",
            desc: "Our UI/UX Design service delivers intuitive, visually appealing, and user-focused digital experiences that enhance usability and increase customer satisfaction. We design interfaces that are easy to navigate, visually consistent, and optimized for conversions across web and mobile platforms.",
            img: "/assets/images/service-img-6.jpg",
            delay: "1.5s"
        }
    ]

    return (
        <div className="our-services">
            <div className="container">

                <div className="row section-row align-items-center">
                    <div className="col-lg-7 col-md-7">
                        <div className="section-title">
                            <h3 className="wow fadeInUp">our services</h3>
                            <h2 className="text-anime-style-3">Solutions We Provide</h2>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-5">
                        <div className="section-btn">
                            <a href="#" className="btn-default wow fadeInUp" data-wow-delay="0.25s">
                                view all services
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row">

                    {services.map((service, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>

                            <div className="service-item wow fadeInUp" data-wow-delay={service.delay}>

                                <div className="service-image">
                                    <figure className="image-anime">
                                        <img src={service.img} alt={service.title} />
                                    </figure>
                                </div>
                                <div className="service-content">
                                    <div className="service-content-title">
                                        <h2>{service.title}</h2>
                                        <a href="#">
                                            <img src="/assets/images/arrow.svg" alt="" />
                                        </a>
                                    </div>

                                    <p>{service.desc}</p>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Services