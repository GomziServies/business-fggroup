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
        autoplay: true,
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
                                                    <b>Sign-up Process</b>
                                                </h4>
                                            </div>
                                            <div className="blg_desc">
                                                <p>
                                                    "Join Gomzi" button pe click karein, apne basic details share karein and sign up in just 30 minutes.
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
                                                    <b>Commission Charges</b>
                                                </h4>
                                            </div>
                                            <div className="blg_desc">
                                                <p>
                                                    Flat 29% service fee aur Rs 40 har check-in pe. GST as applicable.
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
                                                    <b>Payment Frequency</b>
                                                </h4>
                                            </div>
                                            <div className="blg_desc">
                                                <p>
                                                    Sare daily pending dues aapke bank account me automatically credit ho jate hai.
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
                                                    <b>Photography</b>
                                                </h4>
                                            </div>
                                            <div className="blg_desc">
                                                <p>
                                                    Property ka professional photo shoot kiya jata hai T&C applied
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2">
                                    <div className="gup_blg_grid_box">
                                        <div className="gup_blg_grid_thumb">
                                            <img
                                                src="images/pricing-policy.webp"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="gup_blg_grid_caption">
                                            <div className="blg_title">
                                                <h4>
                                                    <b>Pricing Policy</b>
                                                </h4>
                                            </div>
                                            <div className="blg_desc">
                                                <p>
                                                    AI ki madad se dynamic pricing mechanism taki aapka revenue maximise ho sake.
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
