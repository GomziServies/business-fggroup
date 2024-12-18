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
import { Link } from "react-router-dom";

const ListingList = () => {
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
          {/* End Navigation */}
          <div className="clearfix" />
          {/* ============================================================== */}
          {/* Top header  */}
          {/* ============================================================== */}
          {/* =============================== Dashboard Header ========================== */}
          <section
            className="bg-cover position-relative"
            style={{ background: "red url(images/cover.jpg) no-repeat" }}
            data-overlay={3}
          >
            <div className="abs-list-sec">
              <a href="dashboard-add-listing.html" className="add-list-btn">
                <i className="fas fa-plus me-2" />
                Add Listing
              </a>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="dashboard-head-author-clicl">
                    <div className="dashboard-head-author-thumb">
                      <img src="images/t-7.png" className="img-fluid" alt="" />
                    </div>
                    <div className="dashboard-head-author-caption">
                      <div className="dashploio">
                        <h4>Charles D. Robinson</h4>
                      </div>
                      <div className="dashploio">
                        <span className="agd-location">
                          <i className="lni lni-map-marker me-1" />
                          San Francisco, USA
                        </span>
                      </div>
                      <div className="listing-rating high">
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                        <i className="fas fa-star active" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* =============================== Dashboard Header ========================== */}
          {/* ======================= dashboard Detail ======================== */}
          <div className="goodup-dashboard-wrap gray px-4 py-5">
            <a
              className="mobNavigation"
              data-bs-toggle="collapse"
              href="#MobNav"
              role="button"
              aria-expanded="false"
              aria-controls="MobNav"
            >
              <i className="fas fa-bars me-2" />
              Dashboard Navigation
            </a>
            <div id="MobNav" className="text-start">
              <div className="goodup-dashboard-nav sticky-top">
                <div className="goodup-dashboard-inner">
                  <ul data-submenu-title="Main Navigation">
                    <li className="active">
                      <Link to="/listing-list">
                        <i className="lni lni-files me-2" />
                        My Listings
                      </Link>
                    </li>
                    <li>
                      <Link to="/add-listing">
                        <i className="lni lni-add-files me-2" />
                        Add Listing
                      </Link>
                    </li>
                    {/* </ul> */}
                    {/* <ul data-submenu-title="My Accounts"> */}
                    <li>
                      <Link to="/profile">
                        <i className="lni lni-user me-2" />
                        My Profile{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/login">
                        <i className="lni lni-power-switch me-2" />
                        Log Out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="goodup-dashboard-content text-start">
              <div className="dashboard-tlbar d-block mb-5">
                <div className="row">
                  <div className="colxl-12 col-lg-12 col-md-12">
                    <h1 className="ft-medium">Manage Listings</h1>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item text-muted">
                          <a href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item text-muted">
                          <a href="#">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#" className="theme-cl">
                            Manage Listings
                          </a>
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="dashboard-widg-bar d-block">
                <div className="row">
                  <div className="col-xl-12 col-lg-12">
                    <div className="dashboard-list-wraps bg-white rounded mb-4">
                      <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                        <div className="dashboard-list-wraps-flx">
                          <h4 className="mb-0 ft-medium fs-md">
                            <i className="fa fa-file-alt me-2 theme-cl fs-sm" />
                            My Listings
                          </h4>
                        </div>
                      </div>
                      <div className="dashboard-list-wraps-body py-3 px-3">
                        <div className="dashboard-listing-wraps">
                          {/* Single Listing Item */}
                          <div className="dsd-single-listing-wraps">
                            <div className="dsd-single-lst-thumb">
                              <img
                                src="images/l-1.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="dsd-single-lst-caption">
                              <div className="dsd-single-lst-title">
                                <h5>Rajwara Marriage Home</h5>
                              </div>
                              <span className="agd-location">
                                <i className="lni lni-map-marker me-1" />
                                San Francisco, USA
                              </span>
                              <div className="ico-content">
                                <div className="Goodup-ft-first">
                                  <div className="Goodup-rating">
                                    <div className="Goodup-rates">
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                    </div>
                                  </div>
                                  <div className="Goodup-price-range">
                                    <span className="ft-medium">
                                      34 Reviews
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="dsd-single-lst-footer">
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-edit mr-1"
                                >
                                  <i className="fas fa-edit me-1" />
                                  Edit
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-view mr-1"
                                >
                                  <i className="fas fa-eye me-1" />
                                  View
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-delete"
                                >
                                  <i className="fas fa-trash me-1" />
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* Single Listing Item */}
                          <div className="dsd-single-listing-wraps">
                            <div className="dsd-single-lst-thumb">
                              <img
                                src="images/l-2.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="dsd-single-lst-caption">
                              <div className="dsd-single-lst-title">
                                <h5>Decathlon Sport House</h5>
                              </div>
                              <span className="agd-location">
                                <i className="lni lni-map-marker me-1" />
                                San Francisco, USA
                              </span>
                              <div className="ico-content">
                                <div className="Goodup-ft-first">
                                  <div className="Goodup-rating">
                                    <div className="Goodup-rates">
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                    </div>
                                  </div>
                                  <div className="Goodup-price-range">
                                    <span className="ft-medium">
                                      34 Reviews
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="dsd-single-lst-footer">
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-edit mr-1"
                                >
                                  <i className="fas fa-edit me-1" />
                                  Edit
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-view mr-1"
                                >
                                  <i className="fas fa-eye me-1" />
                                  View
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-delete"
                                >
                                  <i className="fas fa-trash me-1" />
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* Single Listing Item */}
                          <div className="dsd-single-listing-wraps">
                            <div className="dsd-single-lst-thumb">
                              <img
                                src="images/l-3.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="dsd-single-lst-caption">
                              <div className="dsd-single-lst-title">
                                <h5>The Gold Hotel Lalit</h5>
                              </div>
                              <span className="agd-location">
                                <i className="lni lni-map-marker me-1" />
                                San Francisco, USA
                              </span>
                              <div className="ico-content">
                                <div className="Goodup-ft-first">
                                  <div className="Goodup-rating">
                                    <div className="Goodup-rates">
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                    </div>
                                  </div>
                                  <div className="Goodup-price-range">
                                    <span className="ft-medium">
                                      34 Reviews
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="dsd-single-lst-footer">
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-edit mr-1"
                                >
                                  <i className="fas fa-edit me-1" />
                                  Edit
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-view mr-1"
                                >
                                  <i className="fas fa-eye me-1" />
                                  View
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-delete"
                                >
                                  <i className="fas fa-trash me-1" />
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* Single Listing Item */}
                          <div className="dsd-single-listing-wraps">
                            <div className="dsd-single-lst-thumb">
                              <img
                                src="images/l-4.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="dsd-single-lst-caption">
                              <div className="dsd-single-lst-title">
                                <h5>Fitness Revolution Gym</h5>
                              </div>
                              <span className="agd-location">
                                <i className="lni lni-map-marker me-1" />
                                San Francisco, USA
                              </span>
                              <div className="ico-content">
                                <div className="Goodup-ft-first">
                                  <div className="Goodup-rating">
                                    <div className="Goodup-rates">
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                    </div>
                                  </div>
                                  <div className="Goodup-price-range">
                                    <span className="ft-medium">
                                      34 Reviews
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="dsd-single-lst-footer">
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-edit mr-1"
                                >
                                  <i className="fas fa-edit me-1" />
                                  Edit
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-view mr-1"
                                >
                                  <i className="fas fa-eye me-1" />
                                  View
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-delete"
                                >
                                  <i className="fas fa-trash me-1" />
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* Single Listing Item */}
                          <div className="dsd-single-listing-wraps">
                            <div className="dsd-single-lst-thumb">
                              <img
                                src="images/l-5.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="dsd-single-lst-caption">
                              <div className="dsd-single-lst-title">
                                <h5>Pretty Woman Smart Batra</h5>
                              </div>
                              <span className="agd-location">
                                <i className="lni lni-map-marker me-1" />
                                San Francisco, USA
                              </span>
                              <div className="ico-content">
                                <div className="Goodup-ft-first">
                                  <div className="Goodup-rating">
                                    <div className="Goodup-rates">
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                    </div>
                                  </div>
                                  <div className="Goodup-price-range">
                                    <span className="ft-medium">
                                      34 Reviews
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="dsd-single-lst-footer">
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-edit mr-1"
                                >
                                  <i className="fas fa-edit me-1" />
                                  Edit
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-view mr-1"
                                >
                                  <i className="fas fa-eye me-1" />
                                  View
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-delete"
                                >
                                  <i className="fas fa-trash me-1" />
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* Single Listing Item */}
                          <div className="dsd-single-listing-wraps">
                            <div className="dsd-single-lst-thumb">
                              <img
                                src="images/l-6.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="dsd-single-lst-caption">
                              <div className="dsd-single-lst-title">
                                <h5>The Sartaj Blue Night</h5>
                              </div>
                              <span className="agd-location">
                                <i className="lni lni-map-marker me-1" />
                                San Francisco, USA
                              </span>
                              <div className="ico-content">
                                <div className="Goodup-ft-first">
                                  <div className="Goodup-rating">
                                    <div className="Goodup-rates">
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                    </div>
                                  </div>
                                  <div className="Goodup-price-range">
                                    <span className="ft-medium">
                                      34 Reviews
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="dsd-single-lst-footer">
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-edit mr-1"
                                >
                                  <i className="fas fa-edit me-1" />
                                  Edit
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-view mr-1"
                                >
                                  <i className="fas fa-eye me-1" />
                                  View
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-delete"
                                >
                                  <i className="fas fa-trash me-1" />
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* Single Listing Item */}
                          <div className="dsd-single-listing-wraps">
                            <div className="dsd-single-lst-thumb">
                              <img
                                src="images/l-8.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="dsd-single-lst-caption">
                              <div className="dsd-single-lst-title">
                                <h5>The Great Allante Shop</h5>
                              </div>
                              <span className="agd-location">
                                <i className="lni lni-map-marker me-1" />
                                San Francisco, USA
                              </span>
                              <div className="ico-content">
                                <div className="Goodup-ft-first">
                                  <div className="Goodup-rating">
                                    <div className="Goodup-rates">
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                    </div>
                                  </div>
                                  <div className="Goodup-price-range">
                                    <span className="ft-medium">
                                      34 Reviews
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="dsd-single-lst-footer">
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-edit mr-1"
                                >
                                  <i className="fas fa-edit me-1" />
                                  Edit
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-view mr-1"
                                >
                                  <i className="fas fa-eye me-1" />
                                  View
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="btn btn-delete"
                                >
                                  <i className="fas fa-trash me-1" />
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* footer */}
              <div className="row">
                <div className="col-md-12">
                  <div className="py-3">
                    © 2022 Goodup. Designd By ThemezHub.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ======================= dashboard Detail End ======================== */}
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

export default ListingList;
