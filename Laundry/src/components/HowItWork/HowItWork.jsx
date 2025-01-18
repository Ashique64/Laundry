import React from "react";
import "./HowItWork.scss";

const HowItWork = () => {
    const Items = [
        {
            icon: "bx bxs-truck",
            number: "1",
            title: "Book A Pickup",
            content: "Choose when and where you wish us to collect & deliver your laundry.",
        },
        {
            icon: "bx bxs-t-shirt",
            number: "2",
            title: "We Collect",
            content: "Our team collects your clothes from your doorstep",
        },
        {
            icon: "bx bxs-washer",
            number: "3",
            title: "Processing",
            content: "Choose when and where you wish us to collect & deliver your laundry.",
        },
        {
            icon: "bx bxs-package",
            number: "4",
            title: "We Deliver",
            content: "We bring back your freshly cleaned and rejuvenated clothes",
        },
    ];
    return (
        <div id="howItWork" className="howItWork">
            <div className="container">
                <div className="row title_row">
                    <div className="col-12 title_col">
                        <h5>How it work</h5>
                        <h3>follow a few easy step</h3>
                    </div>
                </div>

                <div className="row items_row">
                    {Items.map((item, index) => (
                        <div key={index} className="col-xl-3 col-lg-3 col-md-6 item_col">
                            <div className="work_item">
                                <div className="icon">
                                    <i className={item.icon}></i>
                                    <div className="number">{item.number}</div>
                                </div>
                                <div className="content">
                                    <h4>{item.title}</h4>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row button_row">
                    <div className="col-12 button_col">
                        <a href="">
                            <button id="contact">schedule a pickup</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWork;
