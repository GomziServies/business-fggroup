import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import "../assets/css/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button, Form } from "react-bootstrap";
import axiosInstance from "../js/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [currentStep, setCurrentStep] = React.useState("login");
  const [otpDialogOpen, setOtpDialogOpen] = React.useState(false);
  const [otpCode, setOtpCode] = React.useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const LoginToken = localStorage.getItem("authorization");
    if (LoginToken) {
      setIsLogin(true);
    }
  }, []);

  const handleLoginSubmit = async () => {
    try {
      const response = await axiosInstance.post("/account/authorization", {
        mobile: mobileNumber,
      });

      if (response.data && response.data.data && response.data.data.OTP) {
        setOtpDialogOpen(true);
        setCurrentStep("otp");
        // Automatically set OTP in the state
        setOtpCode(response.data.data.OTP);

        // Show success toast
        toast.success("OTP Sent! You will receive an OTP shortly.");
      } else {
        setOtpDialogOpen(true);
        setCurrentStep("otp");
        toast.success("OTP Sent! You will receive an OTP shortly.");
      }
    } catch (error) {
      toast.error("Failed to send OTP. Please try again.");
      console.error("Error in handleLoginSubmit:", error);
    }
  };

  const handleOtpSubmit = async () => {
    try {
      const response = await axiosInstance.post(
        "/account/authorization/verify",
        {
          mobile: mobileNumber,
          otp: otpCode,
        }
      );

      const auth = response.data.data.authorization;

      if (response.status === 200) {
        // Save data to localStorage
        localStorage.setItem("authorization", auth);
        getUserData();
        setOtpDialogOpen(false);
        toast.success("OTP Verified!");
        const activeServices = response.data.data.active_services;
        // Check for BUSINESS-LISTING within the array
        if (activeServices.includes("BUSINESS-LISTING")) {
          toast.success("Login Successful!");
        }
        window.location.href = "/";
      } else {
        // Handle error scenario if needed
        toast.error("Failed to verify OTP. Please try again.");
      }
    } catch (error) {
      // Handle errors here
      console.error("Error in handleOtpSubmit:", error);
    }
  };

  const getUserData = async () => {
    try {
      const response = await axiosInstance.get("/account/profile");
      localStorage.setItem("user_info", JSON.stringify(response.data.data));
    } catch (error) {
      console.error("Error in handleAgreeAndConfirm:", error);
    }
  };

  const handleGoBack = () => {
    setCurrentStep("login");
  };

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
          <section className="gray text-start">
            <div className="container">
              <div className="row align-items-start justify-content-center">
                <div className="col-xl-5 col-lg-8 col-md-12">
                  {!isLogin && currentStep === "login" && (
                    <div className="signup-screen-wrap">
                      <div className="signup-screen-single">
                        <a
                          className="nav-brand d-flex justify-content-center align-items-center"
                          href="#"
                        >
                          <img src="images/logo.png" className="logo" alt="" />
                        </a>
                        <h3 className="text-center">Welcome</h3>
                        <div class="text-center mb-5">
                          <h4 class="m-0 ft-medium">
                            Login for a seamless experience
                          </h4>
                        </div>
                        <Form>
                          <Form.Group controlId="mobile">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Mobile Number*"
                              className="rounded bg-light"
                              onChange={(e) => setMobileNumber(e.target.value)}
                            />
                          </Form.Group>

                          <div className="text-center my-3">
                            <Button
                              variant="primary"
                              className="w-100 theme-bg text-light rounded ft-medium"
                              onClick={handleLoginSubmit}
                            >
                              Sign In
                            </Button>
                          </div>
                        </Form>
                      </div>
                    </div>
                  )}
                  {!isLogin && otpDialogOpen && currentStep === "otp" && (
                    <div className="signup-screen-wrap">
                      <div className="signup-screen-single">
                        <a
                          className="nav-brand d-flex justify-content-center align-items-center"
                          href="#"
                        >
                          <img src="images/logo.png" className="logo" alt="" />
                        </a>
                        <div class="text-center mb-5">
                          <h4 class="m-0 ft-medium">OTP Verification</h4>
                        </div>
                        <Form>
                          <Form.Group controlId="mobile">
                            <Form.Label>OTP</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter OTP*"
                              className="rounded bg-light"
                              value={otpCode}
                              onChange={(e) => setOtpCode(e.target.value)}
                            />
                          </Form.Group>

                          <div className="text-center row justify-content-center mt-4 my-3">
                            <div className="col-5">
                              <Button
                                variant="primary"
                                className="w-100 theme-bg text-light rounded ft-medium"
                                onClick={handleGoBack}
                              >
                                Back
                              </Button>
                            </div>
                            <div className="col-5">
                              <Button
                                variant="primary"
                                className="w-100 theme-bg text-light rounded ft-medium"
                                onClick={handleOtpSubmit}
                              >
                                Submit OTP
                              </Button>
                            </div>
                          </div>
                        </Form>
                      </div>
                    </div>
                  )}
                  {isLogin && (
                    <div className="text-center">
                      <div className="d-flex mb-2 justify-content-center align-items-center">
                        <img
                          src="images/logo.png"
                          className="img-footer small mb-2"
                          alt=""
                        />
                        <h5 className="ps-2 mb-0">FG Group</h5>
                      </div>
                      <h3>You have already Logged in</h3>
                    </div>
                  )}
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
