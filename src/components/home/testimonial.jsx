import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: "Ali Khan",
            role: "CEO, TechSoft",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            message: "Amazing service! Highly professional team and great support."
        },
        {
            id: 2,
            name: "Sara Ahmed",
            role: "Marketing Head",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            message: "Our sales increased after working with them. Recommended!"
        },
        {
            id: 3,
            name: "Usman Tariq",
            role: "Founder, StartupX",
            image: "https://randomuser.me/api/portraits/men/12.jpg",
            message: "Top-notch development skills and smooth communication."
        },
        {
            id: 4,
            name: "Ayesha Noor",
            role: "UI Designer",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            message: "Very creative team. They understand modern UI trends."
        }
    ];
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
                                    <div className="testimonial-card">
                                        <img src={item.image} alt={item.name} />
                                        <p className="message">"{item.message}"</p>
                                        <h4>{item.name}</h4>
                                        <span>{item.role}</span>
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