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
import Header from "../../components/Header";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
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
                        Find Your Perfect Place in{" "}
                        <span className="theme-cl">Los Angeles</span>
                      </h1>
                      <p className="fs-lg fw-light">
                        Explore wonderful place to stay, salon, shoping or visit
                        local areas.
                      </p>
                    </div>
                    <form className="main-search-wrap fl-wrap one-column mb-5">
                      <div className="main-search-item">
                        <span className="search-tag">Find</span>
                        <input
                          type="text"
                          className="form-control radius"
                          placeholder="Nail salons, plumbers, takeout..."
                        />
                      </div>
                      <div className="main-search-button">
                        <button
                          className="btn full-width theme-bg text-white"
                          type="button"
                        >
                          Search
                          <i className="fas fa-search" />
                        </button>
                      </div>
                    </form>
                    <div className="Goodup-bnr-cats dark rounded">

                      <li>Popular:</li>
                      <li>
                        <a href="half-map-search-1.html">Las Vegas</a>
                      </li>
                      <li>
                        <a href="half-map-search-1.html">Houston</a>
                      </li>
                      <li>
                        <a href="half-map-search-1.html">Las Vegas</a>
                      </li>
                      <li>
                        <a href="half-map-search-1.html">San Jose</a>
                      </li>
                    </ul>
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
                  {/* <div className="singleSlide">
                      <img
                        src="images/imgSlide-02.png"
                        className="img"
                        alt="Img Slide"
                      />
                    </div>
                    <div className="singleSlide">
                      <img
                        src="images/imgSlide-03.png"
                        className="img"
                        alt="Img Slide"
                      />
                    </div>
                    <div className="singleSlide">
                      <img
                        src="images/imgSlide-04.png"
                        className="img"
                        alt="Img Slide"
                      />
                    </div> */}
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
                    <span className="off">Summer Sale</span>
                    <h4 className="title">30% Off on Eat &amp; Drink</h4>
                    <a href="#" className="btn btn-md btn-dark">
                      View Offers
                    </a>
                  </div>
                  <div className="slice">
                    <img
                      src="images/imgSlide-01.png"
                      className="img"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="offerWrap offer-02">
                  <div className="offerCaps">
                    <span className="off">Delight Offer</span>
                    <h4 className="title">40% Off for Offices &amp; Space</h4>
                    <a href="#" className="btn btn-md btn-dark">
                      View Offers
                    </a>
                  </div>
                  <div className="slice">
                    <img
                      src="images/imgSlide-02.png"
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
        <section className="space">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="sec_title position-relative mb-5">
                  <h6 className="text-muted mb-0">Recent Listings</h6>
                  <h2 className="ft-bold">
                    Browse Recent <span className="theme-cl">Listings</span>
                  </h2>
                </div>
              </div>
            </div>
            {/* row */}
            <div className="row justify-content-center text-start">
              {/* Single */}
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="Goodup-grid-wrap">
                  <div className="Goodup-grid-upper">
                    <div className="Goodup-bookmark-btn">
                      <button type="button">
                        <i className="lni lni-heart-filled position-absolute" />
                      </button>
                    </div>
                    <div className="Goodup-pos ab-left">
                      <div className="Goodup-status open me-2">Open</div>
                      <div className="Goodup-featured-tag">Featured</div>
                    </div>
                    <div className="Goodup-grid-thumb">
                      <a
                        href="single-listing-detail-3.html"
                        className="d-block text-center m-auto"
                      >
                        <img
                          src="images/l-1.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="Goodup-rating overlay">
                      <div className="Goodup-pr-average high">4.4</div>
                      <div className="Goodup-aldeio">
                        <div className="Goodup-rates">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <div className="Goodup-all-review">
                          <span>32 Reviews</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Goodup-grid-fl-wrap">
                    <div className="Goodup-caption px-3 py-2">
                      <div className="Goodup-author">
                        <a href="author-detail.html">
                          <img
                            src="images/t-1.png"
                            className="img-fluid circle"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="Goodup-cates multi">
                        <a href="half-map-search-1.html" className="cats-1">
                          Love
                        </a>
                        <a href="half-map-search-1.html" className="cats-2">
                          Wedding
                        </a>
                        <a href="half-map-search-1.html">+2</a>
                      </div>
                      <h4 className="mb-0 ft-medium medium">
                        <a
                          href="single-listing-detail-3.html"
                          className="text-dark fs-md"
                        >
                          Rajwara Marriage Home
                          <span className="verified-badge">
                            <i className="fas fa-check-circle" />
                          </span>
                        </a>
                      </h4>
                      <div className="Goodup-middle-caption mt-2">
                        <p className="fw-normal">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus
                        </p>
                        <div className="Goodup-facilities-wrap mb-0">
                          <div className="Goodup-facility-title">
                            Facilities :
                          </div>
                          <div className="Goodup-facility-list">
                            <ul className="no-list-style">
                              <li
                                data-microtip-position="top"
                                data-tooltip="Free WiFi"
                              >
                                <i className="fas fa-wifi" />
                              </li>
                              <li>
                                <i className="fas fa-swimming-pool" />
                              </li>
                              <li>
                                <i className="fas fa-parking" />
                              </li>
                              <li>
                                <i className="fas fa-dog" />
                              </li>
                              <li>
                                <i className="fas fa-fan" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Goodup-grid-footer py-2 px-3">
                      <div className="Goodup-ft-first">
                        <div className="Goodup-location">
                          <i className="fas fa-map-marker-alt me-1 theme-cl" />
                          Meltron Silver, UK
                        </div>
                      </div>
                      <div className="Goodup-ft-last">
                        <div className="Goodup-inline">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-envelope position-absolute" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single */}
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="Goodup-grid-wrap">
                  <div className="Goodup-grid-upper">
                    <div className="Goodup-bookmark-btn">
                      <button type="button">
                        <i className="lni lni-heart-filled position-absolute" />
                      </button>
                    </div>
                    <div className="Goodup-pos ab-left">
                      <div className="Goodup-status close me-2">Closed</div>
                    </div>
                    <div className="Goodup-grid-thumb">
                      <a
                        href="single-listing-detail-3.html"
                        className="d-block text-center m-auto"
                      >
                        <img
                          src="images/l-2.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="Goodup-rating overlay">
                      <div className="Goodup-pr-average mid">3.4</div>
                      <div className="Goodup-aldeio">
                        <div className="Goodup-rates">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <div className="Goodup-all-review">
                          <span>19 Reviews</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Goodup-grid-fl-wrap">
                    <div className="Goodup-caption px-3 py-2">
                      <div className="Goodup-author">
                        <a href="author-detail.html">
                          <img
                            src="images/t-2.png"
                            className="img-fluid circle"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="Goodup-cates multi">
                        <a href="half-map-search-1.html" className="cats-1">
                          Workout
                        </a>
                        <a href="half-map-search-1.html" className="cats-2">
                          Fitness
                        </a>
                      </div>
                      <h4 className="mb-0 ft-medium medium">
                        <a
                          href="single-listing-detail-3.html"
                          className="text-dark fs-md"
                        >
                          Decathlon Sport House
                          <span className="verified-badge">
                            <i className="fas fa-check-circle" />
                          </span>
                        </a>
                      </h4>
                      <div className="Goodup-middle-caption mt-2">
                        <p className="fw-normal">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus
                        </p>
                        <div className="Goodup-facilities-wrap mb-0">
                          <div className="Goodup-facility-title">
                            Facilities :
                          </div>
                          <div className="Goodup-facility-list">
                            <ul className="no-list-style">
                              <li
                                data-microtip-position="top"
                                data-tooltip="Free WiFi"
                              >
                                <i className="fas fa-wifi" />
                              </li>
                              <li>
                                <i className="fas fa-swimming-pool" />
                              </li>
                              <li>
                                <i className="fas fa-parking" />
                              </li>
                              <li>
                                <i className="fas fa-dog" />
                              </li>
                              <li>
                                <i className="fas fa-fan" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Goodup-grid-footer py-2 px-3">
                      <div className="Goodup-ft-first">
                        <div className="Goodup-location">
                          <i className="fas fa-map-marker-alt me-1 theme-cl" />
                          California, USA
                        </div>
                      </div>
                      <div className="Goodup-ft-last">
                        <div className="Goodup-inline">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-envelope position-absolute" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single */}
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="Goodup-grid-wrap">
                  <div className="Goodup-grid-upper">
                    <div className="Goodup-bookmark-btn">
                      <button type="button">
                        <i className="lni lni-heart-filled position-absolute" />
                      </button>
                    </div>
                    <div className="Goodup-pos ab-left">
                      <div className="Goodup-status open me-2">Open</div>
                      <div className="Goodup-featured-tag">Featured</div>
                    </div>
                    <div className="Goodup-grid-thumb">
                      <a
                        href="single-listing-detail-3.html"
                        className="d-block text-center m-auto"
                      >
                        <img
                          src="images/l-3.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="Goodup-rating overlay">
                      <div className="Goodup-pr-average poor">2.8</div>
                      <div className="Goodup-aldeio">
                        <div className="Goodup-rates">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <div className="Goodup-all-review">
                          <span>30 Reviews</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Goodup-grid-fl-wrap">
                    <div className="Goodup-caption px-3 py-2">
                      <div className="Goodup-author">
                        <a href="author-detail.html">
                          <img
                            src="images/t-3.png"
                            className="img-fluid circle"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="Goodup-cates multi">
                        <a href="half-map-search-1.html" className="cats-1">
                          Hotel
                        </a>
                        <a href="half-map-search-1.html" className="cats-2">
                          Villa
                        </a>
                        <a href="half-map-search-1.html">+2</a>
                      </div>
                      <h4 className="mb-0 ft-medium medium">
                        <a
                          href="single-listing-detail-3.html"
                          className="text-dark fs-md"
                        >
                          The Gold Hotel Lalit
                          <span className="verified-badge">
                            <i className="fas fa-check-circle" />
                          </span>
                        </a>
                      </h4>
                      <div className="Goodup-middle-caption mt-2">
                        <p className="fw-normal">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus
                        </p>
                        <div className="Goodup-facilities-wrap mb-0">
                          <div className="Goodup-facility-title">
                            Facilities :
                          </div>
                          <div className="Goodup-facility-list">
                            <ul className="no-list-style">
                              <li
                                data-microtip-position="top"
                                data-tooltip="Free WiFi"
                              >
                                <i className="fas fa-wifi" />
                              </li>
                              <li>
                                <i className="fas fa-swimming-pool" />
                              </li>
                              <li>
                                <i className="fas fa-parking" />
                              </li>
                              <li>
                                <i className="fas fa-dog" />
                              </li>
                              <li>
                                <i className="fas fa-fan" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Goodup-grid-footer py-2 px-3">
                      <div className="Goodup-ft-first">
                        <div className="Goodup-location">
                          <i className="fas fa-map-marker-alt me-1 theme-cl" />
                          Montreal, Australia
                        </div>
                      </div>
                      <div className="Goodup-ft-last">
                        <div className="Goodup-inline">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-envelope position-absolute" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single */}
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="Goodup-grid-wrap">
                  <div className="Goodup-grid-upper">
                    <div className="Goodup-bookmark-btn">
                      <button type="button">
                        <i className="lni lni-heart-filled position-absolute" />
                      </button>
                    </div>
                    <div className="Goodup-pos ab-left">
                      <div className="Goodup-status close me-2">Closed</div>
                    </div>
                    <div className="Goodup-grid-thumb">
                      <a
                        href="single-listing-detail-3.html"
                        className="d-block text-center m-auto"
                      >
                        <img
                          src="images/l-4.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="Goodup-rating overlay">
                      <div className="Goodup-pr-average high">4.8</div>
                      <div className="Goodup-aldeio">
                        <div className="Goodup-rates">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <div className="Goodup-all-review">
                          <span>56 Reviews</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Goodup-grid-fl-wrap">
                    <div className="Goodup-caption px-3 py-2">
                      <div className="Goodup-author">
                        <a href="author-detail.html">
                          <img
                            src="images/t-4.png"
                            className="img-fluid circle"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="Goodup-cates multi">
                        <a href="half-map-search-1.html" className="cats-1">
                          Zym
                        </a>
                        <a href="half-map-search-1.html" className="cats-2">
                          Fitness
                        </a>
                      </div>
                      <h4 className="mb-0 ft-medium medium">
                        <a
                          href="single-listing-detail-3.html"
                          className="text-dark fs-md"
                        >
                          Fitness Revolution Gym
                          <span className="verified-badge">
                            <i className="fas fa-check-circle" />
                          </span>
                        </a>
                      </h4>
                      <div className="Goodup-middle-caption mt-2">
                        <p className="fw-normal">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus
                        </p>
                        <div className="Goodup-facilities-wrap mb-0">
                          <div className="Goodup-facility-title">
                            Facilities :
                          </div>
                          <div className="Goodup-facility-list">
                            <ul className="no-list-style">
                              <li
                                data-microtip-position="top"
                                data-tooltip="Free WiFi"
                              >
                                <i className="fas fa-wifi" />
                              </li>
                              <li>
                                <i className="fas fa-swimming-pool" />
                              </li>
                              <li>
                                <i className="fas fa-parking" />
                              </li>
                              <li>
                                <i className="fas fa-dog" />
                              </li>
                              <li>
                                <i className="fas fa-fan" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Goodup-grid-footer py-2 px-3">
                      <div className="Goodup-ft-first">
                        <div className="Goodup-location">
                          <i className="fas fa-map-marker-alt me-1 theme-cl" />
                          Old Denver, USA
                        </div>
                      </div>
                      <div className="Goodup-ft-last">
                        <div className="Goodup-inline">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-envelope position-absolute" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single */}
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="Goodup-grid-wrap">
                  <div className="Goodup-grid-upper">
                    <div className="Goodup-bookmark-btn">
                      <button type="button">
                        <i className="lni lni-heart-filled position-absolute" />
                      </button>
                    </div>
                    <div className="Goodup-pos ab-left">
                      <div className="Goodup-status open me-2">Open</div>
                      <div className="Goodup-featured-tag">Featured</div>
                    </div>
                    <div className="Goodup-grid-thumb">
                      <a
                        href="single-listing-detail-3.html"
                        className="d-block text-center m-auto"
                      >
                        <img
                          src="images/l-5.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="Goodup-rating overlay">
                      <div className="Goodup-pr-average mid">3.2</div>
                      <div className="Goodup-aldeio">
                        <div className="Goodup-rates">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <div className="Goodup-all-review">
                          <span>12 Reviews</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Goodup-grid-fl-wrap">
                    <div className="Goodup-caption px-3 py-2">
                      <div className="Goodup-author">
                        <a href="author-detail.html">
                          <img
                            src="images/t-5.png"
                            className="img-fluid circle"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="Goodup-cates multi">
                        <a href="half-map-search-1.html" className="cats-1">
                          Beauty
                        </a>
                        <a href="half-map-search-1.html" className="cats-2">
                          Salon
                        </a>
                        <a href="half-map-search-1.html">+2</a>
                      </div>
                      <h4 className="mb-0 ft-medium medium">
                        <a
                          href="single-listing-detail-3.html"
                          className="text-dark fs-md"
                        >
                          Pretty Woman Smart Batra
                          <span className="verified-badge">
                            <i className="fas fa-check-circle" />
                          </span>
                        </a>
                      </h4>
                      <div className="Goodup-middle-caption mt-2">
                        <p className="fw-normal">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus
                        </p>
                        <div className="Goodup-facilities-wrap mb-0">
                          <div className="Goodup-facility-title">
                            Facilities :
                          </div>
                          <div className="Goodup-facility-list">
                            <ul className="no-list-style">
                              <li
                                data-microtip-position="top"
                                data-tooltip="Free WiFi"
                              >
                                <i className="fas fa-wifi" />
                              </li>
                              <li>
                                <i className="fas fa-swimming-pool" />
                              </li>
                              <li>
                                <i className="fas fa-parking" />
                              </li>
                              <li>
                                <i className="fas fa-dog" />
                              </li>
                              <li>
                                <i className="fas fa-fan" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Goodup-grid-footer py-2 px-3">
                      <div className="Goodup-ft-first">
                        <div className="Goodup-location">
                          <i className="fas fa-map-marker-alt me-1 theme-cl" />
                          104 Washington, USA
                        </div>
                      </div>
                      <div className="Goodup-ft-last">
                        <div className="Goodup-inline">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-envelope position-absolute" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single */}
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="Goodup-grid-wrap">
                  <div className="Goodup-grid-upper">
                    <div className="Goodup-bookmark-btn">
                      <button type="button">
                        <i className="lni lni-heart-filled position-absolute" />
                      </button>
                    </div>
                    <div className="Goodup-pos ab-left">
                      <div className="Goodup-status close me-2">Closed</div>
                    </div>
                    <div className="Goodup-grid-thumb">
                      <a
                        href="single-listing-detail-3.html"
                        className="d-block text-center m-auto"
                      >
                        <img
                          src="images/l-6.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="Goodup-rating overlay">
                      <div className="Goodup-pr-average high">4.2</div>
                      <div className="Goodup-aldeio">
                        <div className="Goodup-rates">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <div className="Goodup-all-review">
                          <span>21 Reviews</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Goodup-grid-fl-wrap">
                    <div className="Goodup-caption px-3 py-2">
                      <div className="Goodup-author">
                        <a href="author-detail.html">
                          <img
                            src="images/t-6.png"
                            className="img-fluid circle"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="Goodup-cates multi">
                        <a href="half-map-search-1.html" className="cats-1">
                          Hotel
                        </a>
                        <a href="half-map-search-1.html" className="cats-2">
                          Event
                        </a>
                      </div>
                      <h4 className="mb-0 ft-medium medium">
                        <a
                          href="single-listing-detail-3.html"
                          className="text-dark fs-md"
                        >
                          The Sartaj Blue Night
                          <span className="verified-badge">
                            <i className="fas fa-check-circle" />
                          </span>
                        </a>
                      </h4>
                      <div className="Goodup-middle-caption mt-2">
                        <p className="fw-normal">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus
                        </p>
                        <div className="Goodup-facilities-wrap mb-0">
                          <div className="Goodup-facility-title">
                            Facilities :
                          </div>
                          <div className="Goodup-facility-list">
                            <ul className="no-list-style">
                              <li
                                data-microtip-position="top"
                                data-tooltip="Free WiFi"
                              >
                                <i className="fas fa-wifi" />
                              </li>
                              <li>
                                <i className="fas fa-swimming-pool" />
                              </li>
                              <li>
                                <i className="fas fa-parking" />
                              </li>
                              <li>
                                <i className="fas fa-dog" />
                              </li>
                              <li>
                                <i className="fas fa-fan" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Goodup-grid-footer py-2 px-3">
                      <div className="Goodup-ft-first">
                        <div className="Goodup-location">
                          <i className="fas fa-map-marker-alt me-1 theme-cl" />
                          California, Canada
                        </div>
                      </div>
                      <div className="Goodup-ft-last">
                        <div className="Goodup-inline">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-envelope position-absolute" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single */}
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="Goodup-grid-wrap">
                  <div className="Goodup-grid-upper">
                    <div className="Goodup-bookmark-btn">
                      <button type="button">
                        <i className="lni lni-heart-filled position-absolute" />
                      </button>
                    </div>
                    <div className="Goodup-pos ab-left">
                      <div className="Goodup-status open me-2">Open</div>
                    </div>
                    <div className="Goodup-grid-thumb">
                      <a
                        href="single-listing-detail-3.html"
                        className="d-block text-center m-auto"
                      >
                        <img
                          src="images/l-7.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="Goodup-rating overlay">
                      <div className="Goodup-pr-average poor">2.3</div>
                      <div className="Goodup-aldeio">
                        <div className="Goodup-rates">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <div className="Goodup-all-review">
                          <span>17 Reviews</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Goodup-grid-fl-wrap">
                    <div className="Goodup-caption px-3 py-2">
                      <div className="Goodup-author">
                        <a href="author-detail.html">
                          <img
                            src="images/t-7.png"
                            className="img-fluid circle"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="Goodup-cates multi">
                        <a href="half-map-search-1.html" className="cats-1">
                          Cafe
                        </a>
                        <a href="half-map-search-1.html" className="cats-2">
                          Coffee
                        </a>
                        <a href="half-map-search-1.html">+1</a>
                      </div>
                      <h4 className="mb-0 ft-medium medium">
                        <a
                          href="single-listing-detail-3.html"
                          className="text-dark fs-md"
                        >
                          Pizza Delight Cafe
                          <span className="verified-badge">
                            <i className="fas fa-check-circle" />
                          </span>
                        </a>
                      </h4>
                      <div className="Goodup-middle-caption mt-2">
                        <p className="fw-normal">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus
                        </p>
                        <div className="Goodup-facilities-wrap mb-0">
                          <div className="Goodup-facility-title">
                            Facilities :
                          </div>
                          <div className="Goodup-facility-list">
                            <ul className="no-list-style">
                              <li
                                data-microtip-position="top"
                                data-tooltip="Free WiFi"
                              >
                                <i className="fas fa-wifi" />
                              </li>
                              <li>
                                <i className="fas fa-swimming-pool" />
                              </li>
                              <li>
                                <i className="fas fa-parking" />
                              </li>
                              <li>
                                <i className="fas fa-dog" />
                              </li>
                              <li>
                                <i className="fas fa-fan" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Goodup-grid-footer py-2 px-3">
                      <div className="Goodup-ft-first">
                        <div className="Goodup-location">
                          <i className="fas fa-map-marker-alt me-1 theme-cl" />
                          Liverpool, London
                        </div>
                      </div>
                      <div className="Goodup-ft-last">
                        <div className="Goodup-inline">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-envelope position-absolute" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single */}
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="Goodup-grid-wrap">
                  <div className="Goodup-grid-upper">
                    <div className="Goodup-bookmark-btn">
                      <button type="button">
                        <i className="lni lni-heart-filled position-absolute" />
                      </button>
                    </div>
                    <div className="Goodup-pos ab-left">
                      <div className="Goodup-status close me-2">Closed</div>
                      <div className="Goodup-featured-tag">Featured</div>
                    </div>
                    <div className="Goodup-grid-thumb">
                      <a
                        href="single-listing-detail-3.html"
                        className="d-block text-center m-auto"
                      >
                        <img
                          src="images/l-8.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="Goodup-rating overlay">
                      <div className="Goodup-pr-average high">4.6</div>
                      <div className="Goodup-aldeio">
                        <div className="Goodup-rates">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <div className="Goodup-all-review">
                          <span>26 Reviews</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Goodup-grid-fl-wrap">
                    <div className="Goodup-caption px-3 py-2">
                      <div className="Goodup-author">
                        <a href="author-detail.html">
                          <img
                            src="images/t-8.png"
                            className="img-fluid circle"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="Goodup-cates multi">
                        <a href="half-map-search-1.html" className="cats-1">
                          Shopping
                        </a>
                        <a href="half-map-search-1.html" className="cats-2">
                          Services
                        </a>
                      </div>
                      <h4 className="mb-0 ft-medium medium">
                        <a
                          href="single-listing-detail-3.html"
                          className="text-dark fs-md"
                        >
                          The Decore Allante Shop
                          <span className="verified-badge">
                            <i className="fas fa-check-circle" />
                          </span>
                        </a>
                      </h4>
                      <div className="Goodup-middle-caption mt-2">
                        <p className="fw-normal">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus
                        </p>
                        <div className="Goodup-facilities-wrap mb-0">
                          <div className="Goodup-facility-title">
                            Facilities :
                          </div>
                          <div className="Goodup-facility-list">
                            <ul className="no-list-style">
                              <li
                                data-microtip-position="top"
                                data-tooltip="Free WiFi"
                              >
                                <i className="fas fa-wifi" />
                              </li>
                              <li>
                                <i className="fas fa-swimming-pool" />
                              </li>
                              <li>
                                <i className="fas fa-parking" />
                              </li>
                              <li>
                                <i className="fas fa-dog" />
                              </li>
                              <li>
                                <i className="fas fa-fan" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Goodup-grid-footer py-2 px-3">
                      <div className="Goodup-ft-first">
                        <div className="Goodup-location">
                          <i className="fas fa-map-marker-alt me-1 theme-cl" />
                          San Francisco, USA
                        </div>
                      </div>
                      <div className="Goodup-ft-last">
                        <div className="Goodup-inline">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-envelope position-absolute" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /row */}
          </div>
        </section>
        {/* ======================= All Listings ======================== */}
        {/* ======================= Listing Categories ======================== */}
        <section className="space gray">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="sec_title position-relative text-center mb-5">
                  <h6 className="mb-0 theme-cl">Popular Categories</h6>
                  <h2 className="ft-bold">Browse Top Categories</h2>
                </div>
              </div>
            </div>
            {/* row */}
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="cats-wrap text-center">
                  <a
                    href="half-map-search-2.html"
                    className="Goodup-catg-wrap"
                  >
                    <div className="Goodup-catg-city">07 Cities</div>
                    <div className="Goodup-catg-icon">
                      <i className="fas fa-stethoscope" />
                    </div>
                    <div className="Goodup-catg-caption">
                      <h4 className="fs-md mb-0 ft-medium m-catrio">
                        Dentists
                      </h4>
                      <span className="text-muted">607 Listings</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="cats-wrap text-center">
                  <a
                    href="half-map-search-2.html"
                    className="Goodup-catg-wrap"
                  >
                    <div className="Goodup-catg-city">17 Cities</div>
                    <div className="Goodup-catg-icon">
                      <i className="fas fa-building" />
                    </div>
                    <div className="Goodup-catg-caption">
                      <h4 className="fs-md mb-0 ft-medium m-catrio">
                        IT &amp; Banking
                      </h4>
                      <span className="text-muted">76 Listings</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="cats-wrap text-center">
                  <a
                    href="half-map-search-2.html"
                    className="Goodup-catg-wrap"
                  >
                    <div className="Goodup-catg-city">19 Cities</div>
                    <div className="Goodup-catg-icon">
                      <i className="fas fa-shopping-basket" />
                    </div>
                    <div className="Goodup-catg-caption">
                      <h4 className="fs-md mb-0 ft-medium m-catrio">
                        Shoppings
                      </h4>
                      <span className="text-muted">112 Listings</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="cats-wrap text-center">
                  <a
                    href="half-map-search-2.html"
                    className="Goodup-catg-wrap"
                  >
                    <div className="Goodup-catg-city">32 Cities</div>
                    <div className="Goodup-catg-icon">
                      <i className="fas fa-screwdriver" />
                    </div>
                    <div className="Goodup-catg-caption">
                      <h4 className="fs-md mb-0 ft-medium m-catrio">
                        Home Services
                      </h4>
                      <span className="text-muted">322 Listings</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="cats-wrap text-center">
                  <a
                    href="half-map-search-2.html"
                    className="Goodup-catg-wrap"
                  >
                    <div className="Goodup-catg-city">27 Cities</div>
                    <div className="Goodup-catg-icon">
                      <i className="fas fa-basketball-ball" />
                    </div>
                    <div className="Goodup-catg-caption">
                      <h4 className="fs-md mb-0 ft-medium m-catrio">
                        Active Life
                      </h4>
                      <span className="text-muted">161 Listings</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="cats-wrap text-center">
                  <a
                    href="half-map-search-2.html"
                    className="Goodup-catg-wrap"
                  >
                    <div className="Goodup-catg-city">26 Cities</div>
                    <div className="Goodup-catg-icon">
                      <i className="fas fa-utensils" />
                    </div>
                    <div className="Goodup-catg-caption">
                      <h4 className="fs-md mb-0 ft-medium m-catrio">
                        Restaurants
                      </h4>
                      <span className="text-muted">172 Listings</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="cats-wrap text-center">
                  <a
                    href="half-map-search-2.html"
                    className="Goodup-catg-wrap"
                  >
                    <div className="Goodup-catg-city">10 Cities</div>
                    <div className="Goodup-catg-icon">
                      <i className="fas fa-book-open" />
                    </div>
                    <div className="Goodup-catg-caption">
                      <h4 className="fs-md mb-0 ft-medium m-catrio">
                        Education
                      </h4>
                      <span className="text-muted">144 Listings</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="cats-wrap text-center">
                  <a
                    href="half-map-search-2.html"
                    className="Goodup-catg-wrap"
                  >
                    <div className="Goodup-catg-city">24 Cities</div>
                    <div className="Goodup-catg-icon">
                      <i className="fas fa-house-damage" />
                    </div>
                    <div className="Goodup-catg-caption">
                      <h4 className="fs-md mb-0 ft-medium m-catrio">
                        Real Estate
                      </h4>
                      <span className="text-muted">210 Listings</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="cats-wrap text-center">
                  <a
                    href="half-map-search-2.html"
                    className="Goodup-catg-wrap"
                  >
                    <div className="Goodup-catg-city">18 Cities</div>
                    <div className="Goodup-catg-icon">
                      <i className="fas fa-wine-glass" />
                    </div>
                    <div className="Goodup-catg-caption">
                      <h4 className="fs-md mb-0 ft-medium m-catrio">
                        Event Palnning
                      </h4>
                      <span className="text-muted">241 Listings</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="cats-wrap text-center">
                  <a
                    href="half-map-search-2.html"
                    className="Goodup-catg-wrap"
                  >
                    <div className="Goodup-catg-city">06 Cities</div>
                    <div className="Goodup-catg-icon">
                      <i className="fas fa-car-alt" />
                    </div>
                    <div className="Goodup-catg-caption">
                      <h4 className="fs-md mb-0 ft-medium m-catrio">
                        Automotive
                      </h4>
                      <span className="text-muted">52 Listings</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="cats-wrap text-center">
                  <a
                    href="half-map-search-2.html"
                    className="Goodup-catg-wrap"
                  >
                    <div className="Goodup-catg-city">08 Cities</div>
                    <div className="Goodup-catg-icon">
                      <i className="fas fa-pencil-ruler" />
                    </div>
                    <div className="Goodup-catg-caption">
                      <h4 className="fs-md mb-0 ft-medium m-catrio">
                        Art &amp; Design
                      </h4>
                      <span className="text-muted">97 Listings</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="cats-wrap text-center">
                  <a
                    href="half-map-search-2.html"
                    className="Goodup-catg-wrap"
                  >
                    <div className="Goodup-catg-city">05 Cities</div>
                    <div className="Goodup-catg-icon">
                      <i className="fas fa-plane" />
                    </div>
                    <div className="Goodup-catg-caption">
                      <h4 className="fs-md mb-0 ft-medium m-catrio">
                        Hotel &amp; Travel
                      </h4>
                      <span className="text-muted">42 Listings</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* row */}
          </div>
        </section>
        {/* ======================= Listing Categories End ======================== */}
        {/* ======================= Explore By Location ======================== */}
        <section className="space">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="sec_title position-relative text-center mb-5">
                  <h6 className="theme-cl mb-0">Find By Location</h6>
                  <h2 className="ft-bold">
                    Explore By <span className="theme-cl">Top Locations</span>
                  </h2>
                </div>
              </div>
            </div>
            {/* row */}
            <div className="row justify-content-center">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="newlocationslider row">
                  <div className="single-list col-md-3">
                    <div className="Goodup-img-location-wrap">
                      <div className="Goodup-img-location-thumb">
                        <a href="half-map-search-2.html">
                          <img
                            src="images/l-1_1.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="Goodup-img-location-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">
                          Redondo Beach
                        </h4>
                        <a
                          href="half-map-search-2.html"
                          className="Goodup-cat-arrow"
                        >
                          <i className="lni lni-arrow-right-circle" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="single-list col-md-3">
                    <div className="Goodup-img-location-wrap">
                      <div className="Goodup-img-location-thumb">
                        <a href="half-map-search-2.html">
                          <img
                            src="images/l-2_1.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="Goodup-img-location-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">
                          San Francisco
                        </h4>
                        <a
                          href="half-map-search-2.html"
                          className="Goodup-cat-arrow"
                        >
                          <i className="lni lni-arrow-right-circle" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="single-list col-md-3">
                    <div className="Goodup-img-location-wrap">
                      <div className="Goodup-img-location-thumb">
                        <a href="half-map-search-2.html">
                          <img
                            src="images/l-3_1.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="Goodup-img-location-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">
                          Santa Barbara
                        </h4>
                        <a
                          href="half-map-search-2.html"
                          className="Goodup-cat-arrow"
                        >
                          <i className="lni lni-arrow-right-circle" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="single-list col-md-3">
                    <div className="Goodup-img-location-wrap">
                      <div className="Goodup-img-location-thumb">
                        <a href="half-map-search-2.html">
                          <img
                            src="images/l-4_1.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="Goodup-img-location-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">
                          Huntington Beach
                        </h4>
                        <a
                          href="half-map-search-2.html"
                          className="Goodup-cat-arrow"
                        >
                          <i className="lni lni-arrow-right-circle" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="single-list col-md-3">
                    <div className="Goodup-img-location-wrap">
                      <div className="Goodup-img-location-thumb">
                        <a href="half-map-search-2.html">
                          <img
                            src="images/l-5_1.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="Goodup-img-location-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">
                          Long Island City
                        </h4>
                        <a
                          href="half-map-search-2.html"
                          className="Goodup-cat-arrow"
                        >
                          <i className="lni lni-arrow-right-circle" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="single-list col-md-3">
                    <div className="Goodup-img-location-wrap">
                      <div className="Goodup-img-location-thumb">
                        <a href="half-map-search-2.html">
                          <img
                            src="images/l-6_1.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="Goodup-img-location-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">
                          West Los Angeles
                        </h4>
                        <a
                          href="half-map-search-2.html"
                          className="Goodup-cat-arrow"
                        >
                          <i className="lni lni-arrow-right-circle" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="single-list col-md-3">
                    <div className="Goodup-img-location-wrap">
                      <div className="Goodup-img-location-thumb">
                        <a href="half-map-search-2.html">
                          <img
                            src="images/l-7_1.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="Goodup-img-location-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">
                          San Antonio
                        </h4>
                        <a
                          href="half-map-search-2.html"
                          className="Goodup-cat-arrow"
                        >
                          <i className="lni lni-arrow-right-circle" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="single-list col-md-3">
                    <div className="Goodup-img-location-wrap">
                      <div className="Goodup-img-location-thumb">
                        <a href="half-map-search-2.html">
                          <img
                            src="images/l-8_1.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="Goodup-img-location-caption">
                        <h4 className="fs-md mb-0 ft-medium m-catrio">
                          Salt Lake City
                        </h4>
                        <a
                          href="half-map-search-2.html"
                          className="Goodup-cat-arrow"
                        >
                          <i className="lni lni-arrow-right-circle" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /row */}
          </div>
        </section>
        {/* ======================= Explore By Location ======================== */}
        {/* ============================ Tag & Submit listing ============================= */}
        <section className="bg-light-theme">
          <div className="container">
            <div className="row align-items-center justify-content-between g-4">
              <div className="col-xl-5 col-lg-6 col-md-12">
                <div className="capsTextwrap">
                  <h2 className="mb-3">
                    Why People Choose GoodUp For Promote Own Business
                  </h2>
                  <div className="featuresGroups">
                    <div className="singleFeatured">
                      <div className="ico">
                        <i className="fa-solid fa-circle-check" />
                      </div>
                      <div className="caps">
                        <h4>Easy to publish listing</h4>
                        <p>
                          In a professional context it often happens that
                          clients corder a publication to be made and
                          presented with the actual content still not being
                          ready.
                        </p>
                      </div>
                    </div>
                    <div className="singleFeatured">
                      <div className="ico">
                        <i className="fa-solid fa-piggy-bank" />
                      </div>
                      <div className="caps">
                        <h4>14 days money back guarantee</h4>
                        <p>
                          Think of a news blog that's filled with content
                          hourly on the day of going live. However, reviewers
                          be distracted
                        </p>
                      </div>
                    </div>
                    <div className="singleFeatured">
                      <div className="ico">
                        <i className="fa-solid fa-phone-volume" />
                      </div>
                      <div className="caps">
                        <h4>Video Call Support</h4>
                        <p>
                          Besides, random text risks to be unintendedly
                          humorous or offensive, an unacceptable risk in
                          corporate environments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-12">
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
                        <h4 className="mb-0 fs-md ft-medium">Mark Jevenue</h4>
                        <span className="fs-sm theme-cl">CEO of Addle</span>
                      </div>
                      <div className="sng_rev_caption text-center">
                        <div className="rev_desc mb-4">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua veniam esse cillum.
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
                        <h4 className="mb-0 fs-md ft-medium">Henna Bajaj</h4>
                        <span className="fs-sm theme-cl">Aqua Founder</span>
                      </div>
                      <div className="sng_rev_caption text-center">
                        <div className="rev_desc mb-4">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua veniam esse cillum.
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
                        <h4 className="mb-0 fs-md ft-medium">John Cenna</h4>
                        <span className="fs-sm theme-cl">CEO of Plike</span>
                      </div>
                      <div className="sng_rev_caption text-center">
                        <div className="rev_desc mb-4">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua velit esse cillum.
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
                            src="images/t-4.png"
                            className="img-fluid circle"
                            alt=""
                          />
                        </figure>
                      </div>
                      <div className="rev_author">
                        <h4 className="mb-0 fs-md ft-medium">Madhu Sharma</h4>
                        <span className="fs-sm theme-cl">Team Manager</span>
                      </div>
                      <div className="sng_rev_caption text-center">
                        <div className="rev_desc mb-4">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut laboree
                            voluptate velit esse cillum.
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
        <footer className="light-footer skin-light-footer style-2">
          <div className="footer-middle">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="footer_widget">
                    <img
                      src="images/logo.png"
                      className="img-footer small mb-2"
                      alt=""
                    />
                    <div className="address mt-2">
                      7742 Sadar Street Range Road, USA
                      <br />
                      United Kingdom GHQ11
                    </div>
                    <div className="address mt-3">
                      40 568 423 6597
                      <br />
                      support@Goodup.com
                    </div>
                    <div className="address mt-2">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href="#" className="theme-cl">
                            <i className="lni lni-facebook-filled" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="theme-cl">
                            <i className="lni lni-twitter-filled" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="theme-cl">
                            <i className="lni lni-youtube" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="theme-cl">
                            <i className="lni lni-instagram-filled" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="theme-cl">
                            <i className="lni lni-linkedin-original" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                  <div className="footer_widget">
                    <h4 className="widget_title">Main Navigation</h4>
                    <ul className="footer-menu">
                      <li>
                        <a href="#">Explore Listings</a>
                      </li>
                      <li>
                        <a href="#">Browse Authors</a>
                      </li>
                      <li>
                        <a href="#">Submit Listings</a>
                      </li>
                      <li>
                        <a href="#">Shortlisted</a>
                      </li>
                      <li>
                        <a href="#">Dashboard</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                  <div className="footer_widget">
                    <h4 className="widget_title">Business Owners</h4>
                    <ul className="footer-menu">
                      <li>
                        <a href="#">Browse Categories</a>
                      </li>
                      <li>
                        <a href="#">Payment Links</a>
                      </li>
                      <li>
                        <a href="#">Saved Places</a>
                      </li>
                      <li>
                        <a href="#">Dashboard</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                  <div className="footer_widget">
                    <h4 className="widget_title">About Company</h4>
                    <ul className="footer-menu">
                      <li>
                        <a href="#">Who We'r?</a>
                      </li>
                      <li>
                        <a href="#">Our Mission</a>
                      </li>
                      <li>
                        <a href="#">Our team</a>
                      </li>
                      <li>
                        <a href="#">Packages</a>
                      </li>
                      <li>
                        <a href="#">Dashboard</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                  <div className="footer_widget">
                    <h4 className="widget_title">Helpful Topics</h4>
                    <ul className="footer-menu">
                      <li>
                        <a href="#">Site Map</a>
                      </li>
                      <li>
                        <a href="#">Security</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                      <li>
                        <a href="#">FAQ's Page</a>
                      </li>
                      <li>
                        <a href="#">Privacy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
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

      {/* <Header />
      <SectionFirst />
      <HomeRecentActivity /> */}
  {/* <HomeBrandsSlider /> */ }
  {/* <HomeBlogs />
      <HomeAboutUs />
      <Footer /> */}
    </div >
  );
};

export default Home;
