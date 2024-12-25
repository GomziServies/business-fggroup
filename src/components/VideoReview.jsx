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
                                    src="/images/video-review-1.webp"
                                    className="img-fluid"
                                    alt="FG Group"
                                    width="100%"
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
                                  Dt.Chirag Pandey
                                </h2>
                                <p>
                                  Dt. Chirag Pandey, a nutrition educator
                                  highlighted how our support enriched his
                                  career. Through our platform, he successfully
                                  transitioned to teaching nutrition, adding
                                  another dimension to his expertise. His video
                                  testimonial reflects his appreciation for the
                                  growth opportunities we've provided.
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
                        <div className="px-2">
                          <div className="video-rating row align-items-center">
                            <div className="col-lg-4">
                              <div className="review-box position-relative">
                                <div>
                                  <img
                                    src="/images/video-review-2.webp"
                                    className="img-fluid"
                                    alt="FG Group"
                                    width="100%"
                                  />
                                  <div className="video-btn play-btn">
                                    <a
                                      onClick={() =>
                                        openVideoModal("fDjDB87BhR0")
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
                                  Mr. Hiren Jogiya
                                </h2>
                                <p>
                                  Mr. Hiren Jogiya, the proud owner of Bossman
                                  Clothings, shared his heartfelt appreciation
                                  for our support in growing his clothing
                                  business. With our assistance, his brand has
                                  reached new heights, and in his video
                                  testimonial, he expressed his gratitude for
                                  the positive impact we've made.
                                </p>
                                <div className="review-box-btn text-start">
                                  <a
                                    onClick={() =>
                                      openVideoModal("fDjDB87BhR0")
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
                        <div className="px-2">
                          <div className="video-rating row align-items-center">
                            <div className="col-lg-4">
                              <div className="review-box position-relative">
                                <div>
                                  <img
                                    src="/images/video-review-3.webp"
                                    className="img-fluid"
                                    alt="FG Group"
                                    width="100%"
                                  />
                                  <div className="video-btn play-btn">
                                    <a
                                      onClick={() =>
                                        openVideoModal("AljwdDjKUw0")
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
                                  Dr. Milan Modi
                                </h2>
                                <p>
                                  Dr. Milan Modi, a dedicated professional
                                  running a successful clinic, acknowledged our
                                  contribution to the growth of his practice. In
                                  his video feedback, he expressed gratitude for
                                  the tailored solutions that have helped him
                                  better serve his patients and expand his
                                  reach.
                                </p>
                                <div className="review-box-btn text-start">
                                  <a
                                    onClick={() =>
                                      openVideoModal("AljwdDjKUw0")
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
                        <div className="px-2">
                          <div className="video-rating row align-items-center">
                            <div className="col-lg-4">
                              <div className="review-box position-relative">
                                <div>
                                  <img
                                    src="/images/video-review-4.webp"
                                    className="img-fluid"
                                    alt="FG Group"
                                    width="100%"
                                  />
                                  <div className="video-btn play-btn">
                                    <a
                                      onClick={() =>
                                        openVideoModal("g2wzrJRz7ec")
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
                                  Asha Koshiya
                                </h2>
                                <p>
                                  Asha Koshiya, the founder of Fire Cook, runs a
                                  thriving cooking business that has grown
                                  significantly with our help. In her video
                                  review, she thanked us for the strategies and
                                  support that enabled her to take her passion
                                  for cooking to the next level, turning it into
                                  a successful venture.
                                </p>
                                <div className="review-box-btn text-start">
                                  <a
                                    onClick={() =>
                                      openVideoModal("g2wzrJRz7ec")
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
                                    src="/images/video-review-1.webp"
                                    className="img-fluid"
                                    alt="FG Group"
                                    width="100%"
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
                                <h2 className="h2-fs">Dt.Chirag Pandey</h2>
                                <p>
                                  Dt. Chirag Pandey, a nutrition
                                  educator highlighted how our support enriched
                                  his career. Through our platform, he
                                  successfully transitioned to teaching
                                  nutrition. His video testimonial reflects his
                                  appreciation for the growth opportunities
                                  we've provided.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="px-0">
                          <div className="video-rating row align-items-center">
                            <div className="col-md-4">
                              <div className="review-box position-relative">
                                <div>
                                  <img
                                    src="/images/video-review-2.webp"
                                    className="img-fluid"
                                    alt="FG Group"
                                    width="100%"
                                  />
                                  <div className="video-btn play-btn">
                                    <a
                                      onClick={() =>
                                        openVideoModal("fDjDB87BhR0")
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
                                <h2 className="h2-fs">Mr. Hiren Jogiya</h2>
                                <p>
                                  Mr. Hiren Jogiya, the proud owner of Bossman
                                  Clothings, shared his heartfelt appreciation
                                  for our support in growing his clothing
                                  business. With our assistance, his brand has
                                  reached new heights, he expressed his
                                  gratitude for the positive impact we've made.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="px-0">
                          <div className="video-rating row align-items-center">
                            <div className="col-md-4">
                              <div className="review-box position-relative">
                                <div>
                                  <img
                                    src="/images/video-review-3.webp"
                                    className="img-fluid"
                                    alt="FG Group"
                                    width="100%"
                                  />
                                  <div className="video-btn play-btn">
                                    <a
                                      onClick={() =>
                                        openVideoModal("AljwdDjKUw0")
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
                                <h2 className="h2-fs">Dr. Milan Modi</h2>
                                <p>
                                  Dr. Milan Modi, a dedicated professional
                                  running a successful clinic, acknowledged our
                                  contribution to the growth of his practice. In
                                  his video feedback, he expressed gratitude for
                                  the tailored solutions that have helped him
                                  better serve his patients and expand his
                                  reach.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="px-0">
                          <div className="video-rating row align-items-center">
                            <div className="col-md-4">
                              <div className="review-box position-relative">
                                <div>
                                  <img
                                    src="/images/video-review-4.webp"
                                    className="img-fluid"
                                    alt="FG Group"
                                    width="100%"
                                  />
                                  <div className="video-btn play-btn">
                                    <a
                                      onClick={() =>
                                        openVideoModal("g2wzrJRz7ec")
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
                                <h2 className="h2-fs">Asha Koshiya</h2>
                                <p>
                                  Asha Koshiya, the founder of Fire Cook, runs a
                                  thriving cooking business that has grown
                                  significantly with our help. In her video
                                  review, she thanked us for the strategies and
                                  support that enabled her to take her passion
                                  for cooking to the next level, turning it into
                                  a successful venture.
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
