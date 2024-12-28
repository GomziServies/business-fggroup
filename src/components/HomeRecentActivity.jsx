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
          business_name: "desc",
          rating: "desc",
        },
        page: 1,
        limit: 8,
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
              const remainingCount = validFacilities.length - facilityLimit;

              return (
                <div className="col-xl-4 col-md-6 col-sm-12">
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-pos ab-left">
                        <div className="Goodup-status open me-2">Open</div>
                        <div className="Goodup-status bg-danger">Featured</div>
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
                              ? business.business_name.substring(0, 30) + "..."
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
            <div className="col-12 d-flex justify-content-center mt-3">
              <Link to="/all-listing" class="view-list-btn me-2">
                <i class="fas fa-eye me-2"></i>View More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeRecentActivity;
