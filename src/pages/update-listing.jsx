import React, { useCallback, useEffect, useState } from "react";
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
import { IconButton } from "@mui/material";
import { TagInput } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Modal } from "react-bootstrap";
import Cropper from "react-easy-crop";
import Footer from "../components/Footer";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const UpdateListing = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const listing_id = searchParams.get("business_id");
  const [formData, setFormData] = useState({
    listing_id: listing_id,
    businessName: "",
    description: "",
    address_line_1: "",
    address_line_2: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
    pin_code: "",
    contactNumber: "",
    direction_link: "",
    whatsappNumber: "",
    services: [],
    tags: [],
    website: "",
    email: "",
    branch: "",
    business_logo: "",
  });
  const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);
  const [businessPhotoOnlyUrl, setBusinessPhotoOnlyUrl] = useState([]);
  const [socialMediaLinks, setSocialMediaLinks] = useState([
    { platform: "Instagram", link: "" },
    { platform: "Facebook", link: "" },
    { platform: "YouTube", link: "" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedFacilities, setSelectedFacilities] = useState("");
  const [selectedBusinessType, setSelectedBusinessType] = useState("");
  const [approvedData, setApprovedData] = useState("");
  const [businessHours, setBusinessHours] = useState([
    { day: "Mon", open: "10:00 AM", close: "7:00 PM" },
  ]);
  const [loading, setLoading] = useState(true);
  const [isDetailsCorrect, setIsDetailsCorrect] = useState(false);

  const [userData, setUserData] = useState({
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

        setUserData((prevData) => ({
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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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

  const handleSelectChange = (selectedOptions) => {
    setSelectedFacilities(selectedOptions);
    const selectedValues = selectedOptions.map((option) => option.value);
    setFormData({ services: selectedValues });
  };


  const [businessPhotos, setBusinessPhotos] = useState([]);
  const [featurePreview, setFeaturePreview] = useState(null);
  const [currentBusinessPhotoIndex, setCurrentBusinessPhotoIndex] = useState(null);
  const [logoImage, setLogoImage] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [businessImageSrc, setBusinessImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [businessCrop, setBusinessCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [businessZoom, setBusinessZoom] = useState(1);
  const [show, setShow] = useState(false);
  const [businessShow, setBusinessShow] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);

  const onCropComplete = useCallback((croppedArea, profilePhoto) => {
    setProfilePhoto(profilePhoto);
    handleLogoChange();
  }, []);

  const handleCropComplete = async () => {
    if (imageSrc && profilePhoto) {
      try {
        const croppedImg = await getCroppedImg(imageSrc, profilePhoto);
        setLogoPreview(croppedImg);
        setProfilePhoto(croppedImg);
        setShow(false);

        let croppedBlob = croppedImg;
        if (typeof croppedImg === "string") {
          const byteString = atob(croppedImg.split(",")[1]);
          const mimeString = croppedImg
            .split(",")[0]
            .split(":")[1]
            .split(";")[0];
          const ab = new ArrayBuffer(byteString.length);
          const ia = new Uint8Array(ab);
          for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
          }
          croppedBlob = new Blob([ab], { type: mimeString });
        }

        if (croppedBlob) {
          const reader = new FileReader();
          reader.onloadend = async () => {
            setLogoImage(croppedBlob);
            const updatedFormData = {
              ...formData,
              business_logo: reader.result,
            };
            setFormData(updatedFormData);

            try {
              const logoFormData = new FormData();
              logoFormData.append("files", croppedBlob);

              const localStorage = logoFormData.append("files", croppedBlob);

              const logoResponse = await axiosInstance.post(
                "/file-upload",
                logoFormData
              );
              const logoUrl = logoResponse.data.data.fileURLs[0];

              const updatedListingData = {
                listing_id: listing_id,
                business_logo: logoUrl,
              };
              await businessListingAxiosInstance.patch(
                "/update-listing",
                updatedListingData
              );

              toast.success("Logo updated successfully!", {
                position: toast.POSITION.TOP_RIGHT,
              });
            } catch (error) {
              console.error("Error updating logo and listing data:", error);
              toast.error(
                "Error updating logo and listing data. Please try again.",
                {
                  position: toast.POSITION.TOP_RIGHT,
                }
              );
            }
          };

          reader.readAsDataURL(croppedBlob);
        }
      } catch (error) {
        console.error("Error cropping the image:", error);
      }
    }
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleBusinessClose = () => {
    setBusinessShow(false);
  };

  const handleCropLogoChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
        setShow(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoChange = (event) => {
    const file = profilePhoto;
    if (file instanceof File) {
      if (file.size > 2 * 1024 * 1024) {
        alert("File size exceeds 2 MB!");
        return;
      }
      const previewUrl = URL.createObjectURL(file);
      setLogoPreview(previewUrl);
    }

    if (file) {
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

  const handleSelectLogo = () => {
    const fileInput = document.getElementById("logoInput");
    fileInput.click();
  };

  const handleBusinessPhotosChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("File size exceeds 2 MB!");
        return;
      }
      const previewUrl = URL.createObjectURL(file);
      setFeaturePreview(previewUrl);
    }

    const files = event.target.files;

    if (files.length > 0) {
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

  const handleRemoveBusinessPhoto = async (index) => {
    const newPhotos = [...businessPhotos];
    const removedPhoto = newPhotos.splice(index, 1)[0];
    setBusinessPhotos([...newPhotos]);

    try {
      const updatedRemovedPhoto = removedPhoto.replace(
        "https://files.fggroup.in/",
        ""
      );
      const updatedListingData = {
        listing_id: listing_id,
        business_images: newPhotos.map((url) =>
          url.replace("https://files.fggroup.in/", "")
        ),
      };
      await businessListingAxiosInstance.patch(
        `/update-listing?listing_id=${listing_id}`,
        updatedListingData
      );

      toast.success("Business photo removed successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error(
        "Error removing business photo and updating listing data:",
        error
      );
      toast.error(
        "Error removing business photo and updating listing data. Please try again.",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
    }
  };

  const handleSelectFeature = () => {
    const fileInput = document.getElementById("featureInput");
    fileInput.click();
  };

  const handleCropBusinessPhoto = (event, index) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setBusinessImageSrc(reader.result);
        setCurrentBusinessPhotoIndex(index);
        setBusinessShow(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBusinessCropComplete = async () => {
    if (businessImageSrc && profilePhoto) {
      try {
        const croppedImg = await getCroppedImg(businessImageSrc, profilePhoto);

        if (!croppedImg) {
          console.error("Cropped image is not valid.");
          return;
        }
        let croppedBlob = croppedImg;
        if (typeof croppedImg === "string") {
          const byteString = atob(croppedImg.split(",")[1]);
          const mimeString = croppedImg
            .split(",")[0]
            .split(":")[1]
            .split(";")[0];
          const ab = new ArrayBuffer(byteString.length);
          const ia = new Uint8Array(ab);
          for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
          }
          croppedBlob = new Blob([ab], { type: mimeString });
        }
        const photoFormData = new FormData();
        photoFormData.append("files", croppedBlob);

        const photoResponse = await axiosInstance.post(
          "/file-upload",
          photoFormData
        );
        const uploadedUrls = photoResponse.data.data.fileURLs;
        const processedUrls = uploadedUrls.map((url) =>
          url.replace("https://files.fggroup.in/", "")
        );

        const validPreviousImages = businessPhotos
          .filter(
            (photo) =>
              typeof photo === "string" && photo.includes("development/")
          )
          .map((url) => url.replace("https://files.fggroup.in/", ""));

        const updatedListingData = {
          listing_id: listing_id,
          business_images: [...processedUrls, ...validPreviousImages],
        };

        await businessListingAxiosInstance.patch(
          `/update-listing?listing_id=${listing_id}`,
          updatedListingData
        );

        toast.success("Business photo updated successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });

        const fullUrls = [...validPreviousImages, ...processedUrls].map(
          (url) => `https://files.fggroup.in/${url}`
        );
        setBusinessPhotos(fullUrls);
        setBusinessShow(false);
      } catch (error) {
        console.error("Error updating business photo:", error);
        toast.error("Error updating business photo. Please try again.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };

  const handleDayChange = (index, selectedDay) => {
    const updatedBusinessHours = [...businessHours];
    updatedBusinessHours[index].day = selectedDay;
    setBusinessHours(updatedBusinessHours);
  };

  // const handleTimeChange = (index, field, value) => {
  //   const updatedBusinessHours = [...businessHours];
  //   updatedBusinessHours[index][field] = value;
  //   setBusinessHours(updatedBusinessHours);
  // };

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

  const handleSocialMediaLinkChange = (index, value) => {
    const newLinks = [...socialMediaLinks];
    newLinks[index].link = value;
    setSocialMediaLinks([...newLinks]);
  };

  const handleRemoveSocialMediaLink = (index) => {
    const newLinks = [...socialMediaLinks];
    newLinks.splice(index, 1);
    setSocialMediaLinks([...newLinks]);
  };

  const getBusinessData = async () => {
    try {
      const response = await businessListingAxiosInstance.get(
        `/get-listing?listing_id=${listing_id}`
      );
      const fetchedBusinessData = response.data.data[0];
      const address = fetchedBusinessData.locations[0];
      const social_media = fetchedBusinessData.social_media;
      const businessHours = fetchedBusinessData.timings || [];
      const approval_status = fetchedBusinessData.approval_status;
      const allDays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
      const businessHoursData = businessHours.map((dayData) => ({
        day: dayData.title || "",
        open: dayData.timings.length > 0 ? dayData.timings[0].from_time : "",
        close: dayData.timings.length > 0 ? dayData.timings[0].to_time : "",
      }));
      const timesData = allDays.reduce((acc, day) => {
        const dayData = businessHours.find((item) => item.title === day);
        acc[day] = {
          opening:
            dayData && dayData.timings.length > 0
              ? dayData.timings[0].from_time
              : "Closed",
          closing:
            dayData && dayData.timings.length > 0
              ? dayData.timings[0].to_time
              : "Closed",
        };
        return acc;
      }, {});

      setTimes(timesData);
      const faq = fetchedBusinessData.faqs;
      const faqData = faq.map((faqItem) => ({
        question: faqItem.question,
        answer: faqItem.answer,
      }));
      const logoImg =
        "https://files.fggroup.in/" + fetchedBusinessData.business_logo;
      const businessImages = fetchedBusinessData.business_images || [];
      const businessPhotoURLs = businessImages.map(
        (imagePath) => `https://files.fggroup.in/${imagePath}`
      );

      setBusinessPhotoOnlyUrl(businessImages);
      setBusinessPhotos(businessPhotoURLs);
      setSocialMediaLinks(social_media);
      setApprovedData(approval_status);

      setFormData({
        businessName: fetchedBusinessData.business_name || "",
        description: fetchedBusinessData.description || "",
        address_line_1: address.address_line_1 || "",
        address_line_2: address.address_line_2 || "",
        area: address.area || "",
        landmark: address.landmark || "",
        city: address.city || "",
        state: address.state || "",
        pin_code: address.pin_code || "",
        direction_link: address.direction_link || "",
        contactNumber:
          address.contact.contact_type === "mobile"
            ? address.contact.value
            : "",
        whatsappNumber:
          fetchedBusinessData.contacts.find(
            (contact) => contact.contact_type === "whatsapp"
          )?.value || "",
        services: fetchedBusinessData.services || [],
        tags: fetchedBusinessData.tags || [],
        website:
          fetchedBusinessData.contacts.find(
            (contact) => contact.contact_type === "website"
          )?.value || "",
        email:
          fetchedBusinessData.contacts.find(
            (contact) => contact.contact_type === "email"
          )?.value || "",
        branch: address.location_name || "",
      });
      console.log(
        "fetchedBusinessData.contacts :- ",
        fetchedBusinessData.contacts
      );

      setSelectedFacilities(
        fetchedBusinessData.services?.map((facility) => ({
          label: facility,
          value: facility,
        }))
      );
      setBusinessHours(businessHoursData);
      setFaqs(faqData);
      setLogoImage(logoImg);
      setLogoPreview(logoImg);
      setSelectedCategory(fetchedBusinessData.business_category[0]);
      setSelectedBusinessType(fetchedBusinessData.business_type);
    } catch (error) {
      console.error("Error in Getting Business Data:", error);
    }
  };

  useEffect(() => {
    getBusinessData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const postData = {
        listing_id: listing_id,
        business_type: selectedBusinessType,
        business_name: formData.businessName,
        description: formData.description,
        business_category: [selectedCategory],
        services: selectedFacilities.map((facilities) => facilities.value),
        tags: formData.tags || [],
        social_media: socialMediaLinks.map((link) => ({
          social_media_type: link.social_media_type,
          link: link.link,
        })),
        locations: [
          {
            location_name: formData.branch,
            address_line_1: formData.address_line_1,
            address_line_2: formData.address_line_2,
            city: formData.city,
            state: formData.state,
            country: "India",
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
          {
            contact_type: "whatsapp",
            value: formData.whatsappNumber,
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

      await businessListingAxiosInstance.patch("/update-listing", postData);
      getBusinessData();

      toast.success("Business Data Updated successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error("Error uploading files:", error);

      toast.error("Error Updating listing. Please try again.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const getStatusBadge = (status, feedback) => {
    let badgeColor, badgeText;

    switch (status) {
      case "APPROVED":
        badgeColor = "#00d300";
        badgeText = "Approved";
        break;
      case "PENDING":
        badgeColor = "orange";
        badgeText = "Pending";
        break;
      case "REJECTED":
        badgeColor = "red";
        badgeText = "Rejected";
        break;
      case "BANNED":
        badgeColor = "red";
        badgeText = "Banned";
        break;
      default:
        badgeColor = "gray";
        badgeText = "Unknown";
    }

    return (
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            className="mt-2"
            style={{
              backgroundColor: badgeColor,
              color: "#fff",
              padding: "5px 10px",
              borderRadius: "5px",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            {badgeText}
          </div>
        </div>
        {feedback && (
          <div style={{ color: "red" }} className="mt-3">
            <h6>Feedback: {feedback}</h6>
          </div>
        )}
      </div>
    );
  };

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

  const [times, setTimes] = useState({
    Monday: { opening: "Opening Time", closing: "Closing Time" },
    Tuesday: { opening: "Opening Time", closing: "Closing Time" },
    Wednesday: { opening: "Opening Time", closing: "Closing Time" },
    Thursday: { opening: "Opening Time", closing: "Closing Time" },
    Friday: { opening: "Opening Time", closing: "Closing Time" },
    Saturday: { opening: "Opening Time", closing: "Closing Time" },
    Sunday: { opening: "Opening Time", closing: "Closing Time" },
  });

  const [sameForAll, setSameForAll] = useState(false);

  const timeOptions = [
    "01:00 AM",
    "02:00 AM",
    "03:00 AM",
    "04:00 AM",
    "05:00 AM",
    "06:00 AM",
    "07:00 AM",
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
    "10:00 PM",
    "11:00 PM",
    "12:00 PM",
    "Closed",
  ];

  const handleTimeChange = (day, field, value) => {
    const updatedTimes = { ...times };
    updatedTimes[day][field] = value;

    if (sameForAll) {
      Object.keys(updatedTimes).forEach((key) => {
        updatedTimes[key] = { ...updatedTimes[day] };
      });
    }

    setTimes(updatedTimes);
  };

  const handleCheckboxChange = (checked) => {
    setSameForAll(checked);
    if (checked) {
      const mondayTimes = times.Monday;
      const updatedTimes = { ...times };
      Object.keys(updatedTimes).forEach((day) => {
        updatedTimes[day] = { ...mondayTimes };
      });
      setTimes(updatedTimes);
    }
  };

  const getBusinessHours = () => {
    const allDaysTime = Object.keys(times).map((day) => ({
      day,
      open: times[day].opening,
      close: times[day].closing,
    }));

    setBusinessHours(allDaysTime);
  };

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
                        src={`${userData.profilePhoto}`}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="dashboard-head-author-caption">
                      <div className="dashploio">
                        <h4>
                          {userData.first_name + " " + userData.last_name}
                        </h4>
                      </div>
                      <div className="dashploio">
                        <span className="agd-location">
                          <i className="lni lni-map-marker me-1" />
                          {userData?.city +
                            ", " +
                            userData?.state +
                            ", " +
                            userData.country}
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
                    <li>
                      <Link to="/all-listing">
                        <i className="lni lni-files me-2" />
                        All Listings
                      </Link>
                    </li>
                    <li>
                      <Link to="/listing-list">
                        <i className="lni lni-files me-2" />
                        My Listings
                      </Link>
                    </li>
                    <li className="active">
                      <Link to="/add-listing">
                        <i className="lni lni-add-files me-2" />
                        Update Listing
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
              <div className="dashboard-tlbar d-block mb-5">
                <div className="row">
                  <div className="colxl-12 col-lg-12 col-md-12">
                    <h1 className="ft-medium">Update Listing</h1>
                  </div>
                </div>
              </div>
              <div className="dashboard-widg-bar d-block">
                <div className="row">
                  <div className="col-xl-12 col-lg-2 col-md-12 col-sm-12">
                    <div className="submit-form">
                      <div className="dashboard-list-wraps bg-white rounded mb-4">
                        <div className="dashboard-list-wraps-head br-bottom py-3 px-3">
                          <div className="dashboard-list-wraps-flx">
                            <h4 className="mb-0 ft-medium fs-md">
                              <i className="fa fa-file me-2 theme-cl fs-sm" />
                              Business Info
                            </h4>
                          </div>
                        </div>
                        <div className="dashboard-list-wraps-body py-3 px-3">
                          <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                              <div>
                                <Typography variant="h6" gutterBottom>
                                  Business Approval Status
                                </Typography>
                                <div style={{ marginBottom: "10px" }}>
                                  <div>
                                    <Typography
                                      variant="subtitle1"
                                      className="mb-1"
                                    >
                                      Date:{" "}
                                      {new Date(
                                        approvedData.createdAt
                                      ).toLocaleDateString()}
                                    </Typography>
                                  </div>
                                  {getStatusBadge(
                                    approvedData.status,
                                    approvedData.feedback
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
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
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
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
                                  <option value="personal">Personal</option>
                                  <option selected value="business">
                                    Business
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                              <div className="form-group">
                                <label className="mb-1">Tags</label>
                                <TagInput
                                  type="text"
                                  className="form-control rounded"
                                  placeholder="Add Tags"
                                  value={formData.tags}
                                  onChange={(value) =>
                                    handleInputChange("tags", value)
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                              <div className="form-group">
                                <label className="mb-1">Facilities</label>
                                <Select
                                  isMulti
                                  options={facilities}
                                  value={selectedFacilities}
                                  onChange={handleSelectChange}
                                  placeholder="Select Facilities"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
                                <label className="mb-1">Country</label>
                                <input
                                  type="text"
                                  className="form-control rounded"
                                  placeholder="Enter Country"
                                  value={formData.country}
                                  onChange={(e) =>
                                    handleInputChange("country", e.target.value)
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
                                <label className="mb-1">Address Link</label>
                                <input
                                  type="text"
                                  className="form-control rounded"
                                  placeholder="Enter Address Link"
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
                                  value={formData.website}
                                  onChange={(e) =>
                                    handleInputChange("website", e.target.value)
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
                            <div className="col-12">
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
                                onChange={handleCropLogoChange}
                              />
                            </div>
                            <div className="col-12 mt-3">
                              <label className="mb-1">Featured Image </label>
                              {businessPhotos && businessPhotos.length > 0 ? (
                                <div>
                                  <div
                                    className="d-flex"
                                    style={{
                                      border: "2px dashed #ccc",
                                      padding: "20px",
                                      textAlign: "center",
                                      cursor: "pointer",
                                    }}
                                  >
                                    {businessPhotos.map((photo, index) => (
                                      <div
                                        key={index}
                                        style={{
                                          width: "200px",
                                          position: "relative",
                                          marginBottom: "10px",
                                        }}
                                      >
                                        <div
                                          style={{
                                            width: "100%",
                                            height: "auto",
                                          }}
                                        >
                                          <img
                                            src={
                                              photo.preview
                                                ? photo.preview
                                                : photo
                                            }
                                            alt={`Business Photo ${index + 1}`}
                                            style={{
                                              maxWidth: "100%",
                                              height: "auto",
                                              marginBottom: "5px",
                                            }}
                                          />
                                          <IconButton
                                            onClick={() =>
                                              handleRemoveBusinessPhoto(index)
                                            }
                                            className="px-1 py-1"
                                            style={{
                                              position: "absolute",
                                              top: 4,
                                              right: 15,
                                              backgroundColor:
                                                "rgba(255, 255, 255, 0.8)",
                                            }}
                                          >
                                            <DeleteIcon
                                              style={{ color: "#ff3838" }}
                                            />
                                          </IconButton>
                                          <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(event) =>
                                              handleCropBusinessPhoto(
                                                event,
                                                index
                                              )
                                            }
                                            style={{ display: "none" }}
                                            id={`photoInput-${index}`}
                                          />
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="mt-2 text-center">
                                    <button
                                      className="btn btn-primary rounded-pill px-3 py-1"
                                      onClick={handleSelectFeature}
                                    >
                                      Add Feature Image
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
                                Maximum file size per Image: 2 MB.
                              </label>
                              <input
                                id="featureInput"
                                type="file"
                                accept="image/*"
                                className="d-none"
                                onChange={handleCropBusinessPhoto}
                                sx={{ mt: 2, mb: 2 }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
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
                          <div className="form-check mb-3">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="sameForAll"
                              checked={sameForAll}
                              onChange={(e) =>
                                handleCheckboxChange(e.target.checked)
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="sameForAll"
                            >
                              Same with all
                            </label>
                          </div>
                          {Object.keys(times).map((day) => (
                            <div
                              className="row align-items-center mb-3"
                              key={day}
                            >
                              <label className="control-label col-lg-2 col-md-2">
                                {day}
                              </label>
                              <div className="col-lg-5 col-md-5">
                                <select
                                  className="form-control"
                                  value={times[day].opening}
                                  onChange={(e) => {
                                    handleTimeChange(
                                      day,
                                      "opening",
                                      e.target.value
                                    );
                                    getBusinessHours();
                                  }}
                                >
                                  <option>Opening Time</option>
                                  {timeOptions.map((time) => (
                                    <option key={time} value={time}>
                                      {time}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div className="col-lg-5 col-md-5">
                                <select
                                  className="form-control"
                                  value={times[day].closing}
                                  onChange={(e) => {
                                    handleTimeChange(
                                      day,
                                      "closing",
                                      e.target.value
                                    );
                                    getBusinessHours();
                                  }}
                                >
                                  <option>Closing Time</option>
                                  {timeOptions.map((time) => (
                                    <option key={time} value={time}>
                                      {time}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="dashboard-list-wraps bg-white rounded mb-4">
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
                                  Update Listing
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
      <ToastContainer />
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Crop Logo Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ position: "relative", width: "100%", height: 400 }}>
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={8 / 8}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleCropComplete}
            style={{
              backgroundColor: "#007bff",
              borderColor: "#007bff",
              color: "white",
            }}
          >
            Crop Image
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={businessShow}
        onHide={handleBusinessClose}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Crop Business Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ position: "relative", width: "100%", height: 400 }}>
            <Cropper
              image={businessImageSrc}
              crop={businessCrop}
              zoom={businessZoom}
              aspect={12 / 8}
              onCropChange={setBusinessCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setBusinessZoom}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleBusinessClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleBusinessCropComplete}
            style={{
              backgroundColor: "#007bff",
              borderColor: "#007bff",
              color: "white",
            }}
          >
            Crop Image
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateListing;

const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.src = url;
  });

async function getCroppedImg(imageSrc, pixelCrop) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) return null;

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  return canvas.toDataURL("image/jpeg");
}
