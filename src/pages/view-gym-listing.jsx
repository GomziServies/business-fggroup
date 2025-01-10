import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import "../assets/css/style.css";
import WhatsappBtnMain from "../components/WhatsappBtnMain";
import Slider from "react-slick";
import Footer from "../components/Footer";
import SimpleHeader from "../components/SimpleHeader";
import { businessListingAxiosInstance } from "../js/api";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import validator from "validator";
import User_img from "../assets/user-profile.png";

const ViewGymListing = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const business_id = searchParams.get("business_id");
  const [businessData, setBusinessData] = useState([]);
  // const [listNumber, setListNumber] = useState("");
  // const [lightboxOpen, setLightboxOpen] = useState(false);
  // const [selectedImage, setSelectedImage] = useState(null);
  const [locationData, setLocationData] = useState([]);
  const [contactData, setContactData] = useState([]);
  // const [reviewData, setReviewData] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [timings, setTimings] = useState([]);
  const [amount, setAmount] = useState([]);
  const [services, setServices] = useState([]);
  const [tags, setTags] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [businessImages, setBusinessImages] = useState([]);
  const [userReviewsData, setUserReviewData] = useState([]);
  // const [isFavorite, setIsFavorite] = useState(false);
  // const [favoriteList, setFavoriteList] = useState([]);
  // const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [allBusinessData, setAllBusinessData] = useState([]);
  const images = [
    "/images/revolutionizing-gyms-1.webp",
    "/images/revolutionizing-gyms-2.webp",
    "/images/revolutionizing-gyms-3.webp",
    "/images/revolutionizing-gyms-4.webp",
  ];

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
      const amount = fetchedBusinessData.amount || [];
      setAmount(amount);
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
      // setReviewData(fetchedBusinessData.review_stats);
      // setListNumber(data.pagination.total);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error in Getting Business Data:", error);
    }
  };

  const isValidWebsite = (website) => {
    return validator.isURL(website, { require_protocol: true });
  };

  const slides = businessImages.map((image, index) => ({
    src: "https://files.fggroup.in/" + image,
    caption: `Image ${index + 1}`,
  }));

  const openLightbox = (index) => {
    // setSelectedImage(index);
    // setLightboxOpen(true);
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
    fetchBusinessData();
    fetchReviewsData();
  }, []);

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-prev`}
        style={{ ...style }}
        onClick={onClick}
      >
        &#8249;
      </div>
    );
  };

  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>View Gym Listings - Find Top Fitness Centers Near You</title>
        <meta
          name="description"
          content="Explore detailed gym listings to discover fitness centers, programs, and amenities near you. Find the perfect gym to meet your fitness goals today!"
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
        <SimpleHeader />
        <section
          className="view-gym-listing text-start"
          style={{ marginTop: "70px" }}
        >
          <div className="slider-container">
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <div
                  key={index}
                  onClick={() => openLightbox(index)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="">
                    <img
                      src={slide.src}
                      alt={slide.caption}
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
        <section className="gray py-5 position-relative text-start">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                <div className="bg-white rounded mb-4">
                  <div className="grouping-listings-single">
                    <div className="vrt-list-wrap">
                      <div className="vrt-list-wrap-head">
                        <div className="vrt-list-thumb">
                          <div className="vrt-list-thumb-figure">
                            <img
                              src="/images/standard-list.webp"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="vrt-list-content">
                          <h4 className="mb-0 ft-medium">
                            <a
                              href="#"
                              className="text-dark fs-md"
                            >
                              {businessData.business_name}
                              <span className="verified-badge">
                                <i className="fas fa-check-circle"></i>
                              </span>
                            </a>
                          </h4>
                          <div className="Goodup-ft-first">
                            <div className="Goodup-rating">
                              <div className="Goodup-rates">
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
                              <span className="small ft-medium">
                                {(businessData.review_stats &&
                                  businessData.review_stats.average_rating &&
                                  businessData.review_stats &&
                                  businessData.review_stats.average_rating.toFixed(
                                    1
                                  )) ||
                                  "0"}{" "} Reviews
                              </span>
                            </div>
                          </div>
                          {tags.length > 0 && (
                            <div className="vrt-list-features mt-2 mb-2">
                              <ul>
                                {tags.map((tags, index) => (
                                  <li>
                                    <a key={index} className="text-danger" href="javascript:void(0);">{tags}</a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          <div className="vrt-list-desc">
                            <p className="vrt-qgunke">
                              Great service and great food. We asked for a
                              romantic table and they put us in a corner section
                              at a candle lit table…
                              <span className="ft-bold">
                                <a
                                  href="javascript:void(0);"
                                  className="d14ixh"
                                >
                                  more
                                </a>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="jb-apply-form bg-white rounded py-4 px-4 mb-4 d-md-none d-block">
                        <div className="coupon-details mt-3">
                          <h5>Price &amp; Taxes</h5>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                          <div className="_adv_features">
                            <ul>
                              <li>
                                Amount<span>₹ {businessData.amount?.paid_amount}</span>
                              </li>
                              <li>
                                Discount<span>- ₹ {businessData.amount?.discount_amount || '0'}</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                          <div className="Goodup-boo-space-foot mb-3">
                            <span className="Goodup-boo-space-left">
                              Total Payment
                            </span>
                            <h4 className="ft-bold theme-cl">₹ {businessData.amount?.paid_amount - businessData.amount?.discount_amount}</h4>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <a
                            href="#"
                            className="btn text-light rounded full-width theme-bg"
                          >
                            Book It Now
                          </a>
                        </div>
                      </div>
                      <div className="bg-white rounded d-md-none d-block">
                        <div className="jbd-01 px-4 py-2">
                          <div className="jbd-details mb-2">
                            <div className="Goodup-lot-wrap d-block">
                              <div className="row g-4">
                                <div className="col-12">
                                  <h5 className="ft-bold fs-lg">Live Site</h5>
                                  <div className="list-map-capt">
                                    <div className="lio-pact mt-3">
                                      {contacts.map(
                                        (contact, index) =>
                                          contact.contact_type === "website" &&
                                          isValidWebsite(contact.value) && (
                                            <a
                                              href={locationData.direction_link}
                                              className="text-dark"
                                              style={{ fontSize: '16px' }}
                                            >
                                              <span className="hkio-oilp ft-bold">
                                                {contact.value}
                                              </span>
                                            </a>
                                          )
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded d-md-none d-block">
                        <div className="jbd-01 px-4 py-2">
                          <div className="jbd-details mb-2">
                            <div className="Goodup-lot-wrap d-block">
                              <div className="row g-4">
                                <div className="col-12">
                                  <h5 className="ft-bold fs-lg">Location</h5>
                                  <div className="list-map-capt">
                                    <div className="lio-pact mt-3">
                                      <span className="hkio-oilp ft-bold" style={{ fontSize: '16px' }}>
                                        {contactData.value}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded d-md-none d-block">
                        <div className="jbd-01 px-4 py-2">
                          <div className="jbd-details mb-2">
                            <div className="Goodup-lot-wrap d-block">
                              <div className="row g-4">
                                <div className="col-12">
                                  <h5 className="ft-bold fs-lg">Location</h5>
                                  <div className="list-map-capt">
                                    <div className="lio-pact mt-3">
                                      <a
                                        href={locationData.direction_link}
                                        className="text-dark"
                                        style={{ fontSize: '16px' }}
                                      >
                                        <span className="hkio-oilp ft-bold">
                                          {locationData.address_line_1},{" "}
                                          {locationData.address_line_2},{" "}
                                          {locationData.landmark}, {locationData.city},{" "}
                                          {locationData.state} - {locationData.pin_code}
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded d-md-none d-block">
                        <div className="jbd-01 px-4 py-2">
                          <div className="jbd-details mb-4">
                            <div className="Goodup-lot-wrap d-block">
                              <div className="row g-4">
                                <div className="col-12">
                                  <h5 className="ft-bold fs-lg">Drop a Mail</h5>
                                  <div className="list-map-capt">
                                    <div className="lio-pact mt-3">
                                      {contacts.map(
                                        (contact, index) =>
                                          contact.contact_type === "email" && (
                                            <span className="hkio-oilp ft-bold" style={{ fontSize: '16px' }}>
                                              {contact.value}
                                            </span>
                                          )
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
                  </div>
                </div>
                <div className="bg-white rounded mb-4">
                  <div className="jbd-01 px-4 py-4">
                    {businessData?.description && (
                      <div className="jbd-details">
                        <h5 className="ft-bold fs-lg text-start">
                          About the Business
                        </h5>
                        <div className="d-block mt-3 text-start">
                          <p>
                            {businessData?.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="bg-white rounded mb-4">
                  <div className="jbd-01 px-4 py-4">
                    <div className="jbd-details">
                      <h5 className="ft-bold fs-lg">Amenities and More</h5>
                      {services.length > 0 && (
                        <div className="Goodup-all-features-list mt-3">
                          <ul>
                            {services.map((services, index) => (
                              <li>
                                <div className="Goodup-afl-pace">
                                  <img
                                    src="/images/verify.svg"
                                    className="img-fluid"
                                    alt=""
                                  />
                                  <span>{services}</span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded mb-4">
                  <div className="jbd-01 px-4 py-4">
                    <div className="jbd-details mb-4">
                      <div className="Goodup-lot-wrap d-block">
                        <div className="row g-4">
                          <div className="col-12">
                            <h5 className="ft-bold fs-lg">Working Hours</h5>
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
                <div className="bg-white rounded mb-4">
                  <div className="jbd-01 px-4 py-4">
                    <div className="jbd-details mb-4">
                      <h5 className="ft-bold fs-lg">Recommended Reviews</h5>
                      <div className="reviews-comments-wrap w-100">
                        {userReviewsData.map((review, index) => (
                          <div className="reviews-comments-item">
                            <div className="review-comments-avatar">
                              <img
                                src={`https://files.fggroup.in/${review.createdBy_user.profile_image}`}
                                className="img-fluid"
                                onError={(e) => {
                                  e.target.src = User_img;
                                }}
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
                                  {new Date(
                                    review.createdAt
                                  ).toLocaleDateString()}
                                </span>
                              </h4>
                              {/* <span className="agd-location">
                                  {review.helpful_count}{" "}
                                  {review.helpful_count === 1
                                    ? "Review"
                                    : "Reviews"}
                                </span> */}
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
                        {userReviewsData?.length === 0 && (
                          <h5>No Review Found</h5>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-block mb-2">
                  {faqs.length > 0 && (
                    <div className="jbd-01 py-2">
                      <div className="jbd-details">
                        <h5 className="ft-bold fs-lg">
                          Frequently Asked Questions
                        </h5>
                        <div className="d-block mt-3">
                          {faqs.map((faq, index) => (
                            <div id="accordion2" className="accordion">
                              <div className="card">
                                <div className="card-header" id={`heading-${index}`}>
                                  <h5 className="mb-0">
                                    <button
                                      className="btn btn-link"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#ord7"
                                      aria-expanded="true"
                                      aria-controls="ord7"
                                    >
                                      {index + 1}. {faq.question}
                                    </button>
                                  </h5>
                                </div>
                                <div
                                  id="ord7"
                                  className="collapse show"
                                  aria-labelledby="h7"
                                  data-parent="#accordion2"
                                >
                                  <div className="card-body">
                                    {faq.answer}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 price-section d-md-block d-none">
                <div className="jb-apply-form bg-white rounded py-4 px-4 mb-4">
                  <div className="coupon-details mt-3">
                    <h5>Price &amp; Taxes</h5>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                    <div className="_adv_features">
                      <ul>
                        <li>
                          Amount<span>₹ {businessData.amount?.paid_amount}</span>
                        </li>
                        <li>
                          Discount<span>- ₹ {businessData.amount?.discount_amount || '0'}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                    <div className="Goodup-boo-space-foot mb-3">
                      <span className="Goodup-boo-space-left">
                        Total Payment
                      </span>
                      <h4 className="ft-bold theme-cl">₹ {businessData.amount?.paid_amount - businessData.amount?.discount_amount}</h4>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <a
                      href="#"
                      className="btn text-light rounded full-width theme-bg"
                    >
                      Book It Now
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded mb-4">
                  <div className="jbd-01 px-4 py-4">
                    <div className="jbd-details mb-4">
                      <div className="Goodup-lot-wrap d-block">
                        <div className="row g-4">
                          <div className="col-12">
                            <h5 className="ft-bold fs-lg">Live Site</h5>
                            <div className="list-map-capt">
                              <div className="lio-pact mt-3">
                                {contacts.map(
                                  (contact, index) =>
                                    contact.contact_type === "website" &&
                                    isValidWebsite(contact.value) && (
                                      <a
                                        href={locationData.direction_link}
                                        className="text-dark"
                                        style={{ fontSize: '16px' }}
                                      >
                                        <span className="hkio-oilp ft-bold">
                                          {contact.value}
                                        </span>
                                      </a>
                                    )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded mb-4">
                  <div className="jbd-01 px-4 py-4">
                    <div className="jbd-details mb-4">
                      <div className="Goodup-lot-wrap d-block">
                        <div className="row g-4">
                          <div className="col-12">
                            <h5 className="ft-bold fs-lg">Location</h5>
                            <div className="list-map-capt">
                              <div className="lio-pact mt-3">
                                <span className="hkio-oilp ft-bold" style={{ fontSize: '16px' }}>
                                  {contactData.value}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded mb-4">
                  <div className="jbd-01 px-4 py-4">
                    <div className="jbd-details mb-4">
                      <div className="Goodup-lot-wrap d-block">
                        <div className="row g-4">
                          <div className="col-12">
                            <h5 className="ft-bold fs-lg">Location</h5>
                            <div className="list-map-capt">
                              <div className="lio-pact mt-3">
                                <a
                                  href={locationData.direction_link}
                                  className="text-dark"
                                  style={{ fontSize: '16px' }}
                                >
                                  <span className="hkio-oilp ft-bold">
                                    {locationData.address_line_1},{" "}
                                    {locationData.address_line_2},{" "}
                                    {locationData.landmark}, {locationData.city},{" "}
                                    {locationData.state} - {locationData.pin_code}
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded mb-4">
                  <div className="jbd-01 px-4 py-4">
                    <div className="jbd-details mb-4">
                      <div className="Goodup-lot-wrap d-block">
                        <div className="row g-4">
                          <div className="col-12">
                            <h5 className="ft-bold fs-lg">Drop a Mail</h5>
                            <div className="list-map-capt">
                              <div className="lio-pact mt-3">
                                {contacts.map(
                                  (contact, index) =>
                                    contact.contact_type === "email" && (
                                      <span className="hkio-oilp ft-bold" style={{ fontSize: '16px' }}>
                                        {contact.value}
                                      </span>
                                    )
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
            </div>
          </div>
        </section>
        <Footer />
      </>
    </div>
  );
};

export default ViewGymListing;
