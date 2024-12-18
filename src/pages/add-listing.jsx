import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import "../assets/css/style.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";

import axiosInstance, { businessListingAxiosInstance } from "../js/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const AddListing = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const [formData, setFormData] = useState({
    businessName: "",
    blockNumber: "",
    streetName: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
    pin_code: "",
    contactNumber: "",
    whatsappNumber: "",
    services: [],
    tags: [],
    website: "",
    email: "",
    branch: "",
  });
  const [businessHours, setBusinessHours] = useState([
    { day: "Mon", open: "10:00 AM", close: "7:00 PM" },
  ]);
  const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);
  const [logoImage, setLogoImage] = useState(null);
  const [businessPhotos, setBusinessPhotos] = useState([]);
  const [socialMediaLinks, setSocialMediaLinks] = useState([
    { platform: "Instagram", link: "" },
    { platform: "Facebook", link: "" },
    { platform: "YouTube", link: "" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBusinessType, setSelectedBusinessType] = useState("");
  const [isDetailsCorrect, setIsDetailsCorrect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [logoPreview, setLogoPreview] = useState(null);
  const [featurePreview, setFeaturePreview] = useState(null);

  const handleDayChange = (index, selectedDay) => {
    const updatedBusinessHours = [...businessHours];
    updatedBusinessHours[index].day = selectedDay;
    setBusinessHours(updatedBusinessHours);
  };

  const handleTimeChange = (index, field, value) => {
    const updatedBusinessHours = [...businessHours];
    updatedBusinessHours[index][field] = value;
    setBusinessHours(updatedBusinessHours);
  };

  const handleAddTimeSlot = () => {
    setBusinessHours([
      ...businessHours,
      { day: "Mon", open: "10:00 AM", close: "06:00 PM" },
    ]);
  };

  const handleRemoveTimeSlot = (index) => {
    const updatedBusinessHours = [...businessHours];
    updatedBusinessHours.splice(index, 1);
    setBusinessHours(updatedBusinessHours);
  };

  const handleAddFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const handleRemoveFaq = (index) => {
    const updatedFaqs = [...faqs];
    updatedFaqs.splice(index, 1);
    setFaqs(updatedFaqs);
  };

  const handleFaqChange = (index, field, value) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index][field] = value;
    setFaqs(updatedFaqs);
  };

  const handleInputChange = (field, value) => {
    if (field === "services" || field === "tags") {
      setFormData((prevState) => ({
        ...prevState,
        [field]: value,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [field]: value,
      }));
    }
  };

  // Function to handle business photos change
  const handleBusinessPhotosChange = (event) => {
    const files = event.target.files;

    if (files.length > 0) {
      // Read and set the business photos
      const newPhotos = [...businessPhotos];
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newPhotos.push({ file, preview: reader.result });
          setBusinessPhotos([...newPhotos]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  // Function to handle removing a business photo
  const handleRemoveBusinessPhoto = (index) => {
    const newPhotos = [...businessPhotos];
    newPhotos.splice(index, 1);
    setBusinessPhotos([...newPhotos]);
  };

  // Function to handle logo file change
  const handleLogoChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Read the file and set the logo image
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoImage(file);
        setFormData((prevData) => ({
          ...prevData,
          business_logo: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle social media link change
  const handleSocialMediaLinkChange = (index, value) => {
    const newLinks = [...socialMediaLinks];
    newLinks[index].link = value;
    setSocialMediaLinks([...newLinks]);
  };

  // Function to handle removing a social media link
  const handleRemoveSocialMediaLink = (index) => {
    const newLinks = [...socialMediaLinks];
    newLinks.splice(index, 1);
    setSocialMediaLinks([...newLinks]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      // Upload logo image
      const logoFormData = new FormData();
      logoFormData.append("files", logoImage);
      const logoResponse = await axiosInstance.post(
        "/file-upload",
        logoFormData
      );
      const logoUrl = logoResponse.data.data.fileURLs[0];
      // Upload business photos
      const photoUrls = await Promise.all(
        businessPhotos.map(async (photo) => {
          const photoFormData = new FormData();
          photoFormData.append("files", photo.file);
          const photoResponse = await axiosInstance.post(
            "/file-upload",
            photoFormData
          );
          return photoResponse.data.data.fileURLs;
        })
      );

      // Map the form data to the structure expected by the Postman request
      const postData = {
        business_type: selectedBusinessType,
        business_name: formData.businessName,
        business_category: [selectedCategory],
        business_logo: `${logoUrl}`,
        business_images: photoUrls.flat(),
        services: formData.services,
        tags: formData.tags,
        social_media: socialMediaLinks.map((link) => ({
          social_media_type: link.platform.toLowerCase(),
          link: link.link,
        })),
        locations: [
          {
            location_name: formData.branch,
            address_line_1: formData.address_line_1,
            address_line_2: formData.address_line_2,
            city: formData.city,
            state: formData.state,
            country: "india",
            pin_code: formData.pin_code,
            landmark: formData.landmark,
            direction_link: formData.direction_link,
            contact: {
              contact_type: "mobile",
              value: formData.contactNumber,
            },
          },
        ],
        contacts: [
          {
            contact_type: "email",
            value: formData.email,
          },
          {
            contact_type: "website",
            value: formData.website,
          },
        ],
        faqs: faqs.map((faq) => ({
          question: faq.question,
          answer: faq.answer,
        })),
        timings: businessHours.map((timeSlot) => ({
          title: timeSlot.day,
          timings: [
            {
              from_time: timeSlot.open,
              to_time: timeSlot.close,
            },
          ],
        })),
      };

      // console.log('Transformed Form Data:', postData);

      await businessListingAxiosInstance.post("/create-listing", postData);
      setIsLoading(false);
      // Show success toast
      toast.success("Listing created successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error("Error uploading files:", error);
      setIsLoading(false);
      // Show error toast
      toast.error("Error creating listing. Please try again.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleSelectLogo = () => {
    const fileInput = document.getElementById("logoInput");
    fileInput.click();
  };
  const handleSelectFeature = () => {
    const fileInput = document.getElementById("featureInput");
    fileInput.click();
  };

  const handlebusinessLogoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Ensure the file size is within the limit (2 MB)
      if (file.size > 2 * 1024 * 1024) {
        alert("File size exceeds 2 MB!");
        return;
      }
      // Generate a preview URL for the selected file
      const previewUrl = URL.createObjectURL(file);
      setLogoPreview(previewUrl);
    }
  };

  const handlebusinessFeatureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Ensure the file size is within the limit (2 MB)
      if (file.size > 2 * 1024 * 1024) {
        alert("File size exceeds 2 MB!");
        return;
      }
      // Generate a preview URL for the selected file
      const previewUrl = URL.createObjectURL(file);
      setFeaturePreview(previewUrl);
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

          {/* =============================== Section Start ========================== */}

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
                    <li>
                      <Link to="/listing-list">
                        <i className="lni lni-files me-2" />
                        My Listings
                      </Link>
                    </li>
                    <li className="active">
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
                    <h1 className="ft-medium">Add Listing</h1>
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
                            Add Listing
                          </a>
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="dashboard-widg-bar d-block">
                <div className="row">
                  <div className="col-xl-12 col-lg-2 col-md-12 col-sm-12">
                    <div className="submit-form">
                      {/* Listing Info */}
                      <div className="dashboard-list-wraps bg-white rounded mb-4">
                        <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                          <div className="dashboard-list-wraps-flx">
                            <h4 className="mb-0 ft-medium fs-md">
                              <i className="fa fa-file me-2 theme-cl fs-sm" />
                              Listing Info
                            </h4>
                          </div>
                        </div>
                        <div className="dashboard-list-wraps-body py-3 px-3">
                          <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                              <div className="form-group">
                                <label className="mb-1">Listing Title</label>
                                <input
                                  type="text"
                                  className="form-control rounded"
                                  placeholder="Enter Listing Title"
                                  value={formData.businessName}
                                  onChange={(e) =>
                                    handleInputChange(
                                      "businessName",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
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
                                  <option value="Personal Trainer">
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
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                              <div className="form-group">
                                <label className="mb-1">Business Type</label>
                                <select
                                  className="form-control"
                                  value={selectedBusinessType}
                                  onChange={(e) =>
                                    setSelectedBusinessType(e.target.value)
                                  }
                                >
                                  <option>Select Business Type</option>
                                  <option value="Personal">Personal</option>
                                  <option value="Business">Business</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                              <div className="form-group">
                                <label className="mb-1">About Listing</label>
                                <textarea
                                  className="form-control rounded ht-150"
                                  placeholder="Describe..."
                                  defaultValue={""}
                                  value={formData.description}
                                  onChange={(e) =>
                                    handleInputChange(
                                      "description",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Location Info */}
                      <div className="dashboard-list-wraps bg-white rounded mb-4">
                        <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                          <div className="dashboard-list-wraps-flx">
                            <h4 className="mb-0 ft-medium fs-md">
                              <i className="fas fa-map-marker-alt me-2 theme-cl fs-sm" />
                              Location Info
                            </h4>
                          </div>
                        </div>
                        <div className="dashboard-list-wraps-body py-3 px-3">
                          <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                              <div className="form-group">
                                <label className="mb-1">
                                  Block Number / Building Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control rounded"
                                  placeholder="Enter Block Number / Building Name"
                                  value={formData.address_line_1}
                                  onChange={(e) =>
                                    handleInputChange(
                                      "address_line_1",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                              <div className="form-group">
                                <label className="mb-1">
                                  Street / Colony Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control rounded"
                                  placeholder="Enter Street / Colony Name"
                                  value={formData.address_line_2}
                                  onChange={(e) =>
                                    handleInputChange(
                                      "address_line_2",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                              <div className="form-group">
                                <label className="mb-1">State</label>
                                <input
                                  type="text"
                                  className="form-control rounded"
                                  placeholder="Enter state"
                                  value={formData.state}
                                  onChange={(e) =>
                                    handleInputChange("state", e.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                              <div className="form-group">
                                <label className="mb-1">City</label>
                                <input
                                  type="text"
                                  className="form-control rounded"
                                  placeholder="Enter city"
                                  value={formData.city}
                                  onChange={(e) =>
                                    handleInputChange("city", e.target.value)
                                  }
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
                                  value={formData.pin_code}
                                  onChange={(e) =>
                                    handleInputChange(
                                      "pin_code",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                              <div className="form-group">
                                <label className="mb-1">Contact No.</label>
                                <input
                                  type="text"
                                  className="form-control rounded"
                                  placeholder="Enter Contact No."
                                  value={formData.contactNumber}
                                  onChange={(e) =>
                                    handleInputChange(
                                      "contactNumber",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                              <div className="form-group">
                                <label className="mb-1">WhatsApp No.</label>
                                <input
                                  type="text"
                                  className="form-control rounded"
                                  placeholder="Enter WhatsApp No."
                                  value={formData.whatsappNumber}
                                  onChange={(e) =>
                                    handleInputChange(
                                      "whatsappNumber",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                              <div className="form-group">
                                <label className="mb-1">Email</label>
                                <input
                                  type="text"
                                  className="form-control rounded"
                                  placeholder="Enter Email"
                                  value={formData.email}
                                  onChange={(e) =>
                                    handleInputChange("email", e.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                              <div className="form-group">
                                <label className="mb-1">Website</label>
                                <input
                                  type="text"
                                  className="form-control rounded"
                                  placeholder="Enter Website"
                                  value={formData.direction_link}
                                  onChange={(e) =>
                                    handleInputChange(
                                      "direction_link",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Image & Gallery Option */}
                      <div className="dashboard-list-wraps bg-white rounded mb-4">
                        <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                          <div className="dashboard-list-wraps-flx">
                            <h4 className="mb-0 ft-medium fs-md">
                              <i className="fa fa-camera me-2 theme-cl fs-sm" />
                              Image &amp; Gallery Option
                            </h4>
                          </div>
                        </div>
                        <div className="dashboard-list-wraps-body py-3 px-3">
                          <div className="row">
                            {/* Logo */}
                            <div className="col-lg-4 col-md-6">
                              <label className="mb-1">Upload Logo</label>
                              {logoPreview ? (
                                <div>
                                  <img
                                    src={logoPreview}
                                    alt="Logo Preview"
                                    id="single-logo"
                                    style={{
                                      width: "100%",
                                      maxHeight: "150px",
                                      objectFit: "contain",
                                      border: "2px dashed #ccc",
                                      padding: "20px",
                                      textAlign: "center",
                                      cursor: "pointer",
                                    }}
                                  />
                                  <div className="mt-2 text-center">
                                    <button
                                      className="btn btn-primary rounded-pill px-3 py-1"
                                      onClick={handleSelectLogo}
                                    >
                                      Change Logo
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                <div
                                  className="dropzone"
                                  id="single-logo"
                                  onClick={handleSelectLogo}
                                  style={{
                                    border: "2px dashed #ccc",
                                    padding: "20px",
                                    textAlign: "center",
                                    cursor: "pointer",
                                  }}
                                >
                                  <i className="fas fa-upload" />
                                  <p>Click to upload logo</p>
                                </div>
                              )}

                              <label className="smart-text">
                                Maximum file size: 2 MB.
                              </label>
                              <input
                                id="logoInput"
                                type="file"
                                className="d-none"
                                accept="image/*"
                                onChange={handlebusinessLogoChange}
                              />
                            </div>
                            {/* Featured Image */}
                            <div className="col-lg-4 col-md-6">
                              <label className="mb-1">Featured Image</label>
                              {featurePreview ? (
                                <div>
                                  <img
                                    src={featurePreview}
                                    alt="Logo Preview"
                                    id="featured-image"
                                    style={{
                                      width: "100%",
                                      maxHeight: "150px",
                                      objectFit: "contain",
                                      border: "2px dashed #ccc",
                                      padding: "20px",
                                      textAlign: "center",
                                      cursor: "pointer",
                                    }}
                                  />
                                  <div className="mt-2 text-center">
                                    <button
                                      className="btn btn-primary rounded-pill px-3 py-1"
                                      onClick={handleSelectFeature}
                                    >
                                      Change Feature
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                <div
                                  className="dropzone"
                                  id="featured-image"
                                  onClick={handleSelectFeature}
                                  style={{
                                    border: "2px dashed #ccc",
                                    padding: "20px",
                                    textAlign: "center",
                                    cursor: "pointer",
                                  }}
                                >
                                  <i className="fas fa-upload" />
                                  <p>Click to Featured Image</p>
                                </div>
                              )}

                              <label className="smart-text">
                                Maximum file size: 2 MB.
                              </label>
                              <input
                                id="featureInput"
                                type="file"
                                className="d-none"
                                accept="image/*"
                                onChange={handlebusinessFeatureChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Working hours */}
                      <div className="dashboard-list-wraps bg-white rounded mb-4">
                        <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                          <div className="dashboard-list-wraps-flx">
                            <h4 className="mb-0 ft-medium fs-md">
                              <i className="fa fa-clock me-2 theme-cl fs-sm" />
                              Working Hours
                            </h4>
                          </div>
                        </div>
                        <div className="dashboard-list-wraps-body py-3 px-3">
                          <div className="row">
                            <div className="form-group">
                              <div className="row align-items-center">
                                <label className="control-label col-lg-2 col-md-2">
                                  Monday
                                </label>
                                <div className="col-lg-5 col-md-5">
                                  <select className="form-control chosen-select">
                                    <option>Opening Time</option>
                                    <option>1 :00 AM</option>
                                    <option>2 :00 AM</option>
                                    <option>3 :00 AM</option>
                                    <option>4 :00 AM</option>
                                    <option>5 :00 AM</option>
                                    <option>6 :00 AM</option>
                                    <option>7 :00 AM</option>
                                    <option>8 :00 AM</option>
                                    <option>9 :00 AM</option>
                                    <option>10 :00 AM</option>
                                    <option>11 :00 AM</option>
                                    <option>12 :00 AM</option>
                                    <option>1 :00 PM</option>
                                    <option>2 :00 PM</option>
                                    <option>3 :00 PM</option>
                                    <option>4 :00 PM</option>
                                    <option>5 :00 PM</option>
                                    <option>6 :00 PM</option>
                                    <option>7 :00 PM</option>
                                    <option>8 :00 PM</option>
                                    <option>9 :00 PM</option>
                                    <option>10 :00 PM</option>
                                    <option>11 :00 PM</option>
                                    <option>12 :00 PM</option>
                                    <option>Closed</option>
                                  </select>
                                </div>
                                <div className="col-lg-5 col-md-5">
                                  <select className="form-control">
                                    <option>Closing Time</option>
                                    <option>1 :00 AM</option>
                                    <option>2 :00 AM</option>
                                    <option>3 :00 AM</option>
                                    <option>4 :00 AM</option>
                                    <option>5 :00 AM</option>
                                    <option>6 :00 AM</option>
                                    <option>7 :00 AM</option>
                                    <option>8 :00 AM</option>
                                    <option>9 :00 AM</option>
                                    <option>10 :00 AM</option>
                                    <option>11 :00 AM</option>
                                    <option>12 :00 AM</option>
                                    <option>1 :00 PM</option>
                                    <option>2 :00 PM</option>
                                    <option>3 :00 PM</option>
                                    <option>4 :00 PM</option>
                                    <option>5 :00 PM</option>
                                    <option>6 :00 PM</option>
                                    <option>7 :00 PM</option>
                                    <option>8 :00 PM</option>
                                    <option>9 :00 PM</option>
                                    <option>10 :00 PM</option>
                                    <option>11 :00 PM</option>
                                    <option>12 :00 PM</option>
                                    <option>Closed</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row align-items-center">
                                <label className="control-label col-lg-2 col-md-2">
                                  Tuesday
                                </label>
                                <div className="col-lg-5 col-md-5">
                                  <select className="form-control chosen-select">
                                    <option>Opening Time</option>
                                    <option>1 :00 AM</option>
                                    <option>2 :00 AM</option>
                                    <option>3 :00 AM</option>
                                    <option>4 :00 AM</option>
                                    <option>5 :00 AM</option>
                                    <option>6 :00 AM</option>
                                    <option>7 :00 AM</option>
                                    <option>8 :00 AM</option>
                                    <option>9 :00 AM</option>
                                    <option>10 :00 AM</option>
                                    <option>11 :00 AM</option>
                                    <option>12 :00 AM</option>
                                    <option>1 :00 PM</option>
                                    <option>2 :00 PM</option>
                                    <option>3 :00 PM</option>
                                    <option>4 :00 PM</option>
                                    <option>5 :00 PM</option>
                                    <option>6 :00 PM</option>
                                    <option>7 :00 PM</option>
                                    <option>8 :00 PM</option>
                                    <option>9 :00 PM</option>
                                    <option>10 :00 PM</option>
                                    <option>11 :00 PM</option>
                                    <option>12 :00 PM</option>
                                    <option>Closed</option>
                                  </select>
                                </div>
                                <div className="col-lg-5 col-md-5">
                                  <select className="form-control">
                                    <option>Closing Time</option>
                                    <option>1 :00 AM</option>
                                    <option>2 :00 AM</option>
                                    <option>3 :00 AM</option>
                                    <option>4 :00 AM</option>
                                    <option>5 :00 AM</option>
                                    <option>6 :00 AM</option>
                                    <option>7 :00 AM</option>
                                    <option>8 :00 AM</option>
                                    <option>9 :00 AM</option>
                                    <option>10 :00 AM</option>
                                    <option>11 :00 AM</option>
                                    <option>12 :00 AM</option>
                                    <option>1 :00 PM</option>
                                    <option>2 :00 PM</option>
                                    <option>3 :00 PM</option>
                                    <option>4 :00 PM</option>
                                    <option>5 :00 PM</option>
                                    <option>6 :00 PM</option>
                                    <option>7 :00 PM</option>
                                    <option>8 :00 PM</option>
                                    <option>9 :00 PM</option>
                                    <option>10 :00 PM</option>
                                    <option>11 :00 PM</option>
                                    <option>12 :00 PM</option>
                                    <option>Closed</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row align-items-center">
                                <label className="control-label col-lg-2 col-md-2">
                                  Wednesday
                                </label>
                                <div className="col-lg-5 col-md-5">
                                  <select className="form-control chosen-select">
                                    <option>Opening Time</option>
                                    <option>1 :00 AM</option>
                                    <option>2 :00 AM</option>
                                    <option>3 :00 AM</option>
                                    <option>4 :00 AM</option>
                                    <option>5 :00 AM</option>
                                    <option>6 :00 AM</option>
                                    <option>7 :00 AM</option>
                                    <option>8 :00 AM</option>
                                    <option>9 :00 AM</option>
                                    <option>10 :00 AM</option>
                                    <option>11 :00 AM</option>
                                    <option>12 :00 AM</option>
                                    <option>1 :00 PM</option>
                                    <option>2 :00 PM</option>
                                    <option>3 :00 PM</option>
                                    <option>4 :00 PM</option>
                                    <option>5 :00 PM</option>
                                    <option>6 :00 PM</option>
                                    <option>7 :00 PM</option>
                                    <option>8 :00 PM</option>
                                    <option>9 :00 PM</option>
                                    <option>10 :00 PM</option>
                                    <option>11 :00 PM</option>
                                    <option>12 :00 PM</option>
                                    <option>Closed</option>
                                  </select>
                                </div>
                                <div className="col-lg-5 col-md-5">
                                  <select className="form-control">
                                    <option>Closing Time</option>
                                    <option>1 :00 AM</option>
                                    <option>2 :00 AM</option>
                                    <option>3 :00 AM</option>
                                    <option>4 :00 AM</option>
                                    <option>5 :00 AM</option>
                                    <option>6 :00 AM</option>
                                    <option>7 :00 AM</option>
                                    <option>8 :00 AM</option>
                                    <option>9 :00 AM</option>
                                    <option>10 :00 AM</option>
                                    <option>11 :00 AM</option>
                                    <option>12 :00 AM</option>
                                    <option>1 :00 PM</option>
                                    <option>2 :00 PM</option>
                                    <option>3 :00 PM</option>
                                    <option>4 :00 PM</option>
                                    <option>5 :00 PM</option>
                                    <option>6 :00 PM</option>
                                    <option>7 :00 PM</option>
                                    <option>8 :00 PM</option>
                                    <option>9 :00 PM</option>
                                    <option>10 :00 PM</option>
                                    <option>11 :00 PM</option>
                                    <option>12 :00 PM</option>
                                    <option>Closed</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row align-items-center">
                                <label className="control-label col-lg-2 col-md-2">
                                  Thursday
                                </label>
                                <div className="col-lg-5 col-md-5">
                                  <select className="form-control chosen-select">
                                    <option>Opening Time</option>
                                    <option>1 :00 AM</option>
                                    <option>2 :00 AM</option>
                                    <option>3 :00 AM</option>
                                    <option>4 :00 AM</option>
                                    <option>5 :00 AM</option>
                                    <option>6 :00 AM</option>
                                    <option>7 :00 AM</option>
                                    <option>8 :00 AM</option>
                                    <option>9 :00 AM</option>
                                    <option>10 :00 AM</option>
                                    <option>11 :00 AM</option>
                                    <option>12 :00 AM</option>
                                    <option>1 :00 PM</option>
                                    <option>2 :00 PM</option>
                                    <option>3 :00 PM</option>
                                    <option>4 :00 PM</option>
                                    <option>5 :00 PM</option>
                                    <option>6 :00 PM</option>
                                    <option>7 :00 PM</option>
                                    <option>8 :00 PM</option>
                                    <option>9 :00 PM</option>
                                    <option>10 :00 PM</option>
                                    <option>11 :00 PM</option>
                                    <option>12 :00 PM</option>
                                    <option>Closed</option>
                                  </select>
                                </div>
                                <div className="col-lg-5 col-md-5">
                                  <select className="form-control">
                                    <option>Closing Time</option>
                                    <option>1 :00 AM</option>
                                    <option>2 :00 AM</option>
                                    <option>3 :00 AM</option>
                                    <option>4 :00 AM</option>
                                    <option>5 :00 AM</option>
                                    <option>6 :00 AM</option>
                                    <option>7 :00 AM</option>
                                    <option>8 :00 AM</option>
                                    <option>9 :00 AM</option>
                                    <option>10 :00 AM</option>
                                    <option>11 :00 AM</option>
                                    <option>12 :00 AM</option>
                                    <option>1 :00 PM</option>
                                    <option>2 :00 PM</option>
                                    <option>3 :00 PM</option>
                                    <option>4 :00 PM</option>
                                    <option>5 :00 PM</option>
                                    <option>6 :00 PM</option>
                                    <option>7 :00 PM</option>
                                    <option>8 :00 PM</option>
                                    <option>9 :00 PM</option>
                                    <option>10 :00 PM</option>
                                    <option>11 :00 PM</option>
                                    <option>12 :00 PM</option>
                                    <option>Closed</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row align-items-center">
                                <label className="control-label col-lg-2 col-md-2">
                                  Friday
                                </label>
                                <div className="col-lg-5 col-md-5">
                                  <select className="form-control chosen-select">
                                    <option>Opening Time</option>
                                    <option>1 :00 AM</option>
                                    <option>2 :00 AM</option>
                                    <option>3 :00 AM</option>
                                    <option>4 :00 AM</option>
                                    <option>5 :00 AM</option>
                                    <option>6 :00 AM</option>
                                    <option>7 :00 AM</option>
                                    <option>8 :00 AM</option>
                                    <option>9 :00 AM</option>
                                    <option>10 :00 AM</option>
                                    <option>11 :00 AM</option>
                                    <option>12 :00 AM</option>
                                    <option>1 :00 PM</option>
                                    <option>2 :00 PM</option>
                                    <option>3 :00 PM</option>
                                    <option>4 :00 PM</option>
                                    <option>5 :00 PM</option>
                                    <option>6 :00 PM</option>
                                    <option>7 :00 PM</option>
                                    <option>8 :00 PM</option>
                                    <option>9 :00 PM</option>
                                    <option>10 :00 PM</option>
                                    <option>11 :00 PM</option>
                                    <option>12 :00 PM</option>
                                    <option>Closed</option>
                                  </select>
                                </div>
                                <div className="col-lg-5 col-md-5">
                                  <select className="form-control">
                                    <option>Closing Time</option>
                                    <option>1 :00 AM</option>
                                    <option>2 :00 AM</option>
                                    <option>3 :00 AM</option>
                                    <option>4 :00 AM</option>
                                    <option>5 :00 AM</option>
                                    <option>6 :00 AM</option>
                                    <option>7 :00 AM</option>
                                    <option>8 :00 AM</option>
                                    <option>9 :00 AM</option>
                                    <option>10 :00 AM</option>
                                    <option>11 :00 AM</option>
                                    <option>12 :00 AM</option>
                                    <option>1 :00 PM</option>
                                    <option>2 :00 PM</option>
                                    <option>3 :00 PM</option>
                                    <option>4 :00 PM</option>
                                    <option>5 :00 PM</option>
                                    <option>6 :00 PM</option>
                                    <option>7 :00 PM</option>
                                    <option>8 :00 PM</option>
                                    <option>9 :00 PM</option>
                                    <option>10 :00 PM</option>
                                    <option>11 :00 PM</option>
                                    <option>12 :00 PM</option>
                                    <option>Closed</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row align-items-center">
                                <label className="control-label col-lg-2 col-md-2">
                                  Saturday
                                </label>
                                <div className="col-lg-5 col-md-5">
                                  <select className="form-control chosen-select">
                                    <option>Opening Time</option>
                                    <option>1 :00 AM</option>
                                    <option>2 :00 AM</option>
                                    <option>3 :00 AM</option>
                                    <option>4 :00 AM</option>
                                    <option>5 :00 AM</option>
                                    <option>6 :00 AM</option>
                                    <option>7 :00 AM</option>
                                    <option>8 :00 AM</option>
                                    <option>9 :00 AM</option>
                                    <option>10 :00 AM</option>
                                    <option>11 :00 AM</option>
                                    <option>12 :00 AM</option>
                                    <option>1 :00 PM</option>
                                    <option>2 :00 PM</option>
                                    <option>3 :00 PM</option>
                                    <option>4 :00 PM</option>
                                    <option>5 :00 PM</option>
                                    <option>6 :00 PM</option>
                                    <option>7 :00 PM</option>
                                    <option>8 :00 PM</option>
                                    <option>9 :00 PM</option>
                                    <option>10 :00 PM</option>
                                    <option>11 :00 PM</option>
                                    <option>12 :00 PM</option>
                                    <option>Closed</option>
                                  </select>
                                </div>
                                <div className="col-lg-5 col-md-5">
                                  <select className="form-control">
                                    <option>Closing Time</option>
                                    <option>1 :00 AM</option>
                                    <option>2 :00 AM</option>
                                    <option>3 :00 AM</option>
                                    <option>4 :00 AM</option>
                                    <option>5 :00 AM</option>
                                    <option>6 :00 AM</option>
                                    <option>7 :00 AM</option>
                                    <option>8 :00 AM</option>
                                    <option>9 :00 AM</option>
                                    <option>10 :00 AM</option>
                                    <option>11 :00 AM</option>
                                    <option>12 :00 AM</option>
                                    <option>1 :00 PM</option>
                                    <option>2 :00 PM</option>
                                    <option>3 :00 PM</option>
                                    <option>4 :00 PM</option>
                                    <option>5 :00 PM</option>
                                    <option>6 :00 PM</option>
                                    <option>7 :00 PM</option>
                                    <option>8 :00 PM</option>
                                    <option>9 :00 PM</option>
                                    <option>10 :00 PM</option>
                                    <option>11 :00 PM</option>
                                    <option>12 :00 PM</option>
                                    <option>Closed</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row align-items-center">
                                <label className="control-label col-lg-2 col-md-2">
                                  Sunday
                                </label>
                                <div className="col-lg-5 col-md-5">
                                  <select className="form-control chosen-select">
                                    <option>Opening Time</option>
                                    <option>1 :00 AM</option>
                                    <option>2 :00 AM</option>
                                    <option>3 :00 AM</option>
                                    <option>4 :00 AM</option>
                                    <option>5 :00 AM</option>
                                    <option>6 :00 AM</option>
                                    <option>7 :00 AM</option>
                                    <option>8 :00 AM</option>
                                    <option>9 :00 AM</option>
                                    <option>10 :00 AM</option>
                                    <option>11 :00 AM</option>
                                    <option>12 :00 AM</option>
                                    <option>1 :00 PM</option>
                                    <option>2 :00 PM</option>
                                    <option>3 :00 PM</option>
                                    <option>4 :00 PM</option>
                                    <option>5 :00 PM</option>
                                    <option>6 :00 PM</option>
                                    <option>7 :00 PM</option>
                                    <option>8 :00 PM</option>
                                    <option>9 :00 PM</option>
                                    <option>10 :00 PM</option>
                                    <option>11 :00 PM</option>
                                    <option>12 :00 PM</option>
                                    <option>Closed</option>
                                  </select>
                                </div>
                                <div className="col-lg-5 col-md-5">
                                  <select className="form-control">
                                    <option>Closing Time</option>
                                    <option>1 :00 AM</option>
                                    <option>2 :00 AM</option>
                                    <option>3 :00 AM</option>
                                    <option>4 :00 AM</option>
                                    <option>5 :00 AM</option>
                                    <option>6 :00 AM</option>
                                    <option>7 :00 AM</option>
                                    <option>8 :00 AM</option>
                                    <option>9 :00 AM</option>
                                    <option>10 :00 AM</option>
                                    <option>11 :00 AM</option>
                                    <option>12 :00 AM</option>
                                    <option>1 :00 PM</option>
                                    <option>2 :00 PM</option>
                                    <option>3 :00 PM</option>
                                    <option>4 :00 PM</option>
                                    <option>5 :00 PM</option>
                                    <option>6 :00 PM</option>
                                    <option>7 :00 PM</option>
                                    <option>8 :00 PM</option>
                                    <option>9 :00 PM</option>
                                    <option>10 :00 PM</option>
                                    <option>11 :00 PM</option>
                                    <option>12 :00 PM</option>
                                    <option>Closed</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="form-group mt-4">
                              <input
                                id="t24"
                                className="checkbox-custom"
                                name="24-1"
                                type="checkbox"
                              />
                              <label
                                htmlFor="t24"
                                className="checkbox-custom-label"
                              >
                                This Business open 7x24
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                          <div className="dashboard-list-wraps-flx">
                            <h4 className="mb-0 ft-medium fs-md">
                              <i className="fa fa-clipboard-question me-2 theme-cl fs-sm" />
                              Business FAQs
                            </h4>
                          </div>
                        </div>
                        <div className="dashboard-list-wraps-body py-3 px-3">
                          <div className="row">
                            {faqs.map((faq, index) => (
                              <>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                  <div className="form-group">
                                    <label className="mb-1">Question</label>
                                    <input
                                      type="text"
                                      className="form-control rounded"
                                      placeholder="Enter Question"
                                      value={faq.question}
                                      onChange={(e) =>
                                        handleFaqChange(
                                          index,
                                          "question",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                  <div className="form-group">
                                    <label className="mb-1">Answer</label>
                                    <input
                                      type="text"
                                      className="form-control rounded"
                                      placeholder="Enter Answer"
                                      value={faq.answer}
                                      onChange={(e) =>
                                        handleFaqChange(
                                          index,
                                          "answer",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12">
                                  <div className="form-group">
                                    <Button
                                      onClick={() => handleRemoveFaq(index)}
                                      variant="contained"
                                      color="secondary"
                                      sx={{ mt: 2, background: "red" }}
                                    >
                                      <DeleteIcon />
                                    </Button>
                                  </div>
                                </div>
                              </>
                            ))}
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div className="form-group">
                                <Button
                                  onClick={handleAddFaq}
                                  variant="contained"
                                  sx={{ mt: 2 }}
                                >
                                  + Add Another FAQ
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Social Links */}
                      <div className="dashboard-list-wraps bg-white rounded mb-4">
                        <div className="dashboard-list-wraps-body py-3 px-3">
                          <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-2">
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={isDetailsCorrect}
                                    onChange={() =>
                                      setIsDetailsCorrect(!isDetailsCorrect)
                                    }
                                    color="primary"
                                  />
                                }
                                label="I hereby declare that the above-provided details are all correct"
                                sx={{ mt: 2 }}
                              />
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                              <div className="form-group">
                                <button
                                  className="btn theme-bg rounded text-light"
                                  onClick={handleSubmit}
                                  disabled={!isDetailsCorrect}
                                >
                                  Submit &amp; Preview
                                </button>
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

          {/* =============================== Section End ========================== */}

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

export default AddListing;