import React from "react";
import "./Hero.scss";

const Hero = () => {
    return (
        <div id="home" className="hero">
            <div className="container">
                <div className="row hero_row">
                    <div className="col-xl-6 col-lg-6 col-md-12 item1">
                        <div className="text_section">
                            <h5>We are passionate about Laundry</h5>
                            <h3>
                                Laundry <span>&</span> <br />
                                Dry Cleaning Service
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
                                consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <div className="hero_buttons">
                                <a href="#contact">
                                    <button className="order_now">Order Now</button>
                                </a>
                                <a className="video_btn" href="#">
                                    <i className="bx bx-play"></i>
                                    <a className="video"> Watch Video</a>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 item2">
                        <div className="img_section">
                            <img className="image1" src="/images/Laundry-hero-3.png" alt="Hero Image" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row shape_row">
                <div className="col-6 item1">
                    <div className="shape-1"></div>
                </div>
                <div className="col-6 item2">
                    <div className="shape-2"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
