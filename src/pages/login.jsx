import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//components
// import Header from "../components/HeaderStyle/Header";
// import Footer from "../components/FooterStyle/Footer";
// import SectionFirst from "../components/HomeSectionFirst";
// import HomeRecentActivity from "../components/HomeRecentActivity";
// import HomeBrandsSlider from "../components/HomeBrandsSlider";
// import HomeBlogs from "../components/HomeBlogs";
// import HomeAboutUs from "../components/HomeAboutUs";
import { Helmet } from "react-helmet";
import "../assets/css/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
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
        {
          loading && (
            <div className="preloader" />
          )
        }
        <div id="main-wrapper">
          <Header />
          <div className="clearfix" />
          <section className="gray text-start">
            <div className="container">
              <div className="row align-items-start justify-content-center">
                <div className="col-xl-5 col-lg-8 col-md-12">
                  <div className="signup-screen-wrap">
                    <div className="signup-screen-single">
                      <div className="text-center mb-4">
                        <h4 className="m-0 ft-medium">Login Your Account</h4>
                      </div>
                      <form className="submit-form">
                        <div className="form-group">
                          <label className="mb-1">User Name</label>
                          <input
                            type="text"
                            className="form-control rounded"
                            placeholder="Username*"
                          />
                        </div>
                        <div className="form-group">
                          <label className="mb-1">Password</label>
                          <input
                            type="password"
                            className="form-control rounded"
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
                              <label
                                htmlFor="dd"
                                className="checkbox-custom-label"
                              >
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
                        <div className="form-group text-center mt-4 mb-0">
                          <p className="mb-0">
                            You Don't have any account?{" "}
                            <a
                              href="signup.html"
                              className="ft-medium text-success"
                            >
                              Sign Up
                            </a>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ======================= Login End ======================== */}
          {/* ======================= Newsletter Start ============================ */}
          <section
            className="space bg-cover"
            style={{
              background: "#03343b url(images/landing-bg.png) no-repeat",
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
        {/* ============================================================== */}
        {/* End Wrapper */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* All Jquery */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* This page plugins */}
        {/* ============================================================== */}
      </>
    </div>
  );
};

export default Login;
