import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import "../assets/css/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const StandardList = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);
    return (
        <div>
            <Helmet>
                <title>FG Group Business Listing</title>
                <meta name="description" content="Your meta description" />
            </Helmet>
            <>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Goodup - Business Directory &amp; Listing HTML Template</title>
                <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png" />
                {loading && <div className="preloader" />}
                <div id="main-wrapper">
                    <Header />
                    <div className="clearfix" />
                    <section className="page-title gray text-start">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="breadcrumbs-wrap">
                                        <h2 className="mb-0 ft-medium">
                                            List of Advance Features and Support with Goodup
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="text-start">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                    <div className="article_detail_wrapss single_article_wrap format-standard">
                                        <div className="article_body_wrap">
                                            <div className="article_featured_image">
                                                <img className="img-fluid" src="images/standard-list.webp" alt="" />
                                            </div>
                                            <h2 className="post-title">
                                                List of Advance Features and Support with Goodup
                                            </h2>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                                irure dolor in reprehenderit in voluptate velit esse cillum
                                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                cupidatat non proident, sunt in culpa qui officia deserunt
                                                mollit anim id est laborum. Sed ut perspiciatis unde omnis
                                                iste natus error sit voluptatem accusantium doloremque
                                                laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                                inventore veritatis et quasi architecto beatae vitae dicta
                                                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                                                aspernatur aut odit aut fugit, sed quia consequuntur magni
                                                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                                                quisquam est, qui dolorem. <br />
                                                <br /> Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                                sint occaecat cupidatat non proident, sunt in culpa qui
                                                officia deserunt mollit anim id est laborum. Sed ut
                                                perspiciatis unde omnis iste natus error sit voluptatem
                                                accusantium doloremque laudantium, totam rem aperiam, eaque
                                                ipsa quae ab illo inventore veritatis et quasi architecto
                                                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                                consequuntur magni dolores eos qui ratione voluptatem.
                                            </p>
                                            <blockquote>
                                                <span className="icon">
                                                    <i className="fas fa-quote-left" />
                                                </span>
                                                <p className="text">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tem ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud ullamco laboris nisi ut
                                                    aliquip ex ea commodo onsequat.
                                                </p>
                                                <h5 className="name">- Litha K. Mortin</h5>
                                            </blockquote>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                                irure dolor in reprehenderit in voluptate velit esse cillum
                                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                cupidatat non proident, sunt in culpa qui officia deserunt
                                                mollit anim id est laborum. Sed ut perspiciatis unde omnis
                                                iste natus error sit voluptatem accusantium doloremque
                                                laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                                inventore veritatis et quasi architecto beatae vitae dicta
                                                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                                                aspernatur aut odit aut fugit, sed quia consequuntur magni
                                                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                                                quisquam est, qui dolorem. <br />
                                                <br />
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                occaecat cupidatat non proident, sunt in culpa qui officia
                                                deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                                                omnis iste natus error sit voluptatem accusantium doloremque
                                                laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                                inventore veritatis et quasi architecto beatae vitae dicta
                                                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                                                aspernatur aut odit aut fugit, sed quia consequuntur magni
                                                dolores eos qui ratione voluptatem.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                                    <div className="single_widgets widget_thumb_post">
                                        <h4 className="title mb-3">Trending Posts</h4>
                                        <ul>
                                            <li>
                                                <span className="left">
                                                    <img src="images/b-1.webp" alt="" className="" />
                                                </span>
                                                <span className="right">
                                                    <a className="feed-title" href="#">
                                                        Top Hotels in California
                                                    </a>
                                                    <span className="post-date">
                                                        <i className="ti-calendar" />
                                                        10 Min ago
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="left">
                                                    <img src="images/b-2.webp" alt="" className="" />
                                                </span>
                                                <span className="right">
                                                    <a className="feed-title" href="#">
                                                        How to get top services in your town?
                                                    </a>
                                                    <span className="post-date">
                                                        <i className="ti-calendar" />2 Hours ago
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="left">
                                                    <img src="images/b-3.webp" alt="" className="" />
                                                </span>
                                                <span className="right">
                                                    <a className="feed-title" href="#">
                                                        How to connect laptop with your iphone?
                                                    </a>
                                                    <span className="post-date">
                                                        <i className="ti-calendar" />4 Hours ago
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="left">
                                                    <img src="images/b-4.webp" alt="" className="" />
                                                </span>
                                                <span className="right">
                                                    <a className="feed-title" href="#">
                                                        Search best cafe in your town and city
                                                    </a>
                                                    <span className="post-date">
                                                        <i className="ti-calendar" />7 Hours ago
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="left">
                                                    <img src="images/b-5.webp" alt="" className="" />
                                                </span>
                                                <span className="right">
                                                    <a className="feed-title" href="#">
                                                        How to photo shoot with local iphone aras
                                                    </a>
                                                    <span className="post-date">
                                                        <i className="ti-calendar" />3 Days ago
                                                    </span>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="single_widgets widget_category">
                                        <h4 className="title mb-3">Categories</h4>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    Lifestyle <span>09</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Travel <span>12</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Fashion <span>19</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Branding <span>17</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Music <span>10</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="space bg-cover text-start" style={{ background: "rgb(3, 52, 59) url(images/landing-bg.png) no-repeat" }}>
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
                </div>
            </>

        </div>
    );
};

export default StandardList;
