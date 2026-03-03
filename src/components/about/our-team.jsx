import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const teamData = [
    {
        id: 1,
        name: "Arita Banson",
        role: "Founder & CEO",
        imageTextbox: "/assets/images/team-1.jpg",
    },
    {
        id: 2,
        name: "John Doe",
        role: "Sr. Development",
        imageTextbox: "/assets/images/team-2.jpg",
    },
    {
        id: 3,
        name: "Arita Doe",
        role: "Sr. Designer",
        imageTextbox: "/assets/images/team-3.jpg",
    },
    {
        id: 4,
        name: "Banson Doe",
        role: "Sr. Manager",
        imageTextbox: "/assets/images/team-4.jpg",
    },
    {
        id: 5,
        name: "Muhammad Misah Ul Hassan",
        role: "Sr. Manager",
        imageTextbox: "/assets/images/team-5.png",
    },
];

const OurTeam = () => {
    return (
        <div className="our-team">
            <div className="container">

                {/* Section Title */}
                <div className="row section-row align-items-center">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <h3>Our Team</h3>
                            <h2>Meet the Expert</h2>
                        </div>
                    </div>
                </div>

                {/* Slider */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    autoplay={{ delay: 2500 }}
                    loop={true}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        576: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 },
                    }}
                >
                    {teamData.map((member) => (
                        <SwiperSlide key={member.id}>

                            <div className="team-member-item">

                                <div className="team-image">
                                    <figure>
                                        <img
                                            src={member.imageTextbox}
                                            alt={member.name}
                                            className="img-fluid"
                                        />
                                        <div class="our-team-social-icon">
                                            <ul>
                                                <li><a href="#" class="social-icon"><i class="fa-brands fa-instagram"></i></a></li>
                                                <li><a href="#" class="social-icon"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                                <li><a href="#" class="social-icon"><i class="fa-brands fa-twitter"></i></a></li>
                                                <li><a href="#" class="social-icon"><i class="fa-brands fa-facebook-f"></i></a></li>
                                            </ul>
                                        </div>
                                    </figure>
                                </div>
                                <div className="team-body">
                                    <div className="team-content">
                                        <h3>{member.name}</h3>
                                        <p>{member.role}</p>
                                    </div>
                                    <div className="team-icon">
                                        <a href="#">
                                            <img src="/assets/images/icon-share.svg" alt="" />
                                        </a>
                                    </div>
                                </div>

                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    );
};

export default OurTeam;