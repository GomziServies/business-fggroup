import React, { useState, useEffect } from "react";
import { businessListingAxiosInstance } from "../js/api";
import Dummy_img from "../assets/dummy-image-square.jpg";
import User_img from "../assets/user-profile.png";
import "../index.css";
import { Link } from "react-router-dom";


const HomeRecentActivity = () => {
  const [businessData, setBusinessData] = useState([]);

  const fetchBusinessData = async () => {
    try {
      const requestData = {
        filter: {
          business_type: ["personal", "business"],
        },
        sort: {
          business_name: "asc",
          rating: "desc",
        },
        page: 1,
        limit: 10,
      };

      const response = await businessListingAxiosInstance.post(
        "/get-businesses",
        requestData
      );
      const fetchedBusinessData = response.data.data;
      setBusinessData(fetchedBusinessData);
    } catch (error) {
      console.error("Error in Getting Business Data:", error);
    }
  };

  useEffect(() => {
    fetchBusinessData();
  }, []);

  const handleCall = (number) => {
    window.location.href = `tel:${number}`;
  };

  const handleChat = (number) => {
    const whatsappNumber = number;
    if (whatsappNumber) {
      const message = encodeURIComponent("I want to know about your services.");
      window.location.href = `https://wa.me/${whatsappNumber}?text=${message}`;
    }
  };

  const handleBusinessClick = (id) => {
    window.location.href = `/list/company-view?business_id=${id}`;
  };

  return (
    <>

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
          <div className="row justify-content-center text-start">
            {businessData.map((business) => {
              return (
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
                        <Link
                          to={`/listing-view?business_id=${business._id}`}
                          className="d-block text-center m-auto"
                        >
                          <img
                            src={`https://files.fggroup.in/${business.business_images[0]}`}
                            className="img-fluid"
                            onError={(e) => {
                              e.target.src = Dummy_img;
                            }}
                            alt={business.business_name}
                          />
                        </Link>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-pr-average high">
                          {(business.review_stats.average_rating &&
                            business.review_stats.average_rating.toFixed(1)) ||
                            "0"}
                        </div>
                        <div className="Goodup-aldeio">
                          <div className="Goodup-rates">
                            {[...Array(5)].map((_, index) => (
                              <i
                                className="fas fa-star"
                                key={index}
                                style={{
                                  color:
                                    index < business.review_stats.average_rating
                                      ? "#F09000"
                                      : "#ccc",
                                }}
                              />
                            ))}
                          </div>
                          <div className="Goodup-all-review">
                            <span>
                              {business.review_stats.total_ratings} Rating
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-author">
                          <a href="author-detail.html">
                            <img
                              src={`https://files.fggroup.in/${business.business_logo}`}
                              className="img-fluid circle"
                              onError={(e) => {
                                e.target.src = User_img;
                              }}
                              alt={business.business_name}
                            />
                          </a>
                        </div>
                        <div className="Goodup-cates multi">
                          {business.business_category.map((category) => (
                            <a href="half-map-search-1.html" className="cats-1">
                              {category}
                            </a>
                          ))}
                          <a href="half-map-search-1.html">+2</a>
                        </div>
                        <h4 className="mb-0 ft-medium medium">
                          <a
                            href="single-listing-detail-3.html"
                            className="text-dark fs-md"
                          >
                            {business.business_name}
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
                            <i className="fas fa-map-marker-alt me-2 theme-cl" />
                            {business.locations[0].city +
                              ", " +
                              business.locations[0].state}
                          </div>
                        </div>
                        <div className="Goodup-ft-last">
                          <div className="Goodup-inline">
                            <div className="Goodup-bookmark-btn">
                              <button type="button">
                                <i className="lni lni-phone position-absolute" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
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
                      <img src="images/l-2.jpg" className="img-fluid" alt="" />
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
                      <img src="images/l-3.jpg" className="img-fluid" alt="" />
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
                      <img src="images/l-4.jpg" className="img-fluid" alt="" />
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
                      <img src="images/l-5.jpg" className="img-fluid" alt="" />
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
                      <img src="images/l-6.jpg" className="img-fluid" alt="" />
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
                      <img src="images/l-7.jpg" className="img-fluid" alt="" />
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
                      <img src="images/l-8.jpg" className="img-fluid" alt="" />
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
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeRecentActivity;
