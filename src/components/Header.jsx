import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";

function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
              </ul>
              <ul className="nav-menu nav-menu-social align-to-right">
                <li>
                  <a href="#" onClick={handleShow} className="ft-bold">
                    <i className="fas fa-sign-in-alt me-1 theme-cl" />
                    Sign In
                  </a>
                </li>
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

      <Modal show={showModal} onHide={handleClose} centered>
        <div class="modal-headers">
          <button type="button" class="close" onClick={handleClose}>
            <span class="ti-close"></span>
          </button>
        </div>
        <Modal.Body className="p-5">
          <div class="text-center mb-4">
            <h4 class="m-0 ft-medium">Login Your Account</h4>
          </div>
          <Form>
            <Form.Group controlId="username">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username*"
                className="rounded bg-light"
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password*"
                className="rounded bg-light"
              />
            </Form.Group>

            <Form.Group>
              <div class="d-flex align-items-center justify-content-between">
                <div class="flex-1">
                  <input
                    id="dd"
                    class="checkbox-custom"
                    name="dd"
                    type="checkbox"
                  />
                  <label for="dd" class="checkbox-custom-label">
                    Remember Me
                  </label>
                </div>
                <div class="eltio_k2">
                  <a href="#" class="theme-cl">
                    Lost Your Password?
                  </a>
                </div>
              </div>
            </Form.Group>

            <div className="text-center my-3">
              <Button
                variant="primary"
                type="submit"
                className="w-100 theme-bg text-light rounded ft-medium"
              >
                Sign In
              </Button>
            </div>

            <div class="form-group text-center mb-0">
              <p class="extra">Or login with</p>
              <div class="option-log">
                <div class="single-log-opt">
                  <a href="javascript:void(0);" class="log-btn">
                    <img src="images/c-1.png" class="img-fluid" alt="" />
                    Login with Google
                  </a>
                </div>
                <div class="single-log-opt">
                  <a href="javascript:void(0);" class="log-btn">
                    <img src="images/facebook.png" class="img-fluid" alt="" />
                    Login with Facebook
                  </a>
                </div>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Header;
