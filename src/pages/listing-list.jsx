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

const ListingList = () => {
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
        const addressData = userData.user.address || {}; // Access the address object, use an empty object if undefined

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
  const [searchQuery, setSearchQuery] = useState("");

  const getBusinessData = async () => {
    try {
      const response = await businessListingAxiosInstance.get("/get-listing");
      const fetchedBusinessData = response.data.data;
      setBusinessData(fetchedBusinessData);
    } catch (error) {
      console.error("Error in Getting Business Data:", error);
    }
  };

  useEffect(() => {
    getBusinessData();
  }, []);

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

        if (response.status === 200) {
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

  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Comprehensive Listing Directory - Add Your Business Today</title>
        <meta name="description" content="Explore our detailed listing directory or add your own business. Connect with a larger audience and increase your visibility with our easy-to-use platform!" />
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
            className="bg-cover py-5 position-relative"
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
              Menu
            </a>
            <div id="MobNav" className="collapse text-start">
              <div className="goodup-dashboard-nav sticky-top">
                <div className="goodup-dashboard-inner">
                  <ul>
                    <li>
                      <Link to="/all-listing">
                        <i className="lni lni-files me-2" />
                        All Listings
                      </Link>
                    </li>
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
                    <li>
                      <Link to="/profile">
                        <i className="lni lni-user me-2" />
                        My Profile{" "}
                      </Link>
                    </li>
                    <li role="button" onClick={handleLogout}>
                      <a href="#">
                        <i className="lni lni-power-switch me-2" />
                        Log Out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="goodup-dashboard-content text-start">
              <div className="dashboard-tlbar d-block mb-md-5 mb-3">
                <div className="row">
                  <div className="colxl-12 col-lg-12 col-md-12">
                    <h1 className="ft-medium fs-1 listing-title">Manage Listings</h1>
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
                          <div className="row">
                            {businessData.map((business) => {
                              return (
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                  <div className="Goodup-grid-wrap">
                                    <div className="Goodup-grid-upper">
                                      <div className="Goodup-pos ab-left">
                                        {business.approval_status.status ==
                                        "APPROVED" ? (
                                          <div className="Goodup-status open me-2">
                                            APPROVED
                                          </div>
                                        ) : business.approval_status.status ==
                                          "REJECTED" ? (
                                          <div className="Goodup-status bg-danger">
                                            REJECTED
                                          </div>
                                        ) : business.approval_status.status ==
                                          "PENDING" ? (
                                          <div className="Goodup-status pending">
                                            PENDING
                                          </div>
                                        ) : (
                                          ""
                                        )}
                                      </div>
                                      <div className="Goodup-grid-thumb">
                                        <Link
                                          to={`/update-listing?business_id=${business._id}`}
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
                                    </div>
                                    <div className="Goodup-grid-fl-wrap">
                                      <div className="Goodup-caption px-3 py-2">
                                        <div className="Goodup-author bg-light">
                                          <Link
                                            to={`/update-listing?business_id=${business._id}`}
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
                                        <h4 className="mb-0 ft-medium medium">
                                          <Link
                                            to={`/update-listing?business_id=${business._id}`}
                                            className="text-dark fs-md"
                                          >
                                            {business.business_name}
                                            <span className="verified-badge">
                                              <i className="fas fa-check-circle" />
                                            </span>
                                          </Link>
                                        </h4>
                                        <div className="Goodup-middle-caption mt-2">
                                          Category :{" "}
                                          {business.business_category.map(
                                            (category) => (
                                              <span className="text-dark">
                                                {category}
                                              </span>
                                            )
                                          )}
                                          <div className="mb-0">
                                            Type:{" "}
                                            <span className="text-dark">
                                              {business.business_type}
                                            </span>
                                          </div>
                                          <div>
                                            Create Date:{" "}
                                            <span className="text-dark">
                                              {new Date(
                                                business.createdAt
                                              ).toLocaleDateString()}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="Goodup-grid-footer py-2 px-3">
                                        <Link
                                          to={`/update-listing?business_id=${business._id}`}
                                          className="list-listing view"
                                        >
                                          <i className="fas fa-eye me-2" />
                                          View
                                        </Link>
                                        <button
                                          className="list-listing bg-danger"
                                          onClick={() =>
                                            handleDeleteListing(business._id)
                                          }
                                        >
                                          <i className="fas fa-trash me-2" />
                                          Delete
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                            {businessData.length === 0 && (
                              <div className="col-12 d-flex flex-column align-items-center">
                                <img
                                  src="/images/listing-not-found.webp"
                                  alt=""
                                  className="list-img"
                                />
                                <h4>No Listing Data Found</h4>
                                <Link to="/add-listing" class="add-list-btn mt-2">
                                  <i class="fas fa-plus me-2"></i>Add Listing
                                </Link>
                              </div>
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

export default ListingList;
