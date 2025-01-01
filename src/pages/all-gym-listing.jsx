import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import "../assets/css/style.css";
import Footer from "../components/Footer";
import WhatsappBtnMain from "../components/WhatsappBtnMain";
import { Link } from "react-router-dom";
import SimpleHeader from "../components/SimpleHeader";
import { businessListingAxiosInstance } from "../js/api";
import Dummy_img from "../assets/dummy-image-square.jpg";
import User_img from "../assets/user-profile.png";

const AllGymListing = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const [businessData, setBusinessData] = useState([]);

  const fetchBusinessData = async () => {
    try {
      const requestData = {
        filter: {
          business_type: ["personal", "business"],
        },
        sort: {
          business_name: "desc",
          rating: "desc",
        },
        page: 1,
        limit: 6,
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

  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Explore All Gym Listings - Find Fitness Centers Near You</title>
        <meta
          name="description"
          content="Browse our comprehensive gym listings to find fitness centers, gyms, and wellness facilities near you. Connect with the perfect gym for your fitness goals!"
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
          <section className="container-fluid p-0 text-start d-none d-md-block section-margin">
            <img
              src="images/main-page-banner.webp"
              className="img"
              alt=""
              width="100%"
            />
          </section>
          <section className="container-fluid p-0 text-start d-block d-md-none section-margin">
            <img
              src="images/main-page-banner-mobile.webp"
              className="img"
              alt=""
              width="100%"
            />
          </section>
          <section class="space min">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div class="sec_title position-relative text-center mb-5">
                    <h6 class="theme-cl mb-0">Featured Listings</h6>
                    <h2 class="ft-bold">Goodup in Los Angeles</h2>
                  </div>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <ul
                    class="nav nav-tabs small-tab mb-3"
                    id="myTab"
                    role="tablist"
                  >
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="places-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#places"
                        type="button"
                        role="tab"
                        aria-controls="places"
                        aria-selected="true"
                      >
                        Afforradble
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="events-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#events"
                        type="button"
                        role="tab"
                        aria-controls="events"
                        aria-selected="false"
                        tabindex="-1"
                      >
                        Standards
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="car-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#car"
                        type="button"
                        role="tab"
                        aria-controls="car"
                        aria-selected="false"
                        tabindex="-1"
                      >
                        Premiums
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="row justify-content-center text-start">
                  {businessData.map((business) => {
                    const description = business?.description;
                    const truncatedDescription =
                      description?.length > 65
                        ? description?.substring(0, 65) + "..."
                        : description;

                    const facilityLimit = 3;
                    const validFacilities = business.services
                      .map((service) => {
                        switch (service) {
                          case "WiFi":
                            return (
                              <li key={service}>
                                <img
                                  src="/images/service/wi-fi.png"
                                  alt="WiFi"
                                  className="service-img"
                                />
                              </li>
                            );
                          case "Steam Bath":
                            return (
                              <li key={service}>
                                <img
                                  src="/images/service/steam-bath.png"
                                  alt="Steam Bath"
                                  className="service-img"
                                />
                              </li>
                            );
                          case "Air Conditioner":
                            return (
                              <li key={service}>
                                <img
                                  src="/images/service/air-conditioner.png"
                                  alt="Air Conditioner"
                                  className="service-img"
                                />
                              </li>
                            );
                          case "Parking":
                            return (
                              <li key={service}>
                                <img
                                  src="/images/service/parking.png"
                                  alt="Parking"
                                  className="service-img"
                                />
                              </li>
                            );
                          case "Locker":
                            return (
                              <li key={service}>
                                <img
                                  src="/images/service/locker.png"
                                  alt="Locker"
                                  className="service-img"
                                />
                              </li>
                            );
                          case "Changing room":
                            return (
                              <li key={service}>
                                <img
                                  src="/images/service/changing-room.png"
                                  alt="Changing Room"
                                  className="service-img"
                                />
                              </li>
                            );
                          case "Lounge area":
                            return (
                              <li key={service}>
                                <img
                                  src="/images/service/waiting-room.png"
                                  alt="Lounge Area"
                                  className="service-img"
                                />
                              </li>
                            );
                          case "Personal trainers":
                            return (
                              <li key={service}>
                                <img
                                  src="/images/service/personal-trainer.png"
                                  alt="Personal Trainers"
                                  className="service-img"
                                />
                              </li>
                            );
                          case "Massage":
                            return (
                              <li key={service}>
                                <img
                                  src="/images/service/massage.png"
                                  alt="Massage"
                                  className="service-img"
                                />
                              </li>
                            );
                          default:
                            return null;
                        }
                      })
                      .filter((item) => item !== null);

                    const displayedFacilities = validFacilities.slice(
                      0,
                      facilityLimit
                    );
                    const remainingCount =
                      validFacilities.length - facilityLimit;

                    return (
                      <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="Goodup-grid-wrap">
                          <div className="Goodup-grid-upper">
                            <div className="Goodup-pos ab-left">
                              <div className="Goodup-status open me-2">
                                Open
                              </div>
                              <div className="Goodup-status bg-danger">
                                Featured
                              </div>
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
                                  business.review_stats.average_rating.toFixed(
                                    1
                                  )) ||
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
                                          index <
                                          business.review_stats.average_rating
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
                                <Link
                                  to={`/listing-view?business_id=${business._id}`}
                                >
                                  <img
                                    src={`https://files.fggroup.in/${business.business_logo}`}
                                    className="img-fluid circle"
                                    onError={(e) => {
                                      e.target.src = User_img;
                                    }}
                                    alt={business.business_name}
                                  />
                                </Link>
                              </div>
                              <div className="Goodup-cates multi">
                                {business.business_category.map((category) => (
                                  <Link
                                    to={`/listing-view?business_id=${business._id}`}
                                    className="cats-1"
                                  >
                                    {category}
                                  </Link>
                                ))}
                              </div>
                              <h4 className="mb-0 medium text-bold">
                                <Link
                                  to={`/listing-view?business_id=${business._id}`}
                                  className="text-dark fs-md"
                                >
                                  {business.business_name &&
                                  business.business_name.length > 30
                                    ? business.business_name.substring(0, 30) +
                                      "..."
                                    : business.business_name}

                                  <span className="verified-badge">
                                    <i className="fas fa-check-circle" />
                                  </span>
                                </Link>
                              </h4>
                              <div className="Goodup-middle-caption">
                                <p className="fw-normal mb-1">
                                  {truncatedDescription}
                                </p>
                                <div className="Goodup-facilities-wrap mb-0">
                                  <div className="Goodup-facility-title">
                                    Facilities :
                                  </div>
                                  <div className="Goodup-facility-list">
                                    <ul className="no-list-style">
                                      {business.services.length === 0 ? (
                                        <li className="remaining-service">
                                          <span>No Facilities Found</span>
                                        </li>
                                      ) : (
                                        <>
                                          {displayedFacilities}

                                          {remainingCount > 0 && (
                                            <li className="remaining-service">
                                              <span>+{remainingCount}</span>
                                            </li>
                                          )}
                                        </>
                                      )}
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
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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

export default AllGymListing;
