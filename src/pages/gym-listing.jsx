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
import ExploreGomzi from "../components/ExploreGomzi";
import GymMainActivity from "../components/GymMainActivity";

const GymListing = () => {
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
                    Gym Listing
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
                message={"Hello, I wanted to know more about Business Listing."}
                options={{ pageRef: true }}
            />
            <>
                {loading && <div className="preloader" />}
                <div id="main-wrapper">
                    <Header />
                    <div className="clearfix" />
                    <section
                        className="container-fluid p-0 text-start d-none d-md-block"
                        style={{ marginTop: "70px" }}
                    >
                        <img
                            src="images/main-page-banner.webp"
                            className="img"
                            alt=""
                            width="100%"
                        />
                    </section>
                    <section
                        className="container-fluid p-0 text-start d-block d-md-none"
                        style={{ marginTop: "70px" }}
                    >
                        <img
                            src="images/main-page-banner-mobile.webp"
                            className="img"
                            alt=""
                            width="100%"
                        />
                    </section>
                    <section className="gray py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div className="row justify-content-center mt-5 g-2">
                                        <div className="col-12 mb-3">
                                            <div className="">
                                                <h2 className="ft-bold">The Best 10 Restaurants in San Antonio, TX</h2>
                                            </div>
                                        </div>
                                        <div className="text-start col-12">
                                            <div className="d-block grouping-listings">
                                                <GymMainActivity />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="list-411">
                                                <div className="list-412">
                                                    <h4 className="ft-bold mb-0">Can't find the business?</h4>
                                                    <span>Adding a business to Goodup is always free.</span>
                                                </div>
                                                <div className="list-413">
                                                    <a className="btn text-light theme-bg rounded" href="#">Add business</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <h4 className="ft-bold">Frequently Asked Questions and Answers</h4>
                                            <div id="accordion2" className="accordion">
                                                <div className="card">
                                                    <div className="card-header" id="h7">
                                                        <h5 className="mb-0">
                                                            <button className="btn btn-link" data-bs-toggle="collapse"
                                                                data-bs-target="#ord7" aria-expanded="true" aria-controls="ord7">
                                                                Can I get GoodUP listing for free?
                                                            </button>
                                                        </h5>
                                                    </div>

                                                    <div id="ord7" className="collapse show" aria-labelledby="h7"
                                                        data-parent="#accordion2">
                                                        <div className="card-body">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                                            mollit anim id est laborum.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="h8">
                                                        <h5 className="mb-0">
                                                            <button className="btn btn-link collapsed" data-bs-toggle="collapse"
                                                                data-bs-target="#ord8" aria-expanded="false" aria-controls="ord8">
                                                                How to Permanently Delete Files From Windows?
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="ord8" className="collapse" aria-labelledby="h8" data-parent="#accordion2">
                                                        <div className="card-body">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                                            mollit anim id est laborum.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="h9">
                                                        <h5 className="mb-0">
                                                            <button className="btn btn-link collapsed" data-bs-toggle="collapse"
                                                                data-bs-target="#ord9" aria-expanded="false" aria-controls="ord9">
                                                                Can I get GoodUP listing for free?
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="ord9" className="collapse" aria-labelledby="h9" data-parent="#accordion2">
                                                        <div className="card-body">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                                            mollit anim id est laborum.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="h4">
                                                        <h5 className="mb-0">
                                                            <button className="btn btn-link collapsed" data-bs-toggle="collapse"
                                                                data-bs-target="#ord4" aria-expanded="false" aria-controls="ord4">
                                                                For GoodUp which lisence is better for business purpose?
                                                            </button>
                                                        </h5>
                                                    </div>

                                                    <div id="ord4" className="collapse" aria-labelledby="h4" data-parent="#accordion2">
                                                        <div className="card-body">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                                            mollit anim id est laborum.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
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
