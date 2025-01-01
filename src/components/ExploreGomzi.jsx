import React from "react";
import "../index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ExploreGomzi = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <>
            <section className="middle text-start">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="sec_title position-relative text-center mb-5">
                                <h6 className="theme-cl mb-0">Aapki Business Growth ke liye transparent policies aur easy payments, hamesha!</h6>
                                <h2 className="ft-bold">Gomzi ki duniya ko explore karein!</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 text-left">
                            <Slider {...settings}>
                                <div className="px-2">
                                    <div className="gup_blg_grid_box">
                                        <div className="gup_blg_grid_thumb">
                                            <img
                                                src="images/sign-up-process.webp"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="gup_blg_grid_caption">
                                            <div className="blg_title">
                                                <h4>
                                                    <b>Easy Sign-Up Process</b>
                                                </h4>
                                            </div>
                                            <div className="blg_desc">
                                                <p>
                                                    "Join Gomzi" Button:* Click karein, basic details fill karein aur sirf 30 minutes mein registration complete karein.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <div className="gup_blg_grid_box">
                                        <div className="gup_blg_grid_thumb">
                                            <img
                                                src="images/commission-charges.webp"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="gup_blg_grid_caption">
                                            <div className="blg_title">
                                                <h4>
                                                    <b>Transparent Commission Model</b>
                                                </h4>
                                            </div>
                                            <div className="blg_desc">
                                                <p>
                                                    Har check-in par sirf *₹40, aur flat **29% service fee*—bilkul clear aur simple. GST alag se lagu hoga.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <div className="gup_blg_grid_box">
                                        <div className="gup_blg_grid_thumb">
                                            <img
                                                src="images/payment-frequency.webp"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="gup_blg_grid_caption">
                                            <div className="blg_title">
                                                <h4>
                                                    <b>Daily Payments Made Easy</b>
                                                </h4>
                                            </div>
                                            <div className="blg_desc">
                                                <p>
                                                    Aapke *roz ke pending dues* automatically aapke bank account mein transfer ho jate hain—no extra effort!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <div className="gup_blg_grid_box">
                                        <div className="gup_blg_grid_thumb">
                                            <img
                                                src="images/photography.webp"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="gup_blg_grid_caption">
                                            <div className="blg_title">
                                                <h4>
                                                    <b>Professional Photography Included</b>
                                                </h4>
                                            </div>
                                            <div className="blg_desc">
                                                <p>
                                                    Aapke gym ka *professional photo shoot* kiya jata hai, jo naye clients ko attract karne mein madad karega (T&C apply).
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <div className="gup_blg_grid_box">
                                        <div className="gup_blg_grid_thumb">
                                            <img
                                                src="images/ai-powered.webp"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="gup_blg_grid_caption">
                                            <div className="blg_title">
                                                <h4>
                                                    <b>AI-Powered Revenue Growth</b>
                                                </h4>
                                            </div>
                                            <div className="blg_desc">
                                                <p>
                                                    *Dynamic pricing system* se aapka revenue barhane ke liye AI ka use hota hai, jo hamesha aapke profit ko maximize karega.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <div className="gup_blg_grid_box">
                                        <div className="gup_blg_grid_thumb">
                                            <img
                                                src="images/gomzi-nutrition.webp"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="gup_blg_grid_caption">
                                            <div className="blg_title">
                                                <h4>
                                                    <b>GN Supplements Income</b>
                                                </h4>
                                            </div>
                                            <div className="blg_desc">
                                                <p>
                                                    Apne gym clients ko Gomzi Nutrition supplements refer karke extra revenue earn karein. Har sale par aapko commission milega!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <div className="gup_blg_grid_box">
                                        <div className="gup_blg_grid_thumb">
                                            <img
                                                src="images/fgiit-academy-class.webp"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="gup_blg_grid_caption">
                                            <div className="blg_title">
                                                <h4>
                                                    <b>FGIIT Academy Classes Income</b>
                                                </h4>
                                            </div>
                                            <div className="blg_desc">
                                                <p>
                                                    Apne gym me FGIIT Academy ke fitness aur nutrition classes run karke commission earn karein. Knowledge share karein aur income bhi badhayein!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <div className="gup_blg_grid_box">
                                        <div className="gup_blg_grid_thumb">
                                            <img
                                                src="images/ready-to-go.webp"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="gup_blg_grid_caption">
                                            <div className="blg_title">
                                                <h4>
                                                    <b>Ready to Grow</b>
                                                </h4>
                                            </div>
                                            <div className="blg_desc">
                                                <p>
                                                    Abhi join karein aur apne gym ke naye clients aur revenue mein boost dekhein!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ExploreGomzi;
