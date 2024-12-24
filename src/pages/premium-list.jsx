import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import "../assets/css/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PremiumList = () => {
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
                    <section className="page-title gray text-start">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="breadcrumbs-wrap">
                                        <h2 className="mb-0 ft-medium">
                                            Premium Gym
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
                                                <img className="img-fluid" src="images/premium-list.webp" alt="" />
                                            </div>
                                            <h2 className="post-title">
                                                Premium Gym
                                            </h2>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Space Requirement :- </b> Expansive facilities ranging from 10,000 to 100,000 sq. ft., featuring luxurious layouts, multiple dedicated zones for specialized activities, and ample open areas that provide a premium experience. These gyms often have room for innovation in fitness technology and diverse wellness programs.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Reception Area :- </b> An opulent and grand reception area that creates a strong first impression with luxurious seating, high-end furnishings, and professional decor. The layout is designed to convey the premium quality of services and ensure maximum comfort for every visitor or member.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Strength Equipment :- </b> A fully equipped strength training zone featuring high-end machines and an extensive range of free weights designed to support professional-level bodybuilding, rehabilitation, and advanced strength workouts. The equipment is regularly updated to reflect the latest advancements in fitness technology.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Cardio Equipment :- </b> Offers a superior cardio experience with 20-25 treadmills and 15-20 advanced cycles, often including smart displays and advanced monitoring systems. This comprehensive cardio zone ensures a high-quality experience tailored for both endurance and weight loss programs.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Miscellaneous Equipment :- </b> Provides specialized tools such as kettlebells, battle ropes, resistance bands, and an extensive selection of mats (30-40). These high-end accessories support advanced functional training, strength development, and flexibility routines, appealing to fitness enthusiasts and professionals alike.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Additional Facilities :- </b> Offers premium facilities such as a fully operational cafeteria, counseling cabins, a manager's office, sauna, and a hot tub. These additions transform the gym into a comprehensive wellness destination, elevating the overall member experience.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Dietitian Services :- </b> Comprehensive dietary services featuring on-site dietitians who provide personalized consultations, meal planning, and workshops. These services are deeply integrated into the fitness programs, emphasizing the importance of nutrition in achieving overall wellness.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Physiotherapist Services :- </b> Includes professional physiotherapy sessions with licensed experts available on-site. These services cover injury prevention, rehabilitation, and personalized guidance, ensuring a holistic approach to fitness and health.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Corporate Structure :- </b> Features a fully-fledged corporate hierarchy including MDs, managers, team leaders, and specialized staff across HR, finance, and customer service. This structure ensures a highly professional environment and optimal service delivery for all members.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Membership Pricing :- </b> Commands a premium price due to the extensive range of high-quality services, exclusivity, and luxury features, making it ideal for members seeking an elite fitness experience.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Hygiene Standards :- </b> Premium hygiene protocols include advanced cleaning technologies, daily sanitization, and dedicated housekeeping staff. These measures guarantee an immaculate and health-conscious environment for all members.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Group Classes :- </b> Offers a rich variety of exclusive group classes including Yoga, Pilates, HIIT, Zumba, and more. These sessions are led by highly experienced trainers, catering to a wide range of fitness interests and goals.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Technology Integration :- </b> Utilizes state-of-the-art technology including app-based progress tracking, smart gym equipment, virtual classes, and integrated wearable devices. This ensures an interactive and data-driven fitness journey for members.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Fire Safety & Licensing :- </b> Employs advanced fire safety systems with emergency evacuation protocols, premium-grade certifications, and regular audits. These measures underline the gym's commitment to member safety and legal adherence.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Parking Space :- </b> Features extensive parking solutions including valet services, covered parking spaces, and designated areas for members. These provisions ensure hassle-free parking and elevate the overall experience for premium gym-goers.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Opening Hours :- </b> Open 24/7 with secure entry systems and round-the-clock access. This flexibility accommodates all member lifestyles, from night owls to early risers, providing unparalleled convenience.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Personal Training Services :- </b> Delivers highly personalized one-on-one training sessions with top-tier fitness experts. These programs are customized to the member's unique needs, with options for virtual or in-person training to enhance convenience and outcomes.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Customer Support :- </b> Premium 24/7 customer support through multiple channels such as phone, email, and instant messaging. It offers priority service, personalized attention, and a swift resolution to ensure a hassle-free experience.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Member Engagement :- </b> Highly interactive member engagement, including exclusive events, personalized challenges, workshops, and tailored promotions. These activities aim to create a vibrant community while aligning with individual member preferences.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Branding & Atmosphere :- </b> Luxurious interiors featuring high-quality materials, premium furnishings, and attention to detail in aesthetics. The atmosphere is designed to evoke a sense of exclusivity and sophistication, enhancing the premium feel of the gym.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Social Media Presence :- </b> A robust and influential online presence, including partnerships with fitness influencer, exclusive content for followers, and strategic promotions. This strengthens the brand's visibility and appeal to a broader audience.
                                            </p>
                                            <p style={{ fontWeight: "400", fontSize: '17px' }}>
                                                <b>Additional Benefits :- </b> Exclusive benefits such as VIP events, priority bookings, spa treatments, and luxury perks. These offerings emphasize exclusivity and provide added value to premium memberships.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col"></div>
                            </div>
                        </div>
                    </section>

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
                  <form className="rounded p-1">
                    <div className="row no-gutters justify-content-center">
                      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4">
                        <div className="form-group mb-0">
                          <button
                            className="full-width btn-height dark-theme-bg whatsapp-btn text-light fs-md"
                            type="button"
                          >
                            <i className="lni lni-whatsapp mr-2" />
                            WhatsApp
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

export default PremiumList;
