import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import "../assets/css/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeRecentActivity from "../components/HomeRecentActivity";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      <Helmet>
        <title>FG Group Business Listing</title>
        <meta name="description" content="Your meta description" />
      </Helmet>
      <>
        {/* Meta Data */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Goodup - Business Directory &amp; Listing HTML Template</title>
        {/* Favicon */}
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="images/favicon.png"
        />
        {/* Custom CSS */}
        <link href="css/styles.css" rel="stylesheet" />
        {loading && <div className="preloader" />}
        <div id="main-wrapper">
          <Header />
          <div className="clearfix" />
          {/* ============================================================== */}
          {/* Top header  */}
          {/* ============================================================== */}
          {/* ======================= Home Banner ======================== */}
          <div className="home-banner home-7">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="pe-3">
                    <div className="banner_caption text-left">
                      <h1 className="banner_title ft-normal mb-1">
                        Transform Your Life with{" "}
                        <span className="theme-cl">Gomzi's Gym Network</span>
                      </h1>
                      <p className="fs-lg fw-light">
                        Welcome to Gomzi-India's premier platform connecting fitness enthusiasts with the best gyms tailored to their needs. Our mission is to empower individuals to transform their lives through fitness by offering a curated network of affiliated gyms, personalized recommendations, and unparalleled support. Whether you're a beginner or a seasoned athlete, Gomzi helps you find the perfect gym to achieve your fitness goals and elevate your lifestyle.
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
          {/* ======================= Home Banner ======================== */}
          {/* ====================== Start Offers ========================= */}
          <section className="pt-4 pb-0">
            <div className="container">
              <div className="row justify-content-between g-4">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="offerWrap">
                    <div className="offerCaps">
                      <h4 className="title">Building a Healthier You</h4>
                      <p>At Gomzi, we're more than just a fitness directory-we're your partner in health and transformation. Explore our extensive list of affiliated gyms across the country.</p>
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
                      <h4 className="title">Explore Top Gyms, Tailored to You</h4>
                      <p>Discover a world of fitness tailored to your needs. At Gomzi, we connect you with the finest gyms that match your fitness goals and lifestyle preferences.</p>
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
          {/* ====================== End Offers ========================= */}
          {/* ======================= All Listing ======================== */}
          <HomeRecentActivity />
          {/* ======================= All Listings ======================== */}
          {/* ======================= Listing Categories ======================== */}
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
              {/* row */}
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
                          Flexible Membership Options
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
              </div>
              {/* row */}
            </div>
          </section>
          {/* ======================= Listing Categories ======================== */}
          {/* ======================= pricing categories ======================== */}
          <section className="space min">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-7 col-md-9 col-sm-12">
                  <div className="sec_title position-relative text-center mb-5">
                    <h6 className="theme-cl mb-0">Our Packages</h6>
                    <h2 className="ft-bold">Gym Pricing Segments</h2>
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
                      <div className="Goodup-price-subtitle">Best Choice for Individuals</div>
                    </div>
                    <div className="Goodup-price-body">
                      <ul className="price__features">
                        <li><i className="fa fa-angle-right"></i>Basic fitness equipment</li>
                        <li><i className="fa fa-angle-right"></i>Functional training areas</li>
                        <li><i className="fa fa-angle-right"></i>Certified trainers available on request</li>
                        <li><i className="fa fa-angle-right"></i>Access to group fitness classes (limited)</li>
                        <li><i className="fa fa-angle-right"></i>Ideal for beginners</li>
                        <li><i className="fa fa-angle-right"></i>Casual fitness enthusiasts</li>
                      </ul>
                    </div>
                    <div className="Goodup-price-bottom">
                      <a className="Goodup-price-btn" href="/affordable-list"><i class="fa-regular fa-eye"></i>View More</a>
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
                      <div className="Goodup-price-subtitle">Best Choice for Individuals </div>
                    </div>
                    <div className="Goodup-price-body">
                      <ul className="price__features">
                        <li><i className="fa fa-angle-right"></i>Comprehensive gym facilities</li>
                        <li><i className="fa fa-angle-right"></i>advanced fitness equipment</li>
                        <li><i className="fa fa-angle-right"></i>Certified trainers included</li>
                        <li><i className="fa fa-angle-right"></i>Access to a wide variety of group fitness classes</li>
                        <li><i className="fa fa-angle-right"></i>Locker and shower facilities</li>
                        <li><i className="fa fa-angle-right"></i>Moderate pricing with flexible membership plans</li>
                      </ul>
                    </div>
                    <div className="Goodup-price-bottom">
                      <a className="Goodup-price-btn" href="/standard-list"><i class="fa-regular fa-eye"></i>View More</a>
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
                      <div className="Goodup-price-subtitle">Best Choice for Individuals </div>
                    </div>
                    <div className="Goodup-price-body">
                      <ul className="price__features">
                        <li><i className="fa fa-angle-right"></i>State-of-the-art equipment and luxury facilities</li>
                        <li><i className="fa fa-angle-right"></i>Personal training sessions included</li>
                        <li><i className="fa fa-angle-right"></i>Access to exclusive classes and workshops</li>
                        <li><i className="fa fa-angle-right"></i>Spa, sauna, and wellness zones</li>
                        <li><i className="fa fa-angle-right"></i>Tailored diet and fitness programs</li>
                        <li><i className="fa fa-angle-right"></i>Concierge-level customer service</li>
                      </ul>
                    </div>
                    <div className="Goodup-price-bottom">
                      <a className="Goodup-price-btn" href="/premium-list"><i class="fa-regular fa-eye"></i>View More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ======================= pricing categories ======================== */}
          {/* ======================= blog section ======================== */}
          <section class="middle">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div class="sec_title position-relative text-center mb-5">
                    <h6 class="theme-cl mb-0">Latest Updates</h6>
                    <h2 class="ft-bold">View Recent Updates</h2>
                  </div>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-6 text-left">
                  <div class="gup_blg_grid_box">
                    <div class="gup_blg_grid_thumb">
                      <a href="https://fggroup.in/blogs/ignite-your-nutrition-journey-explore-the-power-of-a-nutrition-course"><img src="images/b-1.webp" class="img-fluid" alt="" /></a>
                    </div>
                    <div class="gup_blg_grid_caption">
                      <div class="blg_tag"><span>Nutrition</span></div>
                      <div class="blg_title"><h4><a href="https://fggroup.in/blogs/ignite-your-nutrition-journey-explore-the-power-of-a-nutrition-course">Fuel Your Passion for Nutrition</a></h4></div>
                      <div class="blg_desc"><p>Learn how to nourish your body and fuel your passion for a healthier life.</p></div>
                    </div>
                    <div class="crs_grid_foot">
                      <div class="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                        <div class="crs_fl_first">
                          <div class="crs_tutor">
                            <div class="crs_tutor_thumb"><a href="javascript:void(0);"><img src="images/team-2.jpg" class="img-fluid circle" width="35" alt="" /></a></div>
                          </div>
                        </div>
                        <div class="crs_fl_last">
                          <div class="foot_list_info">
                            <ul>
                              <li><div class="elsio_ic"><i class="fa fa-eye text-success"></i></div><div class="elsio_tx">10k Views</div></li>
                              <li><div class="elsio_ic"><i class="fa fa-clock text-warning"></i></div><div class="elsio_tx">March 27, 2018</div></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 text-left">
                  <div class="gup_blg_grid_box">
                    <div class="gup_blg_grid_thumb">
                      <a href="https://fggroup.in/blogs/choosing-the-right-fitness-certification-program-in-India"><img src="images/b-2.webp" class="img-fluid" alt="" /></a>
                    </div>
                    <div class="gup_blg_grid_caption">
                      <div class="blg_tag"><span>Fitness</span></div>
                      <div class="blg_title"><h4><a href="https://fggroup.in/blogs/choosing-the-right-fitness-certification-program-in-India">Choosing the Right Fitness Certification</a></h4></div>
                      <div class="blg_desc"><p>Discover the best fitness certifications to kickstart your career.</p></div>
                    </div>
                    <div class="crs_grid_foot">
                      <div class="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                        <div class="crs_fl_first">
                          <div class="crs_tutor">
                            <div class="crs_tutor_thumb"><a href="javascript:void(0);"><img src="images/team-3.jpg" class="img-fluid circle" width="35" alt="" /></a></div>
                          </div>
                        </div>
                        <div class="crs_fl_last">
                          <div class="foot_list_info">
                            <ul>
                              <li><div class="elsio_ic"><i class="fa fa-eye text-success"></i></div><div class="elsio_tx">10k Views</div></li>
                              <li><div class="elsio_ic"><i class="fa fa-clock text-warning"></i></div><div class="elsio_tx">March 27, 2018</div></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 text-left">
                  <div class="gup_blg_grid_box">
                    <div class="gup_blg_grid_thumb">
                      <a href="https://fggroup.in/blogs/the-importance-of-fitness-education-in-todays-world"><img src="images/b-3.webp" class="img-fluid" alt="" /></a>
                    </div>
                    <div class="gup_blg_grid_caption">
                      <div class="blg_tag"><span>Health</span></div>
                      <div class="blg_title"><h4><a href="https://fggroup.in/blogs/the-importance-of-fitness-education-in-todays-world">The Importance Of Fitness Education</a></h4></div>
                      <div class="blg_desc"><p>Understand the significance of proper fitness education for lasting health.</p></div>
                    </div>
                    <div class="crs_grid_foot">
                      <div class="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                        <div class="crs_fl_first">
                          <div class="crs_tutor">
                            <div class="crs_tutor_thumb"><a href="javascript:void(0);"><img src="images/team-5.jpg" class="img-fluid circle" width="35" alt="" /></a></div>
                          </div>
                        </div>
                        <div class="crs_fl_last">
                          <div class="foot_list_info">
                            <ul>
                              <li><div class="elsio_ic"><i class="fa fa-eye text-success"></i></div><div class="elsio_tx">10k Views</div></li>
                              <li><div class="elsio_ic"><i class="fa fa-clock text-warning"></i></div><div class="elsio_tx">March 27, 2018</div></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 text-left">
                  <div class="gup_blg_grid_box">
                    <div class="gup_blg_grid_thumb">
                      <a href="https://fggroup.in/blogs/fatloss-vs-weightloss"><img src="images/b-4.webp" class="img-fluid" alt="" /></a>
                    </div>
                    <div class="gup_blg_grid_caption">
                      <div class="blg_tag"><span>Wellness</span></div>
                      <div class="blg_title"><h4><a href="https://fggroup.in/blogs/fatloss-vs-weightloss">Weight Loss VS Fat Loss</a></h4></div>
                      <div class="blg_desc"><p>Explore the difference between weight loss and fat loss, and find the best approach for you.</p></div>
                    </div>
                    <div class="crs_grid_foot">
                      <div class="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                        <div class="crs_fl_first">
                          <div class="crs_tutor">
                            <div class="crs_tutor_thumb"><a href="javascript:void(0);"><img src="images/team-2.jpg" class="img-fluid circle" width="35" alt="" /></a></div>
                          </div>
                        </div>
                        <div class="crs_fl_last">
                          <div class="foot_list_info">
                            <ul>
                              <li><div class="elsio_ic"><i class="fa fa-eye text-success"></i></div><div class="elsio_tx">10k Views</div></li>
                              <li><div class="elsio_ic"><i class="fa fa-clock text-warning"></i></div><div class="elsio_tx">March 27, 2018</div></li>
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
          {/* ======================= blog section ======================== */}
          {/* ============================ Tag & Submit listing ============================= */}
          <section className="bg-light-theme">
            <div className="container">
              <div className="row align-items-center justify-content-between text-left g-4">
                <div className="col-lg-6">
                  <div className="capsTextwrap">
                    <h2 className="mb-3">
                      Why Choose Gomzi
                    </h2>
                    <div className="featuresGroups">
                      <div className="singleFeatured">
                        <div className="ico">
                          <i className="fa-solid fa-circle-check" />
                        </div>
                        <div className="caps">
                          <h4>Headline Options</h4>
                          <p>
                            - The Gomzi Advantage: Redefining Fitness Experiences.
                          </p>
                          <p>
                            - Why Thousands Trust Gomzi for Their Fitness Journey.
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
                            - Nationwide Gym Network: Partnered with leading gyms across India to bring you the best options.
                          </p>
                          <p>
                            - Unmatched Affiliation Standards: Each gym is thoroughly vetted to ensure the highest quality.
                          </p>
                          <p>
                            - Personalized Recommendations: AI-based tools to find the perfect gym for your goals and location.
                          </p>
                          <p>
                            - Transparent Pricing: Clear and competitive pricing for all gyms.
                          </p>
                          <p>
                            - 24/7 Customer Support: Dedicated support team to assist with all your queries.
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
                            - Customized Fitness Roadmaps: Begin your journey with expert-created fitness plans.
                          </p>
                          <p>
                            - Exclusive Discounts: Get the best deals and offers on gym memberships.
                          </p>
                          <p>
                            - Flexible Payment Plans: Affordable EMI options available.
                          </p>
                          <p>
                            - Regular Updates: Stay informed about new gyms, features, and fitness trends.
                          </p>
                          <p>
                            - Holistic Wellness Approach: Beyond fitness, we focus on nutrition, mental health, and overall well-being.
                          </p>
                          <p>
                            - Cutting-edge Technology: Virtual tours, online booking, and app integration for a seamless experience.
                          </p>
                          <p>
                            - Community Building: Join fitness groups and events to stay motivated.
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
          {/* ============================ Tag & Submit listing End ============================= */}
          {/* ======================= Customer Review ======================== */}
          <section className="space">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="sec_title position-relative text-center mb-5">
                    <h6 className="text-muted mb-0">Our Reviews</h6>
                    <h2 className="ft-bold">
                      What Our Customer <span className="theme-cl">Saying</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="reviews-slide row">
                    {/* single review */}
                    <div className="single-list col-md-4">
                      <div className="single_review">
                        <div className="sng_rev_thumb">
                          <figure>
                            <img
                              src="images/t-1.png"
                              className="img-fluid circle"
                              alt=""
                            />
                          </figure>
                        </div>
                        <div className="rev_author">
                          <span className="fs-sm theme-cl">Jayneel</span>
                        </div>
                        <div className="sng_rev_caption text-center">
                          <div className="rev_desc mb-4">
                            <p>
                              I joined FitnessWithGomzi and lost around 12kg in just 1.5 months! I'm incredibly thankful for their guidance and support throughout my fitness journey. The workouts are challenging but effective, and the nutrition advice has made all the difference in achieving my goals. The trainers keep me motivated every step of the way, and I've never felt stronger or more confident.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* single review */}
                    <div className="single-list col-md-4">
                      <div className="single_review">
                        <div className="sng_rev_thumb">
                          <figure>
                            <img
                              src="images/t-2.png"
                              className="img-fluid circle"
                              alt=""
                            />
                          </figure>
                        </div>
                        <div className="rev_author">
                          <span className="fs-sm theme-cl">Milan Sali</span>
                        </div>
                        <div className="sng_rev_caption text-center">
                          <div className="rev_desc mb-4">
                            <p>
                              I came across this amazing nutrition class offered by FitnessWithGomzi, and it has completely transformed the way I approach my health! The class not only provided detailed insights into balanced nutrition but also taught me how to make sustainable, healthy eating choices. The team is incredibly knowledgeable, and their approach is easy to follow yet highly effective.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* single review */}
                    <div className="single-list col-md-4">
                      <div className="single_review">
                        <div className="sng_rev_thumb">
                          <figure>
                            <img
                              src="images/t-3.png"
                              className="img-fluid circle"
                              alt=""
                            />
                          </figure>
                        </div>
                        <div className="rev_author">
                          <span className="fs-sm theme-cl">Budhadev Sahu</span>
                        </div>
                        <div className="sng_rev_caption text-center">
                          <div className="rev_desc mb-4">
                            <p>
                              With the incredible support of FitnessWithGomzi, I've been able to compete at state championships! Their personalized training plans and expert guidance have taken my fitness to the next level, preparing me both mentally and physically for competition. The coaches truly understand how to push your limits while keeping the workouts balanced and effective.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ======================= Customer Review ======================== */}
          {/* ======================= Newsletter Start ============================ */}
          <section
            className="space bg-cover"
            style={{
              background: "#c76400 url(images/landing-bg.png) no-repeat",
            }}
          >
            <div className="container py-5">
              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="sec_title position-relative text-center mb-5">
                    <h6 className="text-light mb-0">Subscribr Now</h6>
                    <h2 className="ft-bold text-light">
                      Get All Updates &amp; Advance Offers
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-7 col-lg-10 col-md-12 col-sm-12 col-12">
                  <form className="bg-white rounded p-1">
                    <div className="row no-gutters">
                      <div className="col-xl-9 col-lg-9 col-md-8 col-sm-8 col-8">
                        <div className="form-group mb-0 position-relative">
                          <input
                            type="text"
                            className="form-control b-0"
                            placeholder="Enter Your Email Address"
                          />
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4">
                        <div className="form-group mb-0 position-relative">
                          <button
                            className="btn full-width btn-height theme-bg text-light fs-md"
                            type="button"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* ======================= Newsletter Start ============================ */}
          {/* ============================ Footer Start ================================== */}
          <Footer />
          {/* ============================ Footer End ================================== */}
          {/* Log In Modal */}
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
          {/* End Modal */}
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
