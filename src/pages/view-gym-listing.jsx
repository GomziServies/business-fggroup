import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import "../assets/css/style.css";
import Header from "../components/Header";
import WhatsappBtnMain from "../components/WhatsappBtnMain";
import Slider from "react-slick";
import Footer from "../components/Footer";
import SimpleHeader from "../components/SimpleHeader";
import { businessListingAxiosInstance } from "../js/api";
import { useEffect, useState } from "react";

const ViewGymListing = () => {
  const images = [
    "/images/revolutionizing-gyms-1.webp",
    "/images/revolutionizing-gyms-2.webp",
    "/images/revolutionizing-gyms-3.webp",
    "/images/revolutionizing-gyms-4.webp",
  ];
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

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-next`}
        style={{ ...style }}
        onClick={onClick}
      >
        &#8250;
      </div>
    );
  };

  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
        <title>Gym Listing</title>
        <meta
          name="description"
          content="Discover top business listings and services. Add your business, connect with customers, and explore opportunities to grow your brand on our platform!"
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
              {images.map((image, index) => (
                <div className="item" key={index}>
                  <img src={image} alt={`Slide ${index}`} />
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
                  <div className="jbd-01 px-4 py-4">
                    <div className="jbd-details">
                      <h5 className="ft-bold fs-lg text-start">
                        About the Business
                      </h5>

                      <div className="d-block mt-3 text-start">
                        <p>
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit, sed quia non
                          numquam eius modi tempora incidunt ut labore et dolore
                          magnam aliquam quaerat voluptatem. Ut enim ad minima
                          veniam, quis nostrum exercitationem ullam corporis
                          suscipit laboriosam, nisi ut aliquid ex ea commodi
                          consequatur
                        </p>
                        <p className="p-0 m-0 text-start">
                          Temporibus autem quibusdam et aut officiis debitis aut
                          rerum necessitatibus saepe eveniet ut et voluptates
                          repudiandae sint et molestiae non recusandae. Itaque
                          earum rerum hic tenetur
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
                              href="listing-search-v1.html"
                              className="text-dark fs-md"
                            >
                              Incredible Pizza - San Antonio’s
                              <span className="verified-badge">
                                <i className="fas fa-check-circle"></i>
                              </span>
                            </a>
                          </h4>
                          <div className="Goodup-ft-first">
                            <div className="Goodup-rating">
                              <div className="Goodup-rates">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                            </div>
                            <div className="Goodup-price-range">
                              <span className="small ft-medium">
                                34 Reviews
                              </span>
                              <div className="d-inline ms-2">
                                <span className="active">
                                  <i className="fas fa-dollar-sign"></i>
                                </span>
                                <span className="active">
                                  <i className="fas fa-dollar-sign"></i>
                                </span>
                                <span className="active">
                                  <i className="fas fa-dollar-sign"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="vrt-list-features mt-2 mb-2">
                            <ul>
                              <li>
                                <a href="javascript:void(0);">Pizza</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">Buffets</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">Cafes</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">Mexican</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">Seafood</a>
                              </li>
                            </ul>
                          </div>
                          <div className="vrt-list-sts">
                            <p className="vrt-qgunke">
                              <span className="ft-bold d14ixh">Closed</span>{" "}
                              until 5:00 PM
                            </p>
                          </div>

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

                          <div className="vrt-list-amenties">
                            <ul>
                              <li>
                                <div className="vrt-amens no">
                                  <span>Outdoor Dining</span>
                                </div>
                              </li>
                              <li>
                                <div className="vrt-amens yes">
                                  <span>Pets Allow</span>
                                </div>
                              </li>
                              <li>
                                <div className="vrt-amens yes">
                                  <span>Delivery</span>
                                </div>
                              </li>
                              <li>
                                <div className="vrt-amens no">
                                  <span>Parking</span>
                                </div>
                              </li>
                              <li>
                                <div className="vrt-amens yes">
                                  <span>Takeout</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded mb-4">
                  <div className="jbd-01 px-4 py-4">
                    <div className="jbd-details">
                      <h5 className="ft-bold fs-lg">Amenities and More</h5>

                      <div className="Goodup-all-features-list mt-3">
                        <ul>
                          <li>
                            <div className="Goodup-afl-pace">
                              <img
                                src="/images/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>AC</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace">
                              <img
                                src="/images/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>Free Wi-Fi</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace">
                              <img
                                src="/images/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>TV</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace">
                              <img
                                src="/images/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>Geyser</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace">
                              <img
                                src="/images/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>Power Backup</span>
                            </div>
                          </li>
                          <li>
                            <div className="Goodup-afl-pace">
                              <img
                                src="/images/verify.svg"
                                className="img-fluid"
                                alt=""
                              />
                              <span>Elevator</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded mb-4">
                  <div className="jbd-01 px-4 py-4">
                    <div className="jbd-details mb-4">
                      <h5 className="ft-bold fs-lg">Recommended Reviews</h5>
                      <div className="reviews-comments-wrap">
                        <div className="reviews-comments-item">
                          <div className="review-comments-avatar">
                            <img
                              src="/images/video-review-2.webp"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="reviews-comments-item-text">
                            <h4>
                              <a href="#">Kayla E. Claxton</a>
                              <span className="reviews-comments-item-date">
                                <i className="ti-calendar theme-cl me-1"></i>27
                                Oct 2019
                              </span>
                            </h4>
                            <span className="agd-location">
                              <i className="lni lni-map-marker me-1"></i>San
                              Francisco, USA
                            </span>
                            <div className="listing-rating high">
                              <i className="fas fa-star active"></i>
                              <i className="fas fa-star active"></i>
                              <i className="fas fa-star active"></i>
                              <i className="fas fa-star active"></i>
                              <i className="fas fa-star active"></i>
                            </div>
                            <div className="clearfix"></div>
                            <p>
                              " Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non
                              proident. "
                            </p>
                            <div className="pull-left reviews-reaction">
                              <a href="#" className="comment-like active">
                                <i className="ti-thumb-up"></i> 12
                              </a>
                              <a href="#" className="comment-dislike active">
                                <i className="ti-thumb-down"></i> 1
                              </a>
                              <a href="#" className="comment-love active">
                                <i className="ti-heart"></i> 07
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="reviews-comments-item">
                          <div className="review-comments-avatar">
                            <img
                              src="/images/video-review-3.webp"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="reviews-comments-item-text">
                            <h4>
                              <a href="#">Amy M. Taylor</a>
                              <span className="reviews-comments-item-date">
                                <i className="ti-calendar theme-cl me-1"></i>2
                                Nov May 2019
                              </span>
                            </h4>
                            <span className="agd-location">
                              <i className="lni lni-map-marker me-1"></i>
                              Liverpool, London UK
                            </span>
                            <div className="listing-rating mid">
                              <i className="fas fa-star active"></i>
                              <i className="fas fa-star active"></i>
                              <i className="fas fa-star active"></i>
                              <i className="fas fa-star active"></i>
                              <i className="fas fa-star"></i>
                            </div>
                            <div className="clearfix"></div>
                            <p>
                              " Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non
                              proident. "
                            </p>
                            <div className="pull-left reviews-reaction">
                              <a href="#" className="comment-like active">
                                <i className="ti-thumb-up"></i> 12
                              </a>
                              <a href="#" className="comment-dislike active">
                                <i className="ti-thumb-down"></i> 1
                              </a>
                              <a href="#" className="comment-love active">
                                <i className="ti-heart"></i> 07
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="reviews-comments-item">
                          <div className="review-comments-avatar">
                            <img
                              src="/images/video-review-2.webp"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="reviews-comments-item-text">
                            <h4>
                              <a href="#">Susan C. Daggett</a>
                              <span className="reviews-comments-item-date">
                                <i className="ti-calendar theme-cl me-1"></i>10
                                Nov 2019
                              </span>
                            </h4>
                            <span className="agd-location">
                              <i className="lni lni-map-marker me-1"></i>Denver,
                              United State
                            </span>
                            <div className="listing-rating good">
                              <i className="fas fa-star active"></i>
                              <i className="fas fa-star active"></i>
                              <i className="fas fa-star active"></i>
                              <i className="fas fa-star active"></i>
                              <i className="fas fa-star"></i>
                            </div>
                            <div className="clearfix"></div>
                            <p>
                              " Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non
                              proident. "
                            </p>
                            <div className="pull-left reviews-reaction">
                              <a href="#" className="comment-like active">
                                <i className="ti-thumb-up"></i> 12
                              </a>
                              <a href="#" className="comment-dislike active">
                                <i className="ti-thumb-down"></i> 1
                              </a>
                              <a href="#" className="comment-love active">
                                <i className="ti-heart"></i> 07
                              </a>
                            </div>
                          </div>
                        </div>

                        <ul className="pagination">
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="#"
                              aria-label="Previous"
                            >
                              <span className="fas fa-arrow-circle-right"></span>
                              <span className="sr-only">Previous</span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              ...
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              18
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                              <span className="fas fa-arrow-circle-right"></span>
                              <span className="sr-only">Next</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-block mb-2">
                  <div className="jbd-01 py-2">
                    <div className="jbd-details">
                      <h5 className="ft-bold fs-lg">
                        Frequently Asked Questions
                      </h5>

                      <div className="d-block mt-3">
                        <div id="accordion2" className="accordion">
                          <div className="card">
                            <div className="card-header" id="h7">
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#ord7"
                                  aria-expanded="true"
                                  aria-controls="ord7"
                                >
                                  Can I get GoodUP listing for free?
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
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="h8">
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link collapsed"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#ord8"
                                  aria-expanded="false"
                                  aria-controls="ord8"
                                >
                                  How to Permanently Delete Files From Windows?
                                </button>
                              </h5>
                            </div>
                            <div
                              id="ord8"
                              className="collapse"
                              aria-labelledby="h8"
                              data-parent="#accordion2"
                            >
                              <div className="card-body">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="h9">
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link collapsed"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#ord9"
                                  aria-expanded="false"
                                  aria-controls="ord9"
                                >
                                  Can I get GoodUP listing for free?
                                </button>
                              </h5>
                            </div>
                            <div
                              id="ord9"
                              className="collapse"
                              aria-labelledby="h9"
                              data-parent="#accordion2"
                            >
                              <div className="card-body">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="h4">
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link collapsed"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#ord4"
                                  aria-expanded="false"
                                  aria-controls="ord4"
                                >
                                  For GoodUp which lisence is better for
                                  business purpose?
                                </button>
                              </h5>
                            </div>

                            <div
                              id="ord4"
                              className="collapse"
                              aria-labelledby="h4"
                              data-parent="#accordion2"
                            >
                              <div className="card-body">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
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
                      <h5 className="ft-bold fs-lg">Location &amp; Hours</h5>
                      <div className="Goodup-lot-wrap d-block">
                        <div className="row g-4">
                          <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="list-map-lot">
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0148908503734!2d80.97350361499701!3d26.871267983145383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd9a9f6d1727%3A0xb87eabf63f7e4cee!2sCafe%20Repertwahr!5e0!3m2!1sen!2sin!4v1649059491407!5m2!1sen!2sin"
                                width="100%"
                                height="250"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                              ></iframe>
                            </div>
                            <div className="list-map-capt">
                              <div className="lio-pact">
                                <span className="ft-medium text-info">
                                  2919 N Flores St
                                </span>
                              </div>
                              <div className="lio-pact">
                                <span className="hkio-oilp ft-bold">
                                  San Antonio, TX 78212
                                </span>
                              </div>
                              <div className="lio-pact">
                                <p className="ft-medium">Alta Vista</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-12">
                            <table className="table table-borderless">
                              <tbody>
                                <tr>
                                  <th scope="row">Mon</th>
                                  <td>5:00 PM - 8:30 PM</td>
                                  <td className="text-success">Open now</td>
                                </tr>
                                <tr>
                                  <td>Tue</td>
                                  <td>5:00 PM - 8:30 PM</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>Wed</td>
                                  <td>5:00 PM - 8:30 PM</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>Thu</td>
                                  <td>5:00 PM - 8:30 PM</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>Fri</td>
                                  <td>5:00 PM - 6:30 PM</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>Sat</td>
                                  <td>Closed</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>Sun</td>
                                  <td>Closed</td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 price-section">
                <div className="jb-apply-form bg-white rounded py-4 px-4 mb-4">
                  <button className="btn btn-md rounded theme-bg text-light ft-medium fs-sm full-width">
                    Login now to get upto 15% lower prices
                  </button>
                  <div className="price-details mt-3 text-start">
                    <ul>
                      <li>
                        ₹1016 <span className="original-price">₹3969</span>{" "}
                        <span className="discount">74% off</span>
                      </li>
                      <li>+ taxes & fees: ₹221</li>
                    </ul>
                  </div>
                  <div className="coupon-details mt-3">
                    <h5>Classic</h5>
                    <p className="text-green">WELCOME75 coupon applied</p>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                    <h6 className="ft-medium">Price &amp; Taxes</h6>
                    <div className="_adv_features">
                      <ul>
                        <li>
                          I Night<span>$170</span>
                        </li>
                        <li>
                          Discount 25$<span>-$210</span>
                        </li>
                        <li>
                          Service Fee<span>$13</span>
                        </li>
                        <li>
                          Breakfast Per Adult<span>$24</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                    <div className="Goodup-boo-space-foot mb-3">
                      <span className="Goodup-boo-space-left">
                        Total Payment
                      </span>
                      <h4 className="ft-bold theme-cl">$218</h4>
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
                  <div className="cancellation-policy mt-3">
                    <h5>Cancellation Policy</h5>
                    <p>Follow safety measures advised at the hotel</p>
                    <p>By proceeding, you agree to our Guest Policies.</p>
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
