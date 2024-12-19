import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import axiosInstance from "../js/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [currentStep, setCurrentStep] = React.useState("login");
  const [otpDialogOpen, setOtpDialogOpen] = React.useState(false);
  const [otpCode, setOtpCode] = React.useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleShow = (event) => {
    event.preventDefault();
    setShowModal(true);
  };
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsFixed(true);
        console.log(true);
      } else {
        setIsFixed(false);
        console.log(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
    <>
      <div
        className={`header header-light dark-text ${
          isFixed ? "header-fixed" : ""
        }`}
      >
        <div className="container">
          <nav id="navigation" className="navigation navigation-landscape">
            <div className="nav-header">
              <a className="nav-brand d-flex align-items-center" href="#">
                <img src="images/logo.png" className="logo" alt="" />
                <h5 className="ps-2 mb-0">FG Group</h5>
              </a>
              <div className="nav-toggle" />
              <div className="mobile_nav">
                <ul>
                  <li>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#login"
                      className="theme-cl fs-lg"
                    >
                      <i className="lni lni-user" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="add-listing.html"
                      className="crs_yuo12 w-auto text-white theme-bg"
                    >
                      <span className="embos_45">
                        <i className="fas fa-plus me-2" />
                        Add Listing
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="nav-menus-wrapper"
              style={{ transitionProperty: "none" }}
            >
              <ul className="nav-menu">
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/listing-list">Listings</Link>
                </li>
                {isLogin ? (
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                ) : (
                  ""
                )}
              </ul>
              <ul className="nav-menu nav-menu-social align-to-right">
                {isLogin ? (
                  ""
                ) : (
                  <li>
                    <a href="#" onClick={handleShow} className="ft-bold">
                      <i className="fas fa-sign-in-alt me-1 theme-cl" />
                      Sign In
                    </a>
                  </li>
                )}
                <li className="add-listing">
                  <Link to="/add-listing">
                    <i className="fas fa-plus me-2" />
                    Add Listing
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <Modal
        show={showModal && currentStep === "login"}
        onHide={handleClose}
        centered
      >
        <div class="modal-headers">
          <button type="button" class="close" onClick={handleClose}>
            <span class="ti-close"></span>
          </button>
        </div>
        <Modal.Body className="p-5">
          <a
            className="nav-brand d-flex justify-content-center align-items-center"
            href="#"
          >
            <img src="images/logo.png" className="logo" alt="" />
          </a>
          <h3 className="text-center">Welcome</h3>
          <div class="text-center mb-5">
            <h4 class="m-0 ft-medium">Login for a seamless experience</h4>
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
        </Modal.Body>
      </Modal>

      <Modal
        show={otpDialogOpen && currentStep === "otp"}
        onHide={() => setOtpDialogOpen(false)}
        centered
      >
        <div class="modal-headers">
          <button
            type="button"
            class="close"
            onClick={() => setOtpDialogOpen(false)}
          >
            <span class="ti-close"></span>
          </button>
        </div>
        <Modal.Body className="p-5">
          <a
            className="nav-brand d-flex justify-content-center align-items-center"
            href="#"
          >
            <img src="images/logo.png" className="logo" alt="" />
          </a>
          <div class="text-center mb-4">
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
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Header;
