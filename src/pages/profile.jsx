import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import "../assets/css/style.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

import axiosInstance from "../js/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IconButton from "@mui/material/IconButton";
import User_img from "../assets/user-profile.png";

const Profile = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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
      toast.error("Error in getUserData");
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];

    // Create a FormData object to send the file
    const formDataForUpload = new FormData();
    formDataForUpload.append("files", file);

    try {
      // Make the API request to upload the file
      const response = await axiosInstance.post(
        "/file-upload",
        formDataForUpload
      );
      const photoUrl = response.data.data.fileURLs[0];

      setFormData((prevData) => ({
        ...prevData,
        profilePhoto: "https://files.fggroup.in/" + photoUrl,
        profile_image: photoUrl,
      }));

      await axiosInstance.post("/account/update-profile", {
        profile_image: photoUrl,
      });

      // Show success toast
      toast.success("Profile photo uploaded successfully");
    } catch (error) {
      console.error("Error uploading photo:", error);
      // Show error toast
      toast.error("Error uploading profile photo");
    }
  };

  const handleRemovePhoto = async () => {
    // Update the state to remove the photo
    setFormData((prevData) => ({
      ...prevData,
      profilePhoto: null,
      profile_image: null,
    }));

    try {
      await axiosInstance.post("/account/update-profile", {
        profile_image: null,
      });
      toast.success("Profile photo removed successfully");
    } catch (error) {
      console.error("Error removing photo:", error);
      toast.error("Error removing profile photo");
    }
  };

  const updateData = async () => {
    try {
      const response = await axiosInstance.post(
        "/account/update-profile",
        formData
      );
      if (response.data.data) {
        getUserData();
        // Show success toast
        toast.success("User data updated successfully");
      } else {
        console.error("Failed to update user data");
        // Show error toast
        toast.error("Error updating user data");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
      // Show error toast
      toast.error("Error updating user data");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add any validation or additional logic before updating data
    await updateData();
  };

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Link underline="hover" key="2" color="inherit">
      User Option
    </Link>,
    <Typography key="3" color="text.primary">
      Profile
    </Typography>,
  ];

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
          <div className="clearfix" />
          <section
            className="bg-cover position-relative"
            style={{ background: "red url(images/cover.jpg) no-repeat" }}
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
                  <ul>
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
                    {/* </ul> */}
                    {/* <ul data-submenu-title="My Accounts"> */}
                    <li className="active">
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
              <div className="dashboard-tlbar d-block mb-5">
                <div className="row">
                  <div className="colxl-12 col-lg-12 col-md-12">
                    <h1 className="ft-medium">Profile Info</h1>
                  </div>
                </div>
              </div>
              <div className="dashboard-widg-bar d-block">
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 order-xl-last order-lg-last order-md-last">
                    <div
                      className="d-md-flex"
                      style={{ alignItems: "center", marginBottom: "20px" }}
                    >
                      {/* <Avatar
                        alt="User Photo"
                        src={formData.profilePhoto}
                        sx={{ width: 100, height: 100, marginRight: "20px" }}
                      /> */}
                      <div>
                        <div className="d-flex rounded px-3 py-3 mb-3">
                          <div className="dash-figure">
                            <div className="dash-figure-thumb">
                              <img
                                src={formData.profilePhoto}
                                className="img-fluid rounded"
                                alt=""
                                onError={(e) => {
                                  e.target.src = User_img;
                                }}
                              />
                            </div>
                            <input
                              accept="image/*"
                              style={{ display: "none" }}
                              id="profile-photo-upload"
                              type="file"
                              onChange={handlePhotoChange}
                            />
                            <label
                              className="upload-photo-btn"
                              htmlFor="profile-photo-upload"
                            >
                              <div className="Uploadphoto">
                                <span>
                                  <i className="fas fa-upload" /> Upload Photo
                                </span>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-8 col-sm-12">
                    <form className="submit-form">
                      <div className="dashboard-list-wraps bg-white rounded mb-4">
                        <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                          <div className="dashboard-list-wraps-flx">
                            <h4 className="mb-0 ft-medium fs-md">
                              <i className="fa fa-user-check me-2 theme-cl fs-sm" />
                              My Profile
                            </h4>
                          </div>
                        </div>
                        <div className="dashboard-list-wraps-body py-3 px-3">
                          <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                              <div className="form-group">
                                <label className="mb-1">First Name</label>
                                <input
                                  type="text"
                                  className="form-control rounded"
                                  placeholder="Enter First Name"
                                  name="first_name"
                                  value={formData.first_name}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                              <div className="form-group">
                                <label className="mb-1">Last Name</label>
                                <input
                                  type="text"
                                  className="form-control rounded"
                                  placeholder="Enter Last Name"
                                  name="last_name"
                                  value={formData.last_name}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                              <div className="form-group">
                                <label className="mb-1">Email ID</label>
                                <input
                                  type="text"
                                  className="form-control rounded"
                                  placeholder="Enter Email ID"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                              <div className="form-group">
                                <label className="mb-1">Mobile</label>
                                <input
                                  type="text"
                                  className="form-control rounded"
                                  placeholder="Enter Mobile"
                                  name="mobile"
                                  value={formData.mobile}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                              <div className="form-group">
                                <label className="mb-1">
                                  Block No/Building No
                                </label>
                                <input
                                  type="text"
                                  className="form-control rounded"
                                  placeholder="Enter Block No/Building No"
                                  name="address_line_1"
                                  value={formData.address_line_1}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                              <div className="form-group">
                                <label className="mb-1">
                                  Street/Colony Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control rounded"
                                  placeholder="Enter Street/Colony Name"
                                  name="address_line_2"
                                  value={formData.address_line_2}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                              <div className="form-group">
                                <label className="mb-1">City</label>
                                <input
                                  type="text"
                                  className="form-control rounded"
                                  placeholder="Enter City"
                                  name="city"
                                  value={formData.city}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                              <div className="form-group">
                                <label className="mb-1">State</label>
                                <input
                                  type="text"
                                  className="form-control rounded"
                                  placeholder="Enter State"
                                  name="state"
                                  value={formData.state}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                              <div className="form-group">
                                <label className="mb-1">Pin Code</label>
                                <input
                                  type="text"
                                  className="form-control rounded"
                                  placeholder="Enter Pin Code"
                                  name="pin_code"
                                  value={formData.pin_code}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-4">
                              <div
                                className="upload-photo-btn"
                                onClick={handleSubmit}
                              >
                                <div className="Uploadphoto">
                                  <span>
                                    <i className="fas fa-pencil me-1" /> Update
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
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
      </>
      <ToastContainer />
    </div>
  );
};

export default Profile;
