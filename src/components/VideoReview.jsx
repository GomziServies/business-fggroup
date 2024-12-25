import React, { useState, useEffect } from "react";
import "../index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoReview = ({ openVideoModal }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <>
      <section className="space text-start">
        <div className="container-fluid">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-7 col-md-9 col-sm-12">
                <div className="sec_title position-relative text-center mb-5">
                  <h6 className="theme-cl mb-0">What Our</h6>
                  <h2 className="ft-bold">Clients Are Saying</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-11 px-0">
                <div
                  className="p-5 p-md-3 p-lg-5 d-md-block d-none"
                  style={{ borderRadius: "40px" }}
                >
                  <div className="item">
                    <div className="slider-box">
                      <Slider {...settings}>
                        <div className="px-2">
                          <div className="video-rating row align-items-center">
                            <div className="col-lg-4">
                              <div className="review-box position-relative">
                                <div>
                                  <img
                                    src="/images/affordable-list.webp"
                                    className="img-fluid"
                                    alt="FG Group"
                                  />
                                  <div className="video-btn play-btn">
                                    <a
                                      onClick={() =>
                                        openVideoModal("m_GpoDeW1QU")
                                      }
                                      data-flashy-type="video"
                                      className="custom clickof"
                                      aria-label="Fg Group"
                                    >
                                      <span className="newthing">
                                        <i className="fas fa-play"></i>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-8">
                              <div className="review-box-text ml-4">
                                <h2 className="h2-fs text-start">
                                  Jayshukh kakriya
                                </h2>
                                <p>
                                  As someone who was already a teacher of
                                  chemistry, I was pleasantly surprised by how
                                  much I enjoyed the Diploma in Nutrition course
                                  offered by FGIIT. The course not only gave me
                                  a deeper understanding of the importance of
                                  nutrition but also taught me how to apply...
                                </p>
                                <div className="review-box-btn text-start">
                                  <a
                                    onClick={() =>
                                      openVideoModal("m_GpoDeW1QU")
                                    }
                                    className="custom clickof"
                                  >
                                    <i className="fas fa-play"></i>Watch Video
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>
                <div className="d-md-none d-block">
                  <div className="item">
                    <div className="slider-box">
                      <Slider {...settings}>
                        <div className="px-0">
                          <div className="video-rating row align-items-center">
                            <div className="col-md-4">
                              <div className="review-box position-relative">
                                <div>
                                  <img
                                    src="/images/affordable-list.webp"
                                    className="img-fluid"
                                    alt="FG Group"
                                  />
                                  <div className="video-btn play-btn">
                                    <a
                                      onClick={() =>
                                        openVideoModal("m_GpoDeW1QU")
                                      }
                                      className="custom clickof"
                                      aria-label="Fg Group"
                                    >
                                      <span className="newthing">
                                        <i className="fas fa-play"></i>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-8 text-center">
                              <div className="review-box-text">
                                <h2 className="h2-fs">Jayshukh kakriya</h2>
                                <p>
                                  As someone who was already a teacher of
                                  chemistry, I was pleasantly surprised by how
                                  much I enjoyed the Diploma in Nutrition course
                                  offered by FGIIT. The course not only gave me
                                  a deeper understanding of the importance of
                                  nutrition but also taught me how to apply...
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoReview;
