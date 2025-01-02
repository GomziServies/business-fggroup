import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import "../assets/css/style.css";
import Footer from "../components/Footer";
import WhatsappBtn from "../components/WhatsappBtn";
import WhatsappBtnMain from "../components/WhatsappBtnMain";
import GymMainActivity from "../components/GymMainActivity";
import SimpleHeader from "../components/SimpleHeader";
import SuccessStoryImages from "../components/SuccessStoryImages";

const GymListing = () => {
  const [loading, setLoading] = useState(true);
  const [searchData, setSearchData] = useState('');
  const [inputData, setInputData] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleSearchCity = (e) => {
    e.preventDefault();
    setSearchData(inputData);

    const targetElement = document.getElementById("gymMainActivity");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputchange = (event) => {
    const value = event.target.value
    setInputData(value)
  }

  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Gym Listing</title>
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
        message={"Hello, I wanted to know more about Business Listing."}
        options={{ pageRef: true }}
      />
      <>
        {loading && <div className="preloader" />}
        <div id="main-wrapper">
          <SimpleHeader />
          <div className="clearfix" />
          <div
            className="home-banner margin-bottom-0"
            style={{
              background:
                "#f41b3b url(images/gym-listing-banner.webp) no-repeat",
              marginTop: "70px",
            }}
            data-overlay="5"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="banner_caption text-center">
                    <h1 className="banner_title ft-bold mb-1">
                      Find the Best Gyms and Fitness Centers Near You
                    </h1>
                    <p className="fs-lg ft-light">
                      Looking for a top-rated gym, fitness center, or studio in
                      your area? Discover the best places to stay fit, stay
                      healthy, and reach your fitness goals.
                    </p>
                  </div>
                  <form className="main-search-wrap fl-wrap half-column mt-5">
                    <div className="main-search-item">
                      <span className="search-tag">Find</span>
                      <input
                        type="text"
                        className="form-control radius"
                        placeholder="Gym Search By city...."
                        onChange={handleInputchange}
                      />
                    </div>
                    <div className="main-search-button">
                      <button
                        className="btn full-width theme-bg text-white"
                        onClick={handleSearchCity}
                      >
                        Search<i className="fas fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <SuccessStoryImages />
          <section className="gray py-5" id="gymMainActivity">
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="row justify-content-center mt-5 g-2">
                    <div className="text-start col-12">
                      <div className="d-block grouping-listings">
                        <GymMainActivity searchData={searchData} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-7 col-md-9 col-sm-12">
                  <div className="sec_title position-relative text-center mb-5">
                    <h6 className="text-muted mb-0">
                      Why Choose GOMZI Fitness Centers?
                    </h6>
                    <h2 className="ft-bold">
                      We partner with <span className="theme-cl">3,000+</span>{" "}
                      Trusted Gyms and Fitness Studios
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                  <div className="empl-thumb text-center px-3 py-4">
                    <img
                      src="images/l-1.webp"
                      className="img-fluid mx-auto"
                      alt="fg group"
                      width="55%"
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                  <div className="empl-thumb text-center px-3 py-4">
                    <img
                      src="images/l-2.webp"
                      className="img-fluid mx-auto"
                      alt="fg group"
                      width="55%"
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                  <div className="empl-thumb text-center px-3 py-4">
                    <img
                      src="images/l-3.webp"
                      className="img-fluid mx-auto"
                      alt="fg group"
                      width="55%"
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                  <div className="empl-thumb text-center px-3 py-4">
                    <img
                      src="images/l-4.webp"
                      className="img-fluid mx-auto"
                      alt="fg group"
                      width="55%"
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                  <div className="empl-thumb text-center px-3 py-4">
                    <img
                      src="images/l-5.webp"
                      className="img-fluid mx-auto"
                      alt="fg group"
                      width="55%"
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                  <div className="empl-thumb text-center px-3 py-4">
                    <img
                      src="images/l-6.webp"
                      className="img-fluid mx-auto"
                      alt="fg group"
                      width="55%"
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                  <div className="empl-thumb text-center px-3 py-4">
                    <img
                      src="images/l-7.webp"
                      className="img-fluid mx-auto"
                      alt="fg group"
                      width="55%"
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                  <div className="empl-thumb text-center px-3 py-4">
                    <img
                      src="images/l-8.webp"
                      className="img-fluid mx-auto"
                      alt="fg group"
                      width="55%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="bg-cover text-center py-5 mt-5"
            style={{ background: "#353535 url(images/bg.webp)" }}
            data-overlay="7"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7 col-md-10 text-center">
                  <div className="sec-heading center">
                    <h2 className="text-light ft-bold">
                      Start Your Fitness Journey with GOMZI Today
                    </h2>
                    <h3 className="text-light ft-medium my-4">
                      Find the best gyms and fitness centers, book a visit, and
                      start achieving your fitness goals.
                    </h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="counter-link my-5">
                    <WhatsappBtn
                      message={
                        "Hello, I wanted to know more about Business Listing."
                      }
                      options={{ pageRef: true }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="my-5">
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                  <div className="sec_title position-relative text-center mb-5">
                    <h6 className="text-muted mb-0">Ask Questions</h6>
                    <h2 className="ft-bold">Frequently Asked Questions</h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center text-start">
                <div className="col-xl-10 col-lg-11 col-md-12 col-12">
                  <div id="accordion2" className="accordion">
                    <div className="card">
                      <div className="card-header" id="h7">
                        <h5 className="mb-0 text-start">
                          <button
                            className="btn btn-link"
                            data-bs-toggle="collapse"
                            data-bs-target="#ord7"
                            aria-expanded="true"
                            aria-controls="ord7"
                          >
                            How can I find the best gym near me?
                          </button>
                        </h5>
                      </div>

                      <div
                        id="ord7"
                        className="collapse show"
                        aria-labelledby="h7"
                        data-parent="#accordion2"
                      >
                        <div className="card-body">
                          You can easily search our platform by location,
                          rating, and available facilities to find the best gym
                          near you.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="h8">
                        <h5 className="mb-0 text-start">
                          <button
                            className="btn btn-link collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#ord8"
                            aria-expanded="false"
                            aria-controls="ord8"
                          >
                            What facilities are typically available at
                            GOMZI-listed gyms?
                          </button>
                        </h5>
                      </div>
                      <div
                        id="ord8"
                        className="collapse"
                        aria-labelledby="h8"
                        data-parent="#accordion2"
                      >
                        <div className="card-body">
                          Most gyms on GOMZI provide essential fitness amenities
                          such as WiFi, air conditioning, steam baths, lockers,
                          and more. Check the specific gym details for more
                          information.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="h9">
                        <h5 className="mb-0 text-start">
                          <button
                            className="btn btn-link collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#ord9"
                            aria-expanded="false"
                            aria-controls="ord9"
                          >
                            How do I contact a gym or book a membership?
                          </button>
                        </h5>
                      </div>
                      <div
                        id="ord9"
                        className="collapse"
                        aria-labelledby="h9"
                        data-parent="#accordion2"
                      >
                        <div className="card-body">
                          Each gym listing provides contact details, including
                          phone numbers, email, and WhatsApp links for easy
                          communication.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-5 gray">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div className="content_block_2 pr-3 py-4">
                    <div className="content-box">
                      <div className="sec-title light text-start">
                        <p className="theme-cl px-3 py-1 rounded bg-light-danger d-inline-flex">
                          Download apps
                        </p>
                        <h2 className="ft-bold">
                          Download the GOMZI App for Easy Access
                        </h2>
                      </div>
                      <div className="text mb-3 text-start">
                        <p>
                          Get the GOMZI app to discover gyms, fitness centers,
                          and exclusive offers with just a tap. Explore gyms in
                          your area, compare facilities, and connect directly
                          from your phone.
                        </p>
                      </div>
                      <div className="position-relative text-start row">
                        <div className="col-lg-4 col-md-4 col-4">
                          <h3 className="ft-bold theme-cl mb-0">
                            <span className="count">3</span>k+
                          </h3>
                          <p className="ft-medium">Active Gyms</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4">
                          <h3 className="ft-bold theme-cl mb-0">
                            <span className="count">7</span>k+
                          </h3>
                          <p className="ft-medium">Fitness Plans</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4">
                          <h3 className="ft-bold theme-cl mb-0">
                            <span className="count">10</span>k+
                          </h3>
                          <p className="ft-medium">Trainers</p>
                        </div>
                      </div>
                      <div className="btn-box clearfix text-start mt-5">
                        <a
                          href="https://apps.apple.com/in/app/fg/id1661113769"
                          className="download-btn play-store mx-1 d-inline-flex"
                        >
                          <img src="images/ios.webp" width="200" alt="" />
                        </a>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.fwg_app&pli=1"
                          className="download-btn play-store mx-1 mb-1 d-inline-flex"
                        >
                          <img src="images/and.webp" width="200" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 image-column">
                  <div className="image-box">
                    <figure className="image">
                      <img src="images/app.webp" className="img-fluid" alt="" />
                    </figure>
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
                          // defaultChecked=""
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

export default GymListing;
