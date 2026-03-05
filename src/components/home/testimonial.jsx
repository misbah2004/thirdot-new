import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from '../../utils/data';
const Testimonial = () => {

    return (
        <>
            <div>
                <section className="testimonials-section">
                    <div className="container">
                        <div className="section-title">
                            <h3 className="wow fadeInUp">client testimonials</h3>
                            <h2 className="text-anime-style-3">
                                Our customers love us.
                            </h2>
                        </div>

                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={30}
                            // pagination={{ clickable: true, dynamicBullets: false }}
                            autoplay={{ delay: 3000 }}
                            loop={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1
                                },
                                768: {
                                    slidesPerView: 2
                                },
                                1024: {
                                    slidesPerView: 3
                                }
                            }}
                        >
                            {testimonials.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <div className="testimonial-rating">
                                                <img src={item.iconStar} alt="Star Rating" />
                                            </div>
                                            <div className="testimonial-content">
                                                <p>
                                                    {item.message}
                                                </p>
                                            </div>
                                            <div className="testimonial-body">
                                                <figure className="image-anime">
                                                    <img src={item.image} alt={item.name} />
                                                </figure>
                                                <div className="testimonial-author-title">
                                                    <h2>{item.name}</h2>
                                                    <p>{item.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                </section>
            </div>
        </>
    )
}

export default Testimonial