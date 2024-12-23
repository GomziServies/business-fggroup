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
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Goodup - Business Directory &amp; Listing HTML Template</title>
                <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png" />
            </Helmet>
            <>
                {loading && <div className="preloader" />}
                <div id="main-wrapper">
                    <Header />
                    <div className="clearfix" />
                    <section className="page-title gray text-start" style={{ marginTop: '70px' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="breadcrumbs-wrap">
                                        <h2 className="mb-0 ft-medium">
                                            Standard Gym
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="text-start">
                        <div className="container">
                            <div className="row">
                                <div className="col"></div>
                                <div className="col-md-10 col-12">
                                    <div className="article_detail_wrapss single_article_wrap format-standard">
                                        <div className="article_body_wrap">
                                            <div className="article_featured_image">
                                                <img className="img-fluid" src="images/affordable-list.webp" alt="" />
                                            </div>
                                            <h2 className="post-title">
                                                Standard Gym
                                            </h2>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Space Requirement :- </b> Moderate facilities spanning 3,000 to 8,000 sq. ft., providing enough space to include multiple fitness zones, equipment areas, and member relaxation spaces, ensuring a balanced experience between functionality and comfort.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Reception Area :- </b> A thoughtfully organized and spacious reception area that exudes professionalism. This includes ample seating for waiting members or visitors, a dedicated desk for inquiries, and decor that reflects the gym's mid-tier branding.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Strength Equipment :- </b> Includes 8-10 machines covering various muscle groups and free weights ranging from 3-40 kg. This selection caters to intermediate fitness enthusiasts and provides enough diversity to support progressive strength training and muscle toning.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Cardio Equipment :- </b> Features 5-6 treadmills or cycles, with an assortment of moderate-quality machines. This setup caters to varied cardio routines and supports moderate member traffic while ensuring a comfortable workout experience.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Miscellaneous Equipment :- </b> Offers a wider range of equipment including 10-20 mats, several sticks, and 3-4 medicine balls. This variety supports more dynamic workouts such as aerobics and group fitness activities.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Additional Facilities :- </b> Includes enhanced facilities such as a steam room and a group fitness area, providing members with additional relaxation and fitness options. These features cater to a more diverse set of needs beyond basic workouts.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Dietitian Services :- </b> Basic dietary consultations are provided as an add-on service. These consultations often include general tips and guidelines to complement the member's fitness goals but lack personalized meal planning.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Physiotherapist Services :- </b> Physiotherapy services are not included, requiring members to seek external assistance for injury prevention or recovery.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Corporate Structure :- </b> Employs a medium-sized team with department heads overseeing key functions. This structure ensures better service management and enhances member experience through organized operations.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Membership Pricing :- </b> Offers mid-range pricing that reflects a balance between affordability and additional amenities, making it an attractive choice for members seeking value for money.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Hygiene Standards :- </b> Higher hygiene standards are implemented, with regular cleaning schedules and visible maintenance routines. This ensures a cleaner and more inviting atmosphere for members.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Group Classes :- </b> Includes a selection of group fitness classes such as yoga and aerobics, encouraging social interaction and diversified workout options.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Technology Integration :- </b> Introduces partial technological solutions like fitness tracking apps or wearable devices. These tools enhance member engagement and provide moderate insights into fitness progress.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Fire Safety & Licensing :- </b> Implements comprehensive fire safety protocols including fire extinguishers and signage. Additionally, all mandatory licenses are acquired to ensure legal compliance.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Parking Space :- </b> Provides adequate parking facilities that are designed to handle moderate member traffic, ensuring convenience and accessibility during peak hours.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Opening Hours :- </b> Extends operational hours (e.g., 6 AM-11 PM), catering to members who prefer early morning or late-night workout sessions.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Personal Training Services :- </b> Offers regular personal training sessions conducted by trainers with specialized expertise. These programs focus on targeted fitness goals such as weight loss or muscle gain.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Customer Support :- </b> Enhanced customer support through a dedicated team, available during gym hours to address member needs, complaints, and inquiries, ensuring smoother communication and resolution.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Member Engagement :- </b> Regular communication through newsletters, events, and fitness challenges to keep members motivated. These initiatives promote a sense of community and enhance member loyalty.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Branding & Atmosphere :- </b> Modern interiors with a sleek, professional design. The ambiance reflects the gym's mid-tier branding, blending functionality with visual appeal to enhance member experience.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Social Media Presence :- </b> Active social media engagement with regular posts, fitness tips, and member stories. It utilizes platforms to promote services, interact with members, and build an online community.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Additional Benefits :- </b> Loyalty programs, referral benefits, and occasional member discounts. These features add value to the membership and encourage long-term engagement.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col"></div>
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
