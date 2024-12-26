import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import "../assets/css/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeRecentActivity from "../components/HomeRecentActivity";
import WhatsappBtn from "../components/WhatsappBtn";
import WhatsappBtnMain from "../components/WhatsappBtnMain";
import VideoReview from "../components/VideoReview";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openVideoModal = (url) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };

  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Welcome to Our Platform - Explore Listings &amp; Grow Your Business
        </title>
        <meta
          name="description"
          content="Discover top business listings and services. Add your business, connect with customers, and explore opportunities to grow your brand on our platform!"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="images/favicon.ico"
        />
        <link href="css/styles.css" rel="stylesheet" />
      </Helmet>
      <WhatsappBtnMain
        message={"Hello, I wanted to know more about Clinical Diets details. "}
        options={{ pageRef: true }}
      />
      <>
        {loading && <div className="preloader" />}
        <div id="main-wrapper">
          <Header />
          <div className="clearfix" />
          <div className="home-banner home-7" style={{ marginTop: "70px" }}>
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="pe-3">
                    <div className="banner_caption text-left">
                      <h1 className="banner_title ft-normal mb-md-1 mb-2">
                        Transform Your GYM with{" "}
                        <span className="theme-cl">Gomzi's Gym Network</span>
                      </h1>
                      <p className="fs-lg fw-light banner_decription">
                        Transform your gym with GOMZI's Gym Network!
                        Revolutionize fitness management with cutting-edge
                        technology, streamlined operations, and an unmatched
                        member experience. GOMZI's network empowers gym owners
                        to optimize resources, connect seamlessly, and drive
                        success like never before. Take your gym to the next
                        level today!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-12 col-sm-12 col-12">
                  <div className="imgSlide">
                    <div className="singleSlide">
                      <img
                        src="images/imgSlide-01.png"
                        className="img"
                        alt="Img Slide"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blockWrap">
              <div className="block" />
              <div className="block2" />
            </div>
          </div>
          <section className="pt-4 pb-0 text-start">
            <div className="container">
              <div className="row justify-content-between g-4">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="offerWrap">
                    <div className="offerCaps">
                      <h4 className="title">
                        Building a Wealthier and Healthier You
                      </h4>
                      <p>
                        At GOMZI, Boost your revenue! Empowering gym owners with
                        innovative tools to attract members, grow income, and
                        achieve financial success while promoting wellness.
                      </p>
                    </div>
                    <div className="slice">
                      <img
                        src="images/imgSlide-04.png"
                        className="img"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="offerWrap offer-02">
                    <div className="offerCaps">
                      <h4 className="title">
                        Become a Top Gym in your locality
                      </h4>
                      <p>
                        Rise to the top in your locality with GOMZI's Top Build
                        Marketing ! Enhance your gym's appeal, attract more
                        members, and dominate the fitness scene with innovative
                        solutions tailored for your success.
                      </p>
                    </div>
                    <div className="slice">
                      <img
                        src="images/imgSlide-03.png"
                        className="img"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <HomeRecentActivity />
          <section className="space gray">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="sec_title position-relative text-center mb-5">
                    <h6 className="mb-0 theme-cl">Popular Features</h6>
                    <h2 className="ft-bold">Our Features</h2>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-4 col-6">
                  <div className="cats-wrap text-center">
                    <div className="Goodup-catg-wrap">
                      <div className="Goodup-catg-icon">
                        <img
                          src="images/viral-marketing.png"
                          className="img"
                          alt="Img Slide"
                        />
                      </div>
                      <div className="Goodup-catg-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">
                          Verified Gym Listings
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="cats-wrap text-center">
                    <div className="Goodup-catg-wrap">
                      <div className="Goodup-catg-icon">
                        <img
                          src="images/group.png"
                          className="img"
                          alt="Img Slide"
                        />
                      </div>
                      <div className="Goodup-catg-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">
                          Fitness Classes Finder
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="cats-wrap text-center">
                    <div className="Goodup-catg-wrap">
                      <div className="Goodup-catg-icon">
                        <img
                          src="images/trainer.png"
                          className="img"
                          alt="Img Slide"
                        />
                      </div>
                      <div className="Goodup-catg-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">
                          Trainer Matching Service
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="cats-wrap text-center">
                    <div className="Goodup-catg-wrap">
                      <div className="Goodup-catg-icon">
                        <img
                          src="images/membership-card.png"
                          className="img"
                          alt="Img Slide"
                        />
                      </div>
                      <div className="Goodup-catg-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">
                          Flexible Membership
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="cats-wrap text-center">
                    <div className="Goodup-catg-wrap">
                      <div className="Goodup-catg-icon">
                        <img
                          src="images/virtual-reality-fitness.png"
                          className="img"
                          alt="Img Slide"
                        />
                      </div>
                      <div className="Goodup-catg-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">
                          Virtual Gym Tours
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="cats-wrap text-center">
                    <div className="Goodup-catg-wrap">
                      <div className="Goodup-catg-icon">
                        <img
                          src="images/rating.png"
                          className="img"
                          alt="Img Slide"
                        />
                      </div>
                      <div className="Goodup-catg-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">
                          Client Testimonials
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="cats-wrap text-center">
                    <div className="Goodup-catg-wrap">
                      <div className="Goodup-catg-icon">
                        <img
                          src="images/nutrition.png"
                          className="img"
                          alt="Img Slide"
                        />
                      </div>
                      <div className="Goodup-catg-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">
                          Integrated Nutrition Plans
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="cats-wrap text-center">
                    <div className="Goodup-catg-wrap">
                      <div className="Goodup-catg-icon">
                        <img
                          src="images/international-childrens-day.png"
                          className="img"
                          alt="Img Slide"
                        />
                      </div>
                      <div className="Goodup-catg-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">
                          Community Support
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-6 d-md-block d-none">
                  <div className="cats-wrap text-center">
                    <div className="Goodup-catg-wrap">
                      <div className="Goodup-catg-icon">
                        <img
                          src="images/building.png"
                          className="img"
                          alt="Img Slide"
                        />
                      </div>
                      <div className="Goodup-catg-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">
                          Personalized Gym Recommendations
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="space min">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-7 col-md-9 col-sm-12">
                  <div className="sec_title position-relative text-center mb-5">
                    <h6 className="theme-cl mb-0">Our Auditing on</h6>
                    <h2 className="ft-bold">Gym Classification</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                  <div className="Goodup-price-wrap">
                    <div className="Goodup-author-header">
                      <div className="Goodup-price-currency">
                        <h3 className="text-center mb-3">
                          <span className="Goodup-new-price">
                            <del className="w-100 text-center">Affordable</del>
                          </span>
                        </h3>
                      </div>
                      <div className="Goodup-price-subtitle theme-cl">
                        Rs. 30,000/- annually
                      </div>
                    </div>
                    <div className="Goodup-price-body">
                      <ul className="price__features">
                        <li>
                          <i className="fa fa-angle-right"></i>1,000 to 3,000
                          sq. ft. area
                        </li>
                        <li>
                          <i className="fa fa-angle-right"></i>Basic fitness
                          equipment
                        </li>
                        <li>
                          <i className="fa fa-angle-right"></i>Functional
                          training areas
                        </li>
                        <li>
                          <i className="fa fa-angle-right"></i>Certified
                          trainers available on request
                        </li>
                        <li>
                          <i className="fa fa-angle-right"></i>Access to group
                          fitness classes (limited)
                        </li>
                        <li>
                          <i className="fa fa-angle-right"></i>Ideal for
                          beginners
                        </li>
                        <li>
                          <i className="fa fa-angle-right"></i>Casual fitness
                          enthusiasts
                        </li>
                      </ul>
                    </div>
                    <div className="Goodup-price-bottom">
                      <a className="Goodup-price-btn" href="/affordable-list">
                        <i className="fa-regular fa-eye"></i>View More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                  <div className="Goodup-price-wrap">
                    <div className="Goodup-author-header">
                      <div className="Goodup-price-currency">
                        <h3 className="text-center mb-3">
                          <span className="Goodup-new-price">
                            <del className="w-100 text-center">Standard</del>
                          </span>
                        </h3>
                      </div>
                      <div className="Goodup-price-subtitle theme-cl">
                        Rs. 45,000/- annually
                      </div>
                    </div>
                    <div className="Goodup-price-body">
                      <ul className="price__features">
                        <li>
                          <i className="fa fa-angle-right"></i>3,000 to 8,000
                          sq. ft. area
                        </li>
                        <li>
                          <i className="fa fa-angle-right"></i>Comprehensive gym
                          facilities
                        </li>
                        <li>
                          <i className="fa fa-angle-right"></i>advanced fitness
                          equipment
                        </li>
                        <li>
                          <i className="fa fa-angle-right"></i>Certified
                          trainers included
                        </li>
                        <li>
                          <i className="fa fa-angle-right"></i>Access to a wide
                          variety of group fitness classes
                        </li>
                        <li>
                          <i className="fa fa-angle-right"></i>Locker and shower
                          facilities
                        </li>
                        <li>
                          <i className="fa fa-angle-right"></i>Moderate pricing
                          with flexible membership plans
                        </li>
                      </ul>
                    </div>
                    <div className="Goodup-price-bottom">
                      <a className="Goodup-price-btn" href="/standard-list">
                        <i className="fa-regular fa-eye"></i>View More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                  <div className="Goodup-price-wrap">
                    <div className="Goodup-author-header">
                      <div className="Goodup-price-currency">
                        <h3 className="text-center mb-3">
                          <span className="Goodup-new-price">
                            <del className="w-100 text-center">Premium</del>
                          </span>
                        </h3>
                      </div>
                      <div className="Goodup-price-subtitle theme-cl">
                        Rs. 90,000/- annually
                      </div>
                    </div>
                    <div className="Goodup-price-body">
                      <ul className="price__features">
                        <li>
                          <i className="fa fa-angle-right"></i>10,000 to 100,000
                          sq. ft. area
                        </li>
                        <li>
                          <i className="fa fa-angle-right"></i>State-of-the-art
                          equipment and luxury facilities
                        </li>
                        <li>
                          <i className="fa fa-angle-right"></i>Personal training
                          sessions included
                        </li>
                        <li>
                          <i className="fa fa-angle-right"></i>Access to
                          exclusive classes and workshops
                        </li>
                        <li>
                          <i className="fa fa-angle-right"></i>Spa, sauna, and
                          wellness zones
                        </li>
                        <li>
                          <i className="fa fa-angle-right"></i>Tailored diet and
                          fitness programs
                        </li>
                        <li>
                          <i className="fa fa-angle-right"></i>Concierge-level
                          customer service
                        </li>
                      </ul>
                    </div>
                    <div className="Goodup-price-bottom">
                      <a className="Goodup-price-btn" href="/premium-list">
                        <i className="fa-regular fa-eye"></i>View More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ModalVideo
            channel="youtube"
            isOpen={isVideoOpen}
            videoId={videoUrl}
            onClose={closeVideoModal}
          />
          <VideoReview openVideoModal={openVideoModal} />
          <section className="bg-light-theme text-start">
            <div className="container">
              <div className="row align-items-center justify-content-between text-left g-4">
                <div className="col-lg-6">
                  <div className="capsTextwrap">
                    <h2 className="mb-3">Why Choose Gomzi</h2>
                    <div className="featuresGroups">
                      <div className="singleFeatured">
                        <div className="ico">
                          <i className="fa-solid fa-circle-check" />
                        </div>
                        <div className="caps">
                          <h4>Headline Options</h4>
                          <p>
                            - The Gomzi Advantage: Redefining Fitness
                            Experiences.
                          </p>
                          <p>
                            - Why Thousands Trust Gomzi for Their Fitness
                            Journey.
                          </p>
                        </div>
                      </div>
                      <div className="singleFeatured">
                        <div className="ico">
                          <i className="fa-solid fa-circle-check" />
                        </div>
                        <div className="caps">
                          <h4>Core Features</h4>
                          <p>
                            - Nationwide Gym Network: Partnered with leading
                            gyms across India to bring you the best options.
                          </p>
                          <p>
                            - Unmatched Affiliation Standards: Each gym is
                            thoroughly vetted to ensure the highest quality.
                          </p>
                          <p>
                            - Personalized Recommendations: AI-based tools to
                            find the perfect gym for your goals and location.
                          </p>
                          <p>
                            - Transparent Pricing: Clear and competitive pricing
                            for all gyms.
                          </p>
                          <p>
                            - 24/7 Customer Support: Dedicated support team to
                            assist with all your queries.
                          </p>
                        </div>
                      </div>
                      <div className="singleFeatured">
                        <div className="ico">
                          <i className="fa-solid fa-circle-check" />
                        </div>
                        <div className="caps">
                          <h4>Additional Features to Highlight</h4>
                          <p>
                            - Customized Fitness Roadmaps: Begin your journey
                            with expert-created fitness plans.
                          </p>
                          <p>
                            - Exclusive Discounts: Get the best deals and offers
                            on gym memberships.
                          </p>
                          <p>
                            - Flexible Payment Plans: Affordable EMI options
                            available.
                          </p>
                          <p>
                            - Regular Updates: Stay informed about new gyms,
                            features, and fitness trends.
                          </p>
                          <p>
                            - Holistic Wellness Approach: Beyond fitness, we
                            focus on nutrition, mental health, and overall
                            well-being.
                          </p>
                          <p>
                            - Cutting-edge Technology: Virtual tours, online
                            booking, and app integration for a seamless
                            experience.
                          </p>
                          <p>
                            - Community Building: Join fitness groups and events
                            to stay motivated.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="imgBox">
                    <img
                      src="images/custom-img.png"
                      className="img-fluid"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="middle text-start">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="sec_title position-relative text-center mb-5">
                    <h6 className="theme-cl mb-0">Latest Updates</h6>
                    <h2 className="ft-bold">View Recent Updates</h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-6 text-left">
                  <div className="gup_blg_grid_box">
                    <div className="gup_blg_grid_thumb">
                      <Link to="/revolutionizing-gyms">
                        <img
                          src="images/b-1.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="gup_blg_grid_caption">
                      {/* <div className="blg_tag">
                        <span>Nutrition</span>
                      </div> */}
                      <div className="blg_title">
                        <h4>
                          <Link to="/revolutionizing-gyms">
                            The Future of Fitness: How Technology is
                            Revolutionizing Gyms
                          </Link>
                        </h4>
                      </div>
                      <div className="blg_desc">
                        <p>
                          The fitness industry is undergoing a seismic shift
                          thanks to rapid advancements in...
                        </p>
                      </div>
                    </div>
                    <div className="crs_grid_foot">
                      <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                        <div className="crs_fl_first">
                          <div className="crs_tutor">
                            <div className="crs_tutor_thumb">
                              <a href="javascript:void(0);">
                                <img
                                  src="images/team-2.jpg"
                                  className="img-fluid circle"
                                  width="35"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="crs_fl_last">
                          <div className="foot_list_info">
                            <ul>
                              <li>
                                <div className="elsio_ic">
                                  <i className="fa fa-eye text-success"></i>
                                </div>
                                <div className="elsio_tx">10k Views</div>
                              </li>
                              <li>
                                <div className="elsio_ic">
                                  <i className="fa fa-clock text-warning"></i>
                                </div>
                                <div className="elsio_tx">March 27, 2018</div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 text-left">
                  <div className="gup_blg_grid_box">
                    <div className="gup_blg_grid_thumb">
                      <Link to="/strategies-for-modern-gyms">
                        <img
                          src="images/b-2.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="gup_blg_grid_caption">
                      {/* <div className="blg_tag">
                        <span>Fitness</span>
                      </div> */}
                      <div className="blg_title">
                        <h4>
                          <Link to="/strategies-for-modern-gyms">
                            Top Revenue-Boosting Strategies for Modern Gyms
                          </Link>
                        </h4>
                      </div>
                      <div className="blg_desc">
                        <p>
                          In an industry as dynamic and competitive as fitness,
                          increasing revenue is crucial...
                        </p>
                      </div>
                    </div>
                    <div className="crs_grid_foot">
                      <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                        <div className="crs_fl_first">
                          <div className="crs_tutor">
                            <div className="crs_tutor_thumb">
                              <a href="javascript:void(0);">
                                <img
                                  src="images/team-3.jpg"
                                  className="img-fluid circle"
                                  width="35"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="crs_fl_last">
                          <div className="foot_list_info">
                            <ul>
                              <li>
                                <div className="elsio_ic">
                                  <i className="fa fa-eye text-success"></i>
                                </div>
                                <div className="elsio_tx">10k Views</div>
                              </li>
                              <li>
                                <div className="elsio_ic">
                                  <i className="fa fa-clock text-warning"></i>
                                </div>
                                <div className="elsio_tx">March 27, 2018</div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 text-left">
                  <div className="gup_blg_grid_box">
                    <div className="gup_blg_grid_thumb">
                      <Link to="/scalable-gym">
                        <img
                          src="images/b-3.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="gup_blg_grid_caption">
                      {/* <div className="blg_tag">
                        <span>Health</span>
                      </div> */}
                      <div className="blg_title">
                        <h4>
                          <Link to="/scalable-gym">
                            From Local to Global: Building a Scalable Gym
                            Business Model
                          </Link>
                        </h4>
                      </div>
                      <div className="blg_desc">
                        <p>
                          Transitioning a gym from a local establishment to a
                          thriving national or...
                        </p>
                      </div>
                    </div>
                    <div className="crs_grid_foot">
                      <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                        <div className="crs_fl_first">
                          <div className="crs_tutor">
                            <div className="crs_tutor_thumb">
                              <a href="javascript:void(0);">
                                <img
                                  src="images/team-5.jpg"
                                  className="img-fluid circle"
                                  width="35"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="crs_fl_last">
                          <div className="foot_list_info">
                            <ul>
                              <li>
                                <div className="elsio_ic">
                                  <i className="fa fa-eye text-success"></i>
                                </div>
                                <div className="elsio_tx">10k Views</div>
                              </li>
                              <li>
                                <div className="elsio_ic">
                                  <i className="fa fa-clock text-warning"></i>
                                </div>
                                <div className="elsio_tx">March 27, 2018</div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 text-left">
                  <div className="gup_blg_grid_box">
                    <div className="gup_blg_grid_thumb">
                      <Link to="/member-engagement">
                        <img
                          src="images/b-4.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="gup_blg_grid_caption">
                      {/* <div className="blg_tag">
                        <span>Wellness</span>
                      </div> */}
                      <div className="blg_title">
                        <h4>
                          <Link to="/member-engagement">
                            The Power of Community: How Gyms Can Thrive with
                            Member Engagement
                          </Link>
                        </h4>
                      </div>
                      <div className="blg_desc">
                        <p>
                        Transitioning a gym from a local establishment to a
                        thriving national or global...
                        </p>
                      </div>
                    </div>
                    <div className="crs_grid_foot">
                      <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                        <div className="crs_fl_first">
                          <div className="crs_tutor">
                            <div className="crs_tutor_thumb">
                              <a href="javascript:void(0);">
                                <img
                                  src="images/team-2.jpg"
                                  className="img-fluid circle"
                                  width="35"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="crs_fl_last">
                          <div className="foot_list_info">
                            <ul>
                              <li>
                                <div className="elsio_ic">
                                  <i className="fa fa-eye text-success"></i>
                                </div>
                                <div className="elsio_tx">10k Views</div>
                              </li>
                              <li>
                                <div className="elsio_ic">
                                  <i className="fa fa-clock text-warning"></i>
                                </div>
                                <div className="elsio_tx">March 27, 2018</div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="space bg-cover text-start"
            style={{
              background: "#03343b url(images/landing-bg.png) no-repeat",
            }}
          >
            <div className="container py-5">
              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="sec_title position-relative text-center mb-5">
                    <h2 className="ft-bold text-light whastapp-title">
                      Join GOMZI Today and Discover Exclusive Deals - Connect
                      with Us Instantly!
                    </h2>
                    <h6 className="text-light mb-0 d-md-block d-none">
                      Unlock Success with GOMZI - Connect Now over whatsapp for
                      Advance Perks!
                    </h6>
                    <p className="ft-bold text-light mt-4"></p>
                  </div>
                </div>
              </div>
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-7 col-lg-10 col-md-12 col-sm-12 col-12">
                  <form className="rounded p-1">
                    <div className="d-flex justify-content-center">
                      <div className="form-group mb-0">
                        <WhatsappBtn
                          message={
                            "Hello, I wanted to know more about Business Listing."
                          }
                          options={{ pageRef: true }}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <Footer />
          <div
            className="modal fade"
            id="login"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="loginmodal"
            aria-hidden="true"
          >
            <div className="modal-dialog login-pop-form" role="document">
              <div className="modal-content" id="loginmodal">
                <div className="modal-headers">
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span className="ti-close" />
                  </button>
                </div>
                <div className="modal-body p-5">
                  <div className="text-center mb-4">
                    <h4 className="m-0 ft-medium">Login Your Account</h4>
                  </div>
                  <form className="submit-form">
                    <div className="form-group">
                      <label className="mb-1">User Name</label>
                      <input
                        type="text"
                        className="form-control rounded bg-light"
                        placeholder="Username*"
                      />
                    </div>
                    <div className="form-group">
                      <label className="mb-1">Password</label>
                      <input
                        type="password"
                        className="form-control rounded bg-light"
                        placeholder="Password*"
                      />
                    </div>
                    <div className="form-group">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="flex-1">
                          <input
                            id="dd"
                            className="checkbox-custom"
                            name="dd"
                            type="checkbox"
                            defaultChecked=""
                          />
                          <label htmlFor="dd" className="checkbox-custom-label">
                            Remember Me
                          </label>
                        </div>
                        <div className="eltio_k2">
                          <a href="#" className="theme-cl">
                            Lost Your Password?
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-md full-width theme-bg text-light rounded ft-medium"
                      >
                        Sign In
                      </button>
                    </div>
                    <div className="form-group text-center mb-0">
                      <p className="extra">Or login with</p>
                      <div className="option-log">
                        <div className="single-log-opt">
                          <a href="javascript:void(0);" className="log-btn">
                            <img
                              src="images/c-1.png"
                              className="img-fluid"
                              alt=""
                            />
                            Login with Google
                          </a>
                        </div>
                        <div className="single-log-opt">
                          <a href="javascript:void(0);" className="log-btn">
                            <img
                              src="images/facebook.png"
                              className="img-fluid"
                              alt=""
                            />
                            Login with Facebook
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <a
            id="tops-button"
            className="top-scroll"
            title="Back to top"
            href="#"
          >
            <i className="ti-arrow-up" />
          </a>
        </div>
      </>
    </div>
  );
};

export default Home;
