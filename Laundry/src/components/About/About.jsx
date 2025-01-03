import React from "react";
import "./About.scss";

const About = () => {
    return (
        <div className="about" id="about">
            <div className="container">
                <div className="row about_row">
                    <div className="col-xl-6 col-lg-6 col-md-12 item1">
                        <div className="image_section">
                            <img className="image1" src="/images/about-image-1.jpg" alt="" />
                            <img className="image2" src="/images/about-image-2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 item2">
                        <div className="text_section">
                            <h5>who we are ?</h5>
                            <h3>Helping you in doing your laundry at the finest</h3>
                            <p>
                                Mus ac magnis velit id feugiat vestibulum natoque ridiculus pharetra si. Fusce mollis in
                                suscipit fringilla condimentum ipsum dictum elit. Bibendum a erat efficitur pretium cursus
                                mi molestie ipsum.
                            </p>
                            <a href="">
                                <button>More about us</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
