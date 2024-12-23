import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import "../assets/css/style.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { businessListingAxiosInstance } from "../js/api";
import Dummy_img from "../assets/dummy-image-square.jpg";
import User_img from "../assets/user-profile.png";
import Footer from "../components/Footer";

import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import "yet-another-react-lightbox/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "../assets/css/animation.css";
import validator from "validator";
import Slider from "react-slick";
import { Col, Row } from "react-bootstrap";
import CircleIcon from "@mui/icons-material/Circle";
import StarIcon from "@mui/icons-material/Star";

const ListingView = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const business_id = searchParams.get("business_id");
  const [businessData, setBusinessData] = useState([]);
  const [listNumber, setListNumber] = useState("");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [helpfulCount, setHelpfulCount] = useState(0);
  const [replyInputVisible, setReplyInputVisible] = useState(false);
  const [locationData, setLocationData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [timings, setTimings] = useState([]);
  const [services, setServices] = useState([]);
  const [tags, setTags] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [businessImages, setBusinessImages] = useState([]);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [userReviewsData, setUserReviewData] = useState([]);
  const [replyInput, setReplyInput] = useState([]);
  const [replyInputsVisible, setReplyInputsVisible] = useState(
    new Array(userReviewsData.length).fill(false)
  );
  const [replyInputs, setReplyInputs] = useState(
    new Array(userReviewsData.length).fill("")
  );
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteList, setFavoriteList] = useState([]);
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [loading, setLoading] = useState(true);

  const [allBusinessData, setAllBusinessData] = useState([]);

  const fetchAllBusinessData = async () => {
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
      setAllBusinessData(fetchedBusinessData);
    } catch (error) {
      console.error("Error in Getting Business Data:", error);
    }
  };

  useEffect(() => {
    fetchAllBusinessData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const isValidWebsite = (website) => {
    return validator.isURL(website, { require_protocol: true });
  };

  const getUserData = async () => {
    const getData = JSON.parse(localStorage.getItem("user_info")) || "";
    const userData = getData.user || "";
    setUserData(userData);
  };

  const handleAddFavoriteClick = async () => {
    try {
      let requestData;

      if (isFavorite) {
        requestData = {
          business_listing_id: business_id,
        };
      } else {
        requestData = {
          business_listing_id: business_id,
        };
      }

      const apiEndpoint = isFavorite ? "/remove-favorite" : "/add-favorite";

      const response = await businessListingAxiosInstance({
        method: isFavorite ? "delete" : "post",
        url: apiEndpoint,
        data: requestData,
      });

      toast.success(
        `Business ${isFavorite ? "removed from" : "added to"
        } favorites successfully`
      );

      setIsFavorite(!isFavorite);
    } catch (error) {
      toast.error(
        `Error Have to login for ${isFavorite ? "removing" : "adding"
        } business to favorites`
      );
      console.error(
        `Error Have to login for ${isFavorite ? "removing" : "adding"
        } business to favorites:`,
        error
      );
    }
  };

  const fetchFavData = async () => {
    try {
      const response = await businessListingAxiosInstance.get("/get-favorite");
      setFavoriteList(response.data.data);

      const isBusinessInFavorites = response.data.data.some(
        (favorite) => favorite._id === business_id
      );
      setIsFavorite(isBusinessInFavorites);
    } catch (error) {
      console.error("Error in Getting Favorite Data:", error);
    }
  };

  const settings = {
    dots: false,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const fetchBusinessData = async () => {
    try {
      setIsLoading(true);
      const requestData = {
        listing_id: [business_id],
      };

      const response = await businessListingAxiosInstance.post(
        "/get-businesses",
        requestData
      );
      const data = response.data.metadata;
      const fetchedBusinessData = response.data.data[0];
      const fetchedLocationData = fetchedBusinessData.locations[0];

      const contacts = fetchedBusinessData.contacts || [];
      setContacts(contacts);
      const timing = fetchedBusinessData.timings || [];
      setTimings(timing);
      const services = fetchedBusinessData.services || [];
      setServices(services);
      const tags = fetchedBusinessData.tags || [];
      setTags(tags);
      const faqs = fetchedBusinessData.faqs || [];
      setFaqs(faqs);
      const business_img = fetchedBusinessData.business_images || [];
      setBusinessImages(business_img);

      setBusinessData(fetchedBusinessData);
      setLocationData(fetchedLocationData);
      setContactData(fetchedLocationData.contact);
      setReviewData(fetchedBusinessData.review_stats);
      setListNumber(data.pagination.total);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error in Getting Business Data:", error);
    }
  };

  const fetchReviewsData = async () => {
    try {
      const response = await businessListingAxiosInstance.get(
        `/get-reviews?business_listing_id=${business_id}`
      );
      const fetchedReviewsData = response.data.data;
      setUserReviewData(fetchedReviewsData);
    } catch (error) {
      console.error("Error in Getting Reviews Data:", error);
    }
  };

  useEffect(() => {
    getUserData();
    fetchBusinessData();
    fetchReviewsData();
    fetchFavData();
  }, []);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCall = (number) => {
    window.location.href = `tel:${number}`;
  };

  const handleInquiry = (business) => {
    // Implement your logic for sending an email inquiry
    const email = business.contacts.find(
      (contact) => contact.contact_type === "email"
    )?.value;
    if (email) {
      window.location.href = `mailto:${email}?subject=Inquiry&body=I want to know more about your services.`;
    }
  };

  const handleChat = (number) => {
    // Implement your logic for opening WhatsApp chat
    const whatsappNumber = number;
    if (whatsappNumber) {
      const message = encodeURIComponent("I want to know about your services.");
      window.location.href = `https://wa.me/${whatsappNumber}?text=${message}`;
    }
  };

  const slides = businessImages.map((image, index) => ({
    src: "https://files.fggroup.in/" + image,
    caption: `Image ${index + 1}`,
  }));

  const handleHelpfulClick = async (reviewId) => {
    try {
      const requestData = {
        business_listing_id: business_id,
        review_id: reviewId,
        is_helpful: true,
      };
      const response = await businessListingAxiosInstance.patch(
        "/mark-review-helpful",
        requestData
      );

      fetchReviewsData();
      toast.success("Review marked as helpful successfully");
    } catch (error) {
      console.error("Error marking review as helpful:", error);
      toast.error("Error marking review as helpful");
    }
  };

  const handleReplyClick = (index) => {
    const updatedReplyInputsVisible = [...replyInputsVisible];
    updatedReplyInputsVisible[index] = true;
    setReplyInputsVisible(updatedReplyInputsVisible);
  };

  const handleCancelReply = (index) => {
    const updatedReplyInputsVisible = [...replyInputsVisible];
    updatedReplyInputsVisible[index] = false;
    setReplyInputsVisible(updatedReplyInputsVisible);
    setReplyInputs(new Array(userReviewsData.length).fill(""));
  };

  const handleReplySubmit = async (index, reviewId) => {
    try {
      if (!replyInputs[index].trim()) {
        console.error("Please provide a non-empty reply.");
        return;
      }

      const requestData = {
        business_listing_id: business_id,
        reply_to: reviewId || null,
        comment: replyInputs[index],
      };
      const response = await businessListingAxiosInstance.post(
        "/create-review",
        requestData
      );
      toast.success("Reply submitted successfully");

      const updatedReplyInputsVisible = [...replyInputsVisible];
      updatedReplyInputsVisible[index] = false;
      setReplyInputsVisible(updatedReplyInputsVisible);
      setReplyInputs(new Array(userReviewsData.length).fill(""));
      fetchReviewsData();
    } catch (error) {
      console.error("Error submitting reply:", error);
      toast.error("Error submitting reply");
    }
  };

  const breadcrumbs = [
    <Link key="1" color="inherit" sx={{ textDecoration: "none" }}>
      {locationData.city}
    </Link>,
    <Link key="2" color="inherit" sx={{ textDecoration: "none" }}>
      {businessData.business_name}
    </Link>,
    <Typography key="3" color="text.primary">
      {listNumber} Listing
    </Typography>,
  ];

  const openLightbox = (index) => {
    setSelectedImage(index);
    setLightboxOpen(true);
  };

  const handleShare = async (locationLink) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Share Location",
          text: "Check out this location!",
          url: locationLink,
        });
      } else {
        alert(`Share this location: ${locationLink}`);
      }
    } catch (error) {
      console.error("Error sharing location:", error);
    }
  };

  const handleDetailsShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Share Details",
          text: "Check out This!",
          url: window.location.href,
        });
      } else {
        alert(`Share Details: ${window.location.href}`);
      }
    } catch (error) {
      console.error("Error Sharing Details:", error);
    }
  };

  const handleSubmitReview = async () => {
    try {
      const authData = localStorage.getItem("authorization");
      if (!authData) {
        const confirmResult = await Swal.fire({
          icon: "info",
          title:
            "You need to log in first! click on login Button you see on top Right Side",
          text: "Login to submit a review.",
          showCancelButton: true,
        });
        return;
      }

      if (!review || rating === 0) {
        toast.error("Please provide both review and rating.");
        return;
      }

      const requestData = {
        business_listing_id: business_id,
        comment: review,
        rating,
      };

      const response = await businessListingAxiosInstance.post(
        "/create-review",
        requestData
      );
      // fetchBusinessData();
      // fetchReviewsData();
      toast.success("Review submitted successfully");
      setReview("");
      setRating(0);
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Error submitting review. Please try again.");
    }
  };
  const handleDeleteComment = async (commentId) => {
    // Show confirmation dialog
    const isConfirmed = await Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, nobody can see your review!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    // If user confirms, proceed with deletion
    if (isConfirmed.isConfirmed) {
      try {
        await businessListingAxiosInstance.delete(
          `/delete-review?business_listing_id=${business_id}&review_id=${commentId}`
        );
        toast.success("Review Deleted Successfully");
        fetchReviewsData();
        fetchBusinessData();
      } catch (error) {
        toast.error("Error deleting comment");
      }
    }
  };

  const handleDeleteReply = async (replyId) => {
    // Show confirmation dialog
    const isConfirmed = await Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, nobody can see your reply!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    // If user confirms, proceed with deletion
    if (isConfirmed.isConfirmed) {
      try {
        await businessListingAxiosInstance.delete(
          `/delete-review?business_listing_id=${business_id}&review_id=${replyId}`
        );
        toast.success("Reply Deleted Successfully");
        fetchReviewsData();
        fetchBusinessData();
      } catch (error) {
        toast.error("Error deleting Reply");
      }
    }
  };

  const generateMetaKeywords = (businessData) => {
    // Combine tags and services into a comma-separated string
    const tags = businessData?.tags?.join(", ") || "";
    const services = businessData?.services?.join(", ") || "";

    // Combine tags and services and return as keywords
    return `${tags}, ${services}`;
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
          href="images/favicon.ico"
        />
        {/* Custom CSS */}
        <link href="css/styles.css" rel="stylesheet" />
        {loading && <div className="preloader" />}
        <div id="main-wrapper">
          <Header />
          <div className="clearfix" />
          <section className="featured-wraps gray text-start" style={{ marginTop: '70px' }}>
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="Goodup-ops-bhriol">
                    <div className="Goodup-lkp-flex d-flex align-items-start justify-content-start">
                      <div className="Goodup-lkp-thumb">
                        <img
                          src={`https://files.fggroup.in/${businessData.business_logo}`}
                          className="img-fluid rounded-circle"
                          width={90}
                          alt=""
                        />
                      </div>
                      <div className="Goodup-lkp-caption ps-3">
                        <div>
                          <div className="Goodup-lkp-title">
                            <h1 className="mb-0 ft-bold">
                              {businessData.business_name}
                            </h1>
                          </div>
                          <div className="Goodup-ft-first">
                            <div className="Goodup-rating">
                              <div className="Goodup-rates">
                                {/* {[...Array(5)].map((_, index) => (
                                  <i className="fas fa-star"
                                    key={index}
                                    style={{
                                      color:
                                        index < businessData.review_stats &&
                                        businessData.review_stats.average_rating
                                          ? "#F09000"
                                          : "#ccc",
                                    }}
                                  />
                                ))} */}

                                {Array.from({
                                  length:
                                    businessData.review_stats &&
                                    businessData.review_stats.average_rating,
                                }).map((_, starIndex) => (
                                  <StarIcon
                                    key={starIndex}
                                    sx={{
                                      fontSize: "16px",
                                      color: "#FFAE11",
                                    }}
                                  />
                                ))}
                                {Array.from({
                                  length:
                                    5 - businessData.review_stats &&
                                    businessData.review_stats.average_rating,
                                }).map((_, starIndex) => (
                                  <StarIcon
                                    key={starIndex}
                                    sx={{ fontSize: "16px", color: "#000" }}
                                  />
                                ))}
                              </div>
                            </div>
                            <div className="Goodup-price-range">
                              <span className="ft-medium">
                                {(businessData.review_stats &&
                                  businessData.review_stats.average_rating &&
                                  businessData.review_stats &&
                                  businessData.review_stats.average_rating.toFixed(
                                    1
                                  )) ||
                                  "0"}{" "}
                                Reviews
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ======================= Searchbar Banner ======================== */}
          {/* ============================ Listing Details Start ================================== */}
          <section className="py-5 position-relative text-start">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                  <div className="featured-slick mb-4">
                    <div className="featured-gallery-slide">
                      <Slider {...settings}>
                        {slides.map((slide, index) => (
                          <div
                            key={index}
                            onClick={() => openLightbox(index)}
                            style={{ cursor: "pointer" }}
                          >
                            <div className="mx-2">
                              <img
                                src={slide.src}
                                alt={slide.caption}
                                style={{ width: "100%", borderRadius: "5px" }}
                              />
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                  {/* About The Business */}
                  {businessData?.description && (
                    <div className="d-block">
                      <div className="jbd-01">
                        <div className="jbd-details">
                          <h5 className="ft-bold fs-lg">Description</h5>
                          <div className="d-block mt-3">
                            <p>{businessData?.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="sep-devider" />
                  <div>
                    <div className="d-block mt-3">
                      <div className="list-lioe">
                        <div className="list-lioe-single">
                          <span className="ft-medium text-info">Category</span>
                        </div>
                        <div className="list-lioe-single ms-2 ps-3 seperate">
                          <a
                            href="javascript:void(0);"
                            className="text-dark ft-medium"
                          >
                            {businessData?.business_category?.[0]}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="d-block mt-1">
                      <div className="list-lioe">
                        <div className="list-lioe-single">
                          <span className="ft-medium text-danger">Type</span>
                        </div>
                        <div className="list-lioe-single ms-2 ps-3 seperate">
                          <a
                            href="javascript:void(0);"
                            className="text-dark ft-medium"
                          >
                            {businessData.business_type}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sep-devider" />
                  {/* {timings.length > 0 && (
                    <div className="d-block">
                      <div className="jbd-01">
                        <div className="jbd-details mb-2">
                          <h5 className="ft-bold fs-lg">Timings</h5>
                          <div className="d-block mt-3">
                            <div className="row g-3">
                              <Col md={2} xs={4}>
                                    {timings.map((day, index) => (
                                      <Typography
                                        key={index}
                                        variant="p"
                                        className="mb-2 d-block"
                                        sx={{
                                          fontWeight: "500",
                                          fontSize: "18px",
                                        }}
                                      >
                                        {day.title}
                                      </Typography>
                                    ))}
                              </Col>
                              <Col md={8} xs={8}>
                                    {timings.map((day, index) => (
                                      <Typography
                                        key={index}
                                        variant="p"
                                        className="mb-2 d-block"
                                        sx={{
                                          fontWeight: "500",
                                          fontSize: "18px",
                                        }}
                                      >
                                        {day.timings.length > 0
                                          ? day.timings[0].from_time !==
                                              "00:00" &&
                                            day.timings[0].to_time !== "00:00"
                                            ? `${day.timings[0].from_time} to ${day.timings[0].to_time}`
                                            : "Closed"
                                          : "Closed"}
                                      </Typography>
                                    ))}
                              </Col>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )} */}

                  <div className="d-block">
                    <div className="jbd-01">
                      <div className="jbd-details">
                        <h5 className="ft-bold fs-lg mb-3">Timings</h5>
                        <div className="Goodup-lot-wrap d-block">
                          <div className="row g-4">
                            <div className="col-xl-6 col-lg-6 col-md-12">
                              <table className="table table-borderless">
                                <tbody>
                                  {timings.map((day, index) => (
                                    <tr>
                                      <th scope="row">{day.title}</th>
                                      <td>
                                        {day.timings.length > 0
                                          ? day.timings[0].from_time !==
                                            "00:00" &&
                                            day.timings[0].to_time !== "00:00"
                                            ? `${day.timings[0].from_time} - ${day.timings[0].to_time}`
                                            : "Closed"
                                          : "Closed"}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sep-devider" />
                  {/* Recommended Reviews */}
                  <div className="d-block">
                    <div className="jbd-01">
                      <div className="jbd-details mb-4">
                        <h5 className="ft-bold fs-lg">Recommended Reviews</h5>
                        <div className="reviews-comments-wrap w-100">
                          {userReviewsData.map((review, index) => (
                            <div className="reviews-comments-item">
                              <div className="review-comments-avatar">
                                <img
                                  src={`https://files.fggroup.in/${review.createdBy_user.profile_image}`}
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="reviews-comments-item-text">
                                <h4>
                                  <a href="#">
                                    {review.createdBy_user.user_name}
                                  </a>
                                  <span className="reviews-comments-item-date">
                                    <i className="ti-calendar theme-cl me-1" />
                                    {new Date(review.createdAt).toLocaleDateString()}
                                  </span>
                                </h4>
                                <span className="agd-location">
                                  {review.helpful_count}{" "}
                                  {review.helpful_count === 1
                                    ? "Review"
                                    : "Reviews"}
                                </span>
                                <div className="listing-rating high">
                                  {Array.from({ length: review.rating }).map(
                                    (_, starIndex) => (
                                      <StarIcon
                                        key={starIndex}
                                        sx={{
                                          fontSize: "16px",
                                          color: "#FFAE11",
                                        }}
                                      />
                                    )
                                  )}
                                  {Array.from({
                                    length: 5 - review.rating,
                                  }).map((_, starIndex) => (
                                    <StarIcon
                                      key={starIndex}
                                      sx={{ fontSize: "16px", color: "#000" }}
                                    />
                                  ))}
                                </div>
                                <div className="clearfix" />
                                <p>{review.comment}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sep-devider" />
                  {/* Drop Your Review */}
                  <div className="d-block">
                    <div className="jbd-01">
                      <div className="jbd-details">
                        <h5 className="ft-bold fs-lg">Drop Your Review</h5>
                        <div className="review-form-box form-submit mt-3">
                          <form>
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group mb-3">
                                  <label className="ft-medium small mb-1">
                                    Review
                                  </label>
                                  <textarea
                                    className="form-control rounded ht-140"
                                    placeholder="Review"
                                    defaultValue={""}
                                    value={review}
                                    onChange={(e) => setReview(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group mb-3">
                                  <label className="ft-medium small mb-1">
                                    Select Rating
                                  </label>
                                  <div className="d-flex mb-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <StarIcon
                                        key={star}
                                        sx={{
                                          fontSize: "25px",
                                          color:
                                            rating >= star ? "#FFAE11" : "#000",
                                        }}
                                        onClick={() => handleRatingChange(star)}
                                      />
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                  <button
                                    onClick={handleSubmitReview}
                                    className="btn theme-bg text-light rounded"
                                  >
                                    Submit Review
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sep-devider" />
                  {/* Frequently Asked Questions */}
                  {faqs.length > 0 && (
                    <div className="d-block">
                      <div className="jbd-01">
                        <div className="jbd-details">
                          <h5 className="ft-bold fs-lg">
                            Frequently Asked Questions
                          </h5>
                          <div className="d-block mt-3">
                            <div className="accordion">
                              {faqs.map((faq, index) => (
                                <div className="card" key={index}>
                                  <div
                                    className="card-header"
                                    id={`heading-${index}`}
                                  >
                                    <h5 className="mb-0">
                                      <button className="btn btn-link">
                                        {index + 1}. {faq.question}
                                      </button>
                                    </h5>
                                  </div>
                                  <div>
                                    <div className="card-body">
                                      {faq.answer}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 text-start">
                  <div className="jb-apply-form bg-white rounded py-4 px-4 border mb-4">
                    <h4 className="ft-bold mb-1">Information</h4>
                    <div className="uli-list-info">
                      <ul>
                        <li>
                          <div className="list-uiyt">
                            <div className="list-iobk">
                              <i className="fas fa-globe" />
                            </div>
                            <div className="list-uiyt-capt">
                              <h5>Live Site</h5>
                              {contacts.map(
                                (contact, index) =>
                                  contact.contact_type === "website" &&
                                  isValidWebsite(contact.value) && (
                                    <div className="d-flex align-items-center">
                                      <Link
                                        key={index}
                                        href={contact.value}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        underline="none"
                                        sx={{ cursor: "pointer" }}
                                      >
                                        <p className="text-dark text-underline">
                                          {contact.value}
                                        </p>
                                      </Link>
                                    </div>
                                  )
                              )}
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list-uiyt">
                            <div className="list-iobk">
                              <i className="fas fa-envelope" />
                            </div>
                            <div className="list-uiyt-capt">
                              <h5>Drop a Mail</h5>
                              {contacts.map(
                                (contact, index) =>
                                  contact.contact_type === "email" && (
                                    <p>{contact.value}</p>
                                  )
                              )}
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list-uiyt">
                            <div className="list-iobk">
                              <i className="fas fa-phone" />
                            </div>
                            <div className="list-uiyt-capt">
                              <h5>Call Us</h5>
                              <p>{contactData.value}</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list-uiyt">
                            <div className="list-iobk">
                              <i className="fas fa-map-marker-alt" />
                            </div>
                            <div className="list-uiyt-capt">
                              <h5>Get Directions</h5>
                              <a
                                href={locationData.direction_link}
                                className="text-dark"
                              >
                                <p className="text-underline">
                                  {locationData.address_line_1},{" "}
                                  {locationData.address_line_2},{" "}
                                  {locationData.landmark}, {locationData.city},{" "}
                                  {locationData.state} - {locationData.pin_code}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {tags.length > 0 && (
                    <div className="jb-apply-form bg-white rounded py-4 px-4 border mb-4">
                      <h4 className="ft-bold mb-1">Tags</h4>
                      <div className="row mt-2">
                        {tags.map((tag, index) => (
                          <div
                            className="btn w-auto m-1 px-3 py-2"
                            style={{
                              backgroundColor: "#fff",
                              color: "#000",
                              border: "1.5px solid #ccc",
                              borderRadius: "5px",
                            }}
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {services.length > 0 && (
                    <div className="jb-apply-form bg-white rounded py-4 px-4 border mb-4">
                      <h4 className="ft-bold mb-1">Services</h4>
                      <div className="row mt-2">
                        {services.map((service, index) => (
                          <div
                            className="btn w-auto m-1 px-3 py-2"
                            key={index}
                            style={{
                              backgroundColor: "#fff",
                              color: "#000",
                              border: "1.5px solid #ccc",
                              borderRadius: "5px",
                            }}
                          >
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
          {/* ============================ Listing Details End ================================== */}
          {/* ======================= Related Listings ======================== */}
          <section className="space min text-start">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="sec_title position-relative text-center mb-5">
                    <h6 className="theme-cl mb-0">Related Listing</h6>
                    <h2 className="ft-bold">Other Listing</h2>
                  </div>
                </div>
              </div>
              {/* row */}
              <div className="row justify-content-center">
                {allBusinessData.slice(0, 4).map((business, index) => {
                  return (
                    <div
                      className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
                      key={index}
                    >
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
                                <a
                                  href="half-map-search-1.html"
                                  className="cats-1"
                                >
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
                                At vero eos et accusamus et iusto odio
                                dignissimos ducimus
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
              </div>
              {/* row */}
            </div>
          </section>
          {/* ======================= Related Listings ======================== */}
          {/* ======================= Newsletter Start ============================ */}
          <section
            className="space bg-cover text-start"
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
          <Footer />
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
      </>
    </div>
  );
};

export default ListingView;
