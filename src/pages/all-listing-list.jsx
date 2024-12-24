import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import "../assets/css/style.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import axiosInstance, { businessListingAxiosInstance } from "../js/api";
import Dummy_img from "../assets/dummy-image-square.jpg";
import User_img from "../assets/user-profile.png";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Select from "react-select";

const AllListingList = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleLogout = async () => {
    try {
      localStorage.removeItem("authorization");
      localStorage.removeItem("user_info");
      toast.success("Logout Successful!");
      window.location.href = "/login";
    } catch (error) {
      console.error("Error in handleAgreeAndConfirm:", error);
      toast.error("Logout Failed. Please try again.");
    }
  };

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    mobile: "",
    email: "",
    address_line_1: " ",
    address_line_2: " ",
    city: "",
    state: "",
    pin_code: "",
    profilePhoto: null,
    profile_image: null,
  });

  const getUserData = async () => {
    try {
      const response = await axiosInstance.get("/account/profile");
      const userData = response.data.data;
      if (userData) {
        const addressData = userData.user.address || {};

        setFormData((prevData) => ({
          ...prevData,
          first_name: userData.user.first_name || "",
          last_name: userData.user.last_name || "",
          mobile: userData.user.mobile || "",
          email: userData.user.email || "",
          address_line_1: addressData.address_line_1 || "Enter Address",
          address_line_2: addressData.address_line_2 || "",
          city: addressData.city || "",
          state: addressData.state || "",
          country: addressData.country || "",
          pin_code: addressData.pin_code || "",
          profilePhoto:
            "https://files.fggroup.in/" + (userData.user.profile_image || ""),
        }));
      }
    } catch (error) {
      console.error("Error in getUserData:", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const [businessData, setBusinessData] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedServices, setSelectedServices] = useState("");
  const [tags, setTags] = useState("");
  const [cityData, setCityData] = useState("");
  const [rating, setRating] = useState("");
  const [selectedFacilities, setSelectedFacilities] = useState("");
  const [debouncedCity, setDebouncedCity] = useState("");

  const [isLogin, setIsLogin] = useState(false);

  const handleSelectChange = (selectedOptions) => {
    const data = selectedOptions.map((service) => service.value);
    console.log("data :- ", data);

    setSelectedServices(data);
    setSelectedFacilities(selectedOptions);
  };

  const getBusinessData = async () => {
    setLoadingData(true);
    try {
      const requestData = {
        filter: {
          business_type: ["personal", "business"],
          tags: tags,
          rating: rating,
        },
        sort: {
          business_name: "desc",
          rating: "desc",
        },
        page: 1,
        limit: 20,
      };

      const response = await businessListingAxiosInstance.post(
        "/get-businesses",
        requestData
      );
      let fetchedBusinessData = response.data.data;

      if (selectedCategory) {
        fetchedBusinessData = fetchedBusinessData.filter(
          (category) => category.business_category[0] === selectedCategory
        );
      }

      if (cityData) {
        fetchedBusinessData = fetchedBusinessData.filter(
          (addressData) => addressData.locations[0].city === cityData
        );
      }

      if (selectedServices) {
        fetchedBusinessData = fetchedBusinessData.filter((category) => {
          const serviceData = category.services.filter((service) =>
            service.includes(selectedServices)
          );
          return serviceData.length > 0;
        });
      }

      console.log("fetchedBusinessData :- ", fetchedBusinessData);

      setBusinessData(fetchedBusinessData);
    } catch (error) {
      console.error("Error in Getting Business Data:", error);
    }
    setLoadingData(false);
  };

  useEffect(() => {
    getBusinessData();
  }, [selectedCategory, selectedServices, debouncedCity]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedCity(cityData);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [cityData]);

  const handleSearch = () => {
    getBusinessData();

    const filteredData = businessData.filter(
      (business) =>
        business.business_name
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        business.business_category.some((category) =>
          category.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    setBusinessData(filteredData);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const getStatusBadge = (status) => {
    let badgeColor, badgeText;

    if (status === "APPROVED") {
      badgeColor = "#00d300";
      badgeText = status;
    } else if (status === "REJECTED") {
      badgeColor = "#ff4343";
      badgeText = status;
    } else {
      badgeColor = "orange";
      badgeText = status;
    }

    return (
      <>
        <div
          style={{
            backgroundColor: badgeColor,
            color: "#000",
            padding: "5px 10px",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          {status}
        </div>
      </>
    );
  };

  const handleDeleteListing = async (businessId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You will not be able to recover this business!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const response = await businessListingAxiosInstance.delete(
          `/delete-listing?listing_id=${businessId}`
        );

        if (response?.status === 200) {
          Swal.fire("Deleted!", "Your business has been deleted.", "success");
          getBusinessData();
        } else {
          Swal.fire("Error!", "Failed to delete the business.", "error");
        }
      }
    } catch (error) {
      console.error("Error deleting business listing:", error);
      Swal.fire(
        "Error!",
        "An error occurred while deleting the business listing.",
        "error"
      );
    }
  };

  const facilities = [
    { value: "WiFi", label: "WiFi" },
    { value: "Steam Bath", label: "Steam Bath" },
    { value: "Air Conditioner", label: "Air Conditioner" },
    { value: "Parking", label: "Parking" },
    { value: "Locker", label: "Locker" },
    { value: "Changing room", label: "Changing room" },
    { value: "Lounge area", label: "Lounge area" },
    { value: "Personal trainers", label: "Personal trainers" },
    { value: "Massage", label: "Massage" },
  ];

  useEffect(() => {
    const LoginToken = localStorage.getItem("authorization");
    if (LoginToken) {
      setIsLogin(true);
    }
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Goodup - Business Directory &amp; Listing HTML Template</title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="images/favicon.ico"
        />
        <link href="css/styles.css" rel="stylesheet" />
      </Helmet>
      <>
        {loading && <div className="preloader" />}
        <div id="main-wrapper">
          <Header />
          <div className="clearfix" />
          <section
            className="bg-cover position-relative"
            style={{
              background: "red url(images/cover.jpg) no-repeat",
              marginTop: "70px",
            }}
            data-overlay={3}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="dashboard-head-author-clicl">
                    <div className="dashboard-head-author-thumb">
                      <img
                        src={`${formData.profilePhoto}`}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="dashboard-head-author-caption">
                      <div className="dashploio">
                        <h4>
                          {formData.first_name + " " + formData.last_name}
                        </h4>
                      </div>
                      <div className="dashploio">
                        <span className="agd-location">
                          <i className="lni lni-map-marker me-1" />
                          {formData?.city +
                            ", " +
                            formData?.state +
                            ", " +
                            formData.country}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
                  <ul>
                    <li className="active">
                      <Link to="/all-listing">
                        <i className="lni lni-files me-2" />
                        All Listings
                      </Link>
                    </li>
                    {isLogin ? (
                      <>
                        <li>
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
                      </>
                    ) : (
                      ""
                    )}

                    <li>
                      <Link to="/profile">
                        <i className="lni lni-user me-2" />
                        My Profile{" "}
                      </Link>
                    </li>
                    {isLogin ? (
                      <li role="button" onClick={handleLogout}>
                        <Link to="#">
                          <i className="lni lni-power-switch me-2" />
                          Log Out
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <Link to="/login">
                          <i className="lni lni-power-switch me-2" />
                          Log In
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="goodup-dashboard-content text-start">
              <div className="dashboard-tlbar d-block mb-5">
                <div className="row">
                  <div className="colxl-12 col-lg-12 col-md-12">
                    <h1 className="ft-medium">Listings List</h1>
                  </div>
                </div>
              </div>
              <div className="dashboard-widg-bar d-block">
                <div className="row">
                  <div className="col-xl-12 col-lg-12">
                    <div className="dashboard-list-wraps bg-white rounded mb-4">
                      <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="mb-1">Categories</label>
                              <select
                                className="form-control"
                                value={selectedCategory}
                                onChange={(e) =>
                                  setSelectedCategory(e.target.value)
                                }
                              >
                                <option>Select Category</option>
                                <option selected value="Personal Trainer">
                                  Personal Trainer
                                </option>
                                <option value="General Trainer">
                                  General Trainer
                                </option>
                                <option value="Gym">Gym</option>
                                <option value="Dietitian">Dietitian</option>
                                <option value="Nutritionist">
                                  Nutritionist
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="mb-1">City</label>
                              <input
                                type="text"
                                className="form-control rounded"
                                placeholder="Enter City"
                                value={cityData}
                                onChange={(e) => setCityData(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="dashboard-list-wraps-body py-3 px-3">
                        <div className="dashboard-listing-wraps">
                          <div className="row">
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
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
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
                                          {(business.review_stats
                                            .average_rating &&
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
                                                      business.review_stats
                                                        .average_rating
                                                      ? "#F09000"
                                                      : "#ccc",
                                                }}
                                              />
                                            ))}
                                          </div>
                                          <div className="Goodup-all-review">
                                            <span>
                                              {
                                                business.review_stats
                                                  .total_ratings
                                              }{" "}
                                              Rating
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
                                          {business.business_category.map(
                                            (category) => (
                                              <Link
                                                to={`/listing-view?business_id=${business._id}`}
                                                className="cats-1"
                                              >
                                                {category}
                                              </Link>
                                            )
                                          )}
                                        </div>
                                        <h4 className="mb-0 ft-medium medium">
                                          <Link
                                            to={`/listing-view?business_id=${business._id}`}
                                            className="text-dark fs-md"
                                          >
                                            {business.business_name &&
                                              business.business_name.length > 30
                                              ? business.business_name.substring(
                                                0,
                                                30
                                              ) + "..."
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
                                                {displayedFacilities}
                                                {remainingCount > 0 && (
                                                  <li className="remaining-service">
                                                    <span>
                                                      +{remainingCount}
                                                    </span>
                                                  </li>
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
                            {loadingData && <h6>Loading...</h6>}
                            {businessData?.length === 0 && !loadingData && (
                              <h5>No data Found</h5>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
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

export default AllListingList;
