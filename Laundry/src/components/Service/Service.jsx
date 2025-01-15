import React from "react";
import "./Service.scss";

const Service = () => {
    const cardItems = [
        {
            icon: "bx bxs-truck",
            title: "Laundry Pickup",
            para: "Enjoy the convenience of hassle-free laundry pickup at your doorstep. We ensure a seamless and efficient service, saving you time and effort.",
        },
        {
            icon: "bx bxs-washer",
            title: "Wash And Fold",
            para: "Our wash and fold service takes care of your laundry with precision and care. Fresh, neatly folded clothes delivered right to you.",
        },
        {
            icon: "bx bxs-discount",
            title: "Bulk Discount",
            para: "Save more with our bulk laundry discount plans. Perfect for families or businesses looking to maximize value while ensuring quality service.",
        },
        {
            icon: "bx bxs-t-shirt",
            title: "Dry Cleaning",
            para: "Get your clothes professionally cleaned with our top-notch dry cleaning service. Delicate fabrics and tough stains are handled with care.",
        },
    ];

    return (
        <div id="service" className="service">
            <div className="row shape_row">
                <div className="col-6 item1">
                    <div className="shape-1"></div>
                </div>
                <div className="col-6 item2">
                    <div className="shape-2"></div>
                </div>
            </div>
            <div className="container">
                <div className="row title_row">
                    <div className="col-12 title_col">
                        <h5>our services</h5>
                        <h3>We are here to serve your laundry needs</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ducimus amet voluptates deserunt
                            velit dolorum quidem rem
                        </p>
                    </div>
                </div>

                <div className="row items_row">
                    {cardItems.map((item, index) => (
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 item_col">
                            <div className="card">
                                <div className="icon">
                                    <i className={item.icon}></i>
                                </div>
                                <h4>{item.title}</h4>
                                <p>{item.para}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="row shape_row2">
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

export default Service;
