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
                    <div className="home-banner margin-bottom-0" style={{ background: "#f41b3b url(images/main-page-banner.webp) no-repeat", marginTop: '70px' }} data-overlay="5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="banner_caption text-center">
                                        <h1 className="banner_title ft-bold mb-1">Explore Great Place in Your Town</h1>
                                        <p className="fs-lg ft-light">Explore wonderful place to stay, salon, shoping, massage or visit local areas.</p>
                                    </div>
                                    <form className="main-search-wrap fl-wrap half-column mt-5">
                                        <div className="main-search-item">
                                            <span className="search-tag">Find</span>
                                            <input type="text" className="form-control radius" placeholder="Nail salons, plumbers, takeout..." />
                                        </div>
                                        <div className="main-search-button">
                                            <button className="btn full-width theme-bg text-white" type="button">Search<i className="fas fa-search"></i></button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="gray py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div className="row justify-content-center mt-5 g-2">
                                        <div className="text-start col-12">
                                            <div className="d-block grouping-listings">
                                                <GymMainActivity />
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
                                        <h6 className="text-muted mb-0">Our Partners</h6>
                                        <h2 className="ft-bold">We Have Worked with <span className="theme-cl">10,000+</span> Trusted Companies</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                                    <div className="empl-thumb text-center px-3 py-4">
                                        <img src="images/l-1.webp" className="img-fluid mx-auto" alt="" />
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                                    <div className="empl-thumb text-center px-3 py-4">
                                        <img src="images/l-2.webp" className="img-fluid mx-auto" alt="" />
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                                    <div className="empl-thumb text-center px-3 py-4">
                                        <img src="images/l-3.webp" className="img-fluid mx-auto" alt="" />
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                                    <div className="empl-thumb text-center px-3 py-4">
                                        <img src="images/l-4.webp" className="img-fluid mx-auto" alt="" />
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                                    <div className="empl-thumb text-center px-3 py-4">
                                        <img src="images/l-5.webp" className="img-fluid mx-auto" alt="" />
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                                    <div className="empl-thumb text-center px-3 py-4">
                                        <img src="images/l-6.webp" className="img-fluid mx-auto" alt="" />
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                                    <div className="empl-thumb text-center px-3 py-4">
                                        <img src="images/l-7.webp" className="img-fluid mx-auto" alt="" />
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                                    <div className="empl-thumb text-center px-3 py-4">
                                        <img src="images/l-8.webp" className="img-fluid mx-auto" alt="" />
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                                    <div className="empl-thumb text-center px-3 py-4">
                                        <img src="images/l-9.webp" className="img-fluid mx-auto" alt="" />
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                                    <div className="empl-thumb text-center px-3 py-4">
                                        <img src="images/l-10.webp" className="img-fluid mx-auto" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-cover text-center py-5 mt-5" style={{ background: '#353535 url(images/bg.webp)' }} data-overlay="7">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7 col-md-10 text-center">
                                    <div className="sec-heading center">
                                        <h2 className="text-light ft-bold">Best In Canada</h2>
                                        <h3 className="text-light ft-medium mb-4">Visit The Best Spa & Hotels in California</h3>
                                        <p className="text-light mb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="counter-link">
                                        <a href="#" className="btn btn-md text-dark ft-medium btn-light">Explore & Submit Listings</a>
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
                                                <p className="theme-cl px-3 py-1 rounded bg-light-danger d-inline-flex">Download apps
                                                </p>
                                                <h2 className="ft-bold">Download the Goodup App<br />For Easy Use</h2>
                                            </div>
                                            <div className="text mb-3 text-start">
                                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                                    praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                                                    excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                                                    officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                                            </div>
                                            <div className="position-relative text-start row">
                                                <div className="col-lg-4 col-md-4 col-4">
                                                    <h3 className="ft-bold theme-cl mb-0"><span className="count">10</span>k+</h3>
                                                    <p className="ft-medium">Active Jobs</p>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-4">
                                                    <h3 className="ft-bold theme-cl mb-0"><span className="count">12</span>k+</h3>
                                                    <p className="ft-medium">Resumes</p>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-4">
                                                    <h3 className="ft-bold theme-cl mb-0"><span className="count">07</span>k+</h3>
                                                    <p className="ft-medium">Employers</p>
                                                </div>
                                            </div>
                                            <div className="btn-box clearfix mt-5">
                                                <a href="index.html" className="download-btn play-store me-1 d-inline-flex"><img
                                                    src="images/ios.webp" width="200" alt="" /></a>
                                                <a href="index.html" className="download-btn play-store ms-2 mb-1 d-inline-flex"><img
                                                    src="images/and.webp" width="200" alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12 col-sm-12 image-column">
                                    <div className="image-box">
                                        <figure className="image"><img src="images/app.webp" className="img-fluid" alt="" /></figure>
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
