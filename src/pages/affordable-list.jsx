import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import "../assets/css/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsappBtn from "../components/WhatsappBtn";

const AffordableList = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const steps = [
    {
      step: "Step 1",
      title: "Create Account",
      description: "Enter your mobile number to get started",
      imgSrc:
        "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/createaccount@2x.png",
      imgAlt: "Step 1: Create Account",
      imgWidth: 242,
      imgHeight: 195,
    },
    {
      step: "Step 2",
      title: "Enter Business Details",
      description: "Add name, address, business hours and photos",
      imgSrc:
        "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/enterbusinessdetails@2x.png",
      imgAlt: "Step 2: Enter Business Details",
      imgWidth: 230,
      imgHeight: 204,
    },
    {
      step: "Step 3",
      title: "Select Categories",
      description: "Add relevant categories to your free listing page",
      imgSrc:
        "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/selectcat@2x.png",
      imgAlt: "Step 3: Select Categories",
      imgWidth: 277,
      imgHeight: 164,
    },
  ];

  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Free Business Listings - Promote Your Brand Without Any Cost
        </title>
        <meta
          name="description"
          content="List your business for free on our platform. Boost your visibility, connect with new customers, and grow your brand with no cost or hassle. Start now!"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="images/favicon.png"
        />
      </Helmet>
      <>
        {loading && <div className="preloader" />}
        <div id="main-wrapper">
          <Header />
          <div className="clearfix" />
          {/* <section
            className="page-title gray text-start"
            style={{ marginTop: "70px" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="breadcrumbs-wrap">
                    <h2 className="mb-0 ft-medium">Affordable Gym</h2>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <section style={{ marginTop: "50px" }}>
            <div className="article_featured_image mt-2">
              <img
                className="img-fluid"
                src="images/banner-affiliation.webp"
                alt=""
              />
            </div>
          </section>
          {/* <section className="text-start">
            <div className="container">
              <div className="row">
                <div className="col"></div>
                <div className="col-md-10 col-12">
                  <div className="article_detail_wrapss single_article_wrap format-standard">
                    <div className="article_body_wrap">
                      <div className="article_featured_image">
                        <img
                          className="img-fluid"
                          src="images/affordable-list.webp"
                          alt=""
                        />
                      </div>
                      <h2 className="post-title">Affordable Gym</h2>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Space Requirement :- </b> Compact spaces ranging from
                        1,000 to 3,000 sq. ft., typically suitable for
                        small-scale fitness centers or startups. These spaces
                        are often designed with a focus on maximizing
                        functionality within limited square footage, making
                        efficient use of the area for essential fitness
                        activities.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Reception Area :- </b> A basic and straightforward
                        reception setup that includes a small desk and minimal
                        seating. Designed to prioritize utility, this area is
                        usually managed by one person, catering to the core
                        needs of member inquiries and check-ins without any
                        elaborate features.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Strength Equipment :- </b> Equipped with 5
                        foundational machines and free weights up to 20 kg,
                        these setups cater to beginners and individuals focusing
                        on basic strength-building exercises. The equipment is
                        limited in variety but sufficient for foundational
                        fitness needs.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Cardio Equipment :- </b> Provides 2-3 basic
                        treadmills or cycles, suitable for beginners or light
                        cardio routines. These options are functional but
                        limited, ideal for users looking for minimal cardio
                        solutions within an economical budget.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Miscellaneous Equipment :- </b> Includes essential
                        fitness accessories such as mats, jump ropes, and one
                        medicine ball, catering to basic workout routines. These
                        tools are ideal for fundamental exercises like
                        stretching, light resistance, and core strengthening.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Additional Facilities :- </b> Basic amenities like a
                        single washroom, a small dressing room, and minimal
                        ventilation systems are available, prioritizing
                        essential comfort and hygiene for members.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Dietitian Services :- </b> Dietitian services are not
                        offered, with the gym focusing exclusively on physical
                        fitness routines. Members are encouraged to manage their
                        nutritional needs independently or seek external
                        guidance.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Physiotherapist Services :- </b> Physiotherapy
                        services are absent, reflecting the gym's focus on
                        fitness without medical or rehabilitative offerings.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Corporate Structure :- </b> Operates with a lean team
                        structure comprising 1-2 trainers and a receptionist.
                        This minimalist approach is designed to keep operational
                        costs low while maintaining a basic level of service.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Membership Pricing :- </b> Positioned at an
                        affordable price point, providing essential gym services
                        that cater to individuals looking for budget-friendly
                        fitness solutions.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Hygiene Standards :- </b> Basic hygiene is maintained
                        through periodic cleaning, ensuring an acceptable
                        environment for members. While sufficient for essential
                        needs, it lacks advanced cleaning measures.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Group Classes :- </b> Group classes are not
                        available, emphasizing self-guided workouts and
                        individual training routines.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Technology Integration :- </b> Relies on manual
                        processes for operations such as record-keeping and
                        workout tracking, reflecting minimal integration of
                        technology in member management.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Fire Safety & Licensing :- </b> Adheres to basic
                        government-mandated fire safety measures and licensing
                        requirements, ensuring fundamental compliance.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Parking Space :- </b> Offers limited parking spaces,
                        often catering to a small number of members. Parking is
                        typically uncovered and shared with other
                        establishments.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Opening Hours :- </b> Operates during standard hours
                        (e.g., 7 AM-9 PM), which align with the schedules of the
                        majority of members.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Personal Training Services :- </b> Limited to
                        occasional sessions focused on basic fitness guidance.
                        These services cater to members with foundational
                        fitness goals and are not heavily personalized.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Customer Support :- </b> Basic support provided
                        through email or phone during working hours. It is
                        limited to resolving essential member queries, offering
                        a straightforward and no-frills approach.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Member Engagement :- </b> Minimal engagement with
                        occasional emails or promotions, mostly focused on
                        transactional communication. Member interaction is
                        limited to essential updates or offers.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Branding & Atmosphere :- </b> Functional and
                        straightforward design with no emphasis on aesthetic
                        appeal. The atmosphere is utilitarian, focusing solely
                        on essential fitness activities.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Social Media Presence :- </b> Limited to occasional
                        local promotions or updates about the gym's services.
                        The focus is primarily on attracting nearby members
                        through direct communication.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Additional Benefits :- </b> Basic perks like
                        occasional discounts or offers to attract
                        budget-conscious members. The focus is on affordability
                        rather than exclusive benefits.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col"></div>
              </div>
            </div>
          </section> */}
          <section>
            <div class="container text-start">
              <div class="grow-business-section mt-5">
                <div class="grow-business-item reverse">
                  <div class="grow-business-image d-block d-md-none">
                    <img
                      src="images/banner-affiliation-service.webp"
                      alt="Free Business Listing"
                    />
                  </div>
                  <div class="grow-business-content mt-5">
                    <p style={{ fontWeight: "400", fontSize: "17px" }}>
                      <b>Space Requirement :- </b> Compact spaces ranging from
                      1,000 to 3,000 sq. ft., typically suitable for small-scale
                      fitness centers or startups. These spaces are often
                      designed with a focus on maximizing functionality within
                      limited square footage, making efficient use of the area
                      for essential fitness activities.
                    </p>
                    <p style={{ fontWeight: "400", fontSize: "17px" }}>
                      <b>Reception Area :- </b> A basic and straightforward
                      reception setup that includes a small desk and minimal
                      seating. Designed to prioritize utility, this area is
                      usually managed by one person, catering to the core needs
                      of member inquiries and check-ins without any elaborate
                      features.
                    </p>
                    <p style={{ fontWeight: "400", fontSize: "17px" }}>
                      <b>Strength Equipment :- </b> Equipped with 5 foundational
                      machines and free weights up to 20 kg, these setups cater
                      to beginners and individuals focusing on basic
                      strength-building exercises. The equipment is limited in
                      variety but sufficient for foundational fitness needs.
                    </p>
                    <p style={{ fontWeight: "400", fontSize: "17px" }}>
                      <b>Cardio Equipment :- </b> Provides 2-3 basic treadmills
                      or cycles, suitable for beginners or light cardio
                      routines. These options are functional but limited, ideal
                      for users looking for minimal cardio solutions within an
                      economical budget.
                    </p>
                    <p style={{ fontWeight: "400", fontSize: "17px" }}>
                      <b>Miscellaneous Equipment :- </b> Includes essential
                      fitness accessories such as mats, jump ropes, and one
                      medicine ball, catering to basic workout routines. These
                      tools are ideal for fundamental exercises like stretching,
                      light resistance, and core strengthening.
                    </p>
                    <p style={{ fontWeight: "400", fontSize: "17px" }}>
                      <b>Additional Facilities :- </b> Basic amenities like a
                      single washroom, a small dressing room, and minimal
                      ventilation systems are available, prioritizing essential
                      comfort and hygiene for members.
                    </p>
                    <p style={{ fontWeight: "400", fontSize: "17px" }}>
                      <b>Dietitian Services :- </b> Dietitian services are not
                      offered, with the gym focusing exclusively on physical
                      fitness routines. Members are encouraged to manage their
                      nutritional needs independently or seek external guidance.
                    </p>
                    <p style={{ fontWeight: "400", fontSize: "17px" }}>
                      <b>Physiotherapist Services :- </b> Physiotherapy services
                      are absent, reflecting the gym's focus on fitness without
                      medical or rehabilitative offerings.
                    </p>
                    <p style={{ fontWeight: "400", fontSize: "17px" }}>
                      <b>Corporate Structure :- </b> Operates with a lean team
                      structure comprising 1-2 trainers and a receptionist. This
                      minimalist approach is designed to keep operational costs
                      low while maintaining a basic level of service.
                    </p>
                    <p style={{ fontWeight: "400", fontSize: "17px" }}>
                      <b>Membership Pricing :- </b> Positioned at an affordable
                      price point, providing essential gym services that cater
                      to individuals looking for budget-friendly fitness
                      solutions.
                    </p>
                    <p style={{ fontWeight: "400", fontSize: "17px" }}>
                      <b>Hygiene Standards :- </b> Basic hygiene is maintained
                      through periodic cleaning, ensuring an acceptable
                      environment for members. While sufficient for essential
                      needs, it lacks advanced cleaning measures.
                    </p>
                  </div>
                  <div class="grow-business-image d-none d-md-block black-before">
                    <img
                      src="images/banner-affiliation-service.webp"
                      alt="Free Business Listing"
                    />
                  </div>
                </div>
                <div class="grow-business-item">
                  <div class="grow-business-image black-before">
                    <img
                      src="images/banner-affiliation-service-2.webp"
                      alt="Justdial Ads"
                    />
                  </div>
                  <div class="grow-business-content">
                    <p style={{ fontWeight: "400", fontSize: "17px" }}>
                      <b>Group Classes :- </b> Group classes are not available,
                      emphasizing self-guided workouts and individual training
                      routines.
                    </p>
                    <p style={{ fontWeight: "400", fontSize: "17px" }}>
                      <b>Technology Integration :- </b> Relies on manual
                      processes for operations such as record-keeping and
                      workout tracking, reflecting minimal integration of
                      technology in member management.
                    </p>
                    <p style={{ fontWeight: "400", fontSize: "17px" }}>
                      <b>Fire Safety & Licensing :- </b> Adheres to basic
                      government-mandated fire safety measures and licensing
                      requirements, ensuring fundamental compliance.
                    </p>
                    <p style={{ fontWeight: "400", fontSize: "17px" }}>
                      <b>Parking Space :- </b> Offers limited parking spaces,
                      often catering to a small number of members. Parking is
                      typically uncovered and shared with other establishments.
                    </p>
                    <p style={{ fontWeight: "400", fontSize: "17px" }}>
                      <b>Opening Hours :- </b> Operates during standard hours
                      (e.g., 7 AM-9 PM), which align with the schedules of the
                      majority of members.
                    </p>
                    <p style={{ fontWeight: "400", fontSize: "17px" }}>
                      <b>Personal Training Services :- </b> Limited to
                      occasional sessions focused on basic fitness guidance.
                      These services cater to members with foundational fitness
                      goals and are not heavily personalized.
                    </p>
                    <p style={{ fontWeight: "400", fontSize: "17px" }}>
                      <b>Customer Support :- </b> Basic support provided through
                      email or phone during working hours. It is limited to
                      resolving essential member queries, offering a
                      straightforward and no-frills approach.
                    </p>
                    <p style={{ fontWeight: "400", fontSize: "17px" }}>
                      <b>Member Engagement :- </b> Minimal engagement with
                      occasional emails or promotions, mostly focused on
                      transactional communication. Member interaction is limited
                      to essential updates or offers.
                    </p>
                    <p style={{ fontWeight: "400", fontSize: "17px" }}>
                      <b>Branding & Atmosphere :- </b> Functional and
                      straightforward design with no emphasis on aesthetic
                      appeal. The atmosphere is utilitarian, focusing solely on
                      essential fitness activities.
                    </p>
                    <p style={{ fontWeight: "400", fontSize: "17px" }}>
                      <b>Social Media Presence :- </b> Limited to occasional
                      local promotions or updates about the gym's services. The
                      focus is primarily on attracting nearby members through
                      direct communication.
                    </p>
                    <p style={{ fontWeight: "400", fontSize: "17px" }}>
                      <b>Additional Benefits :- </b> Basic perks like occasional
                      discounts or offers to attract budget-conscious members.
                      The focus is on affordability rather than exclusive
                      benefits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section style={{ marginTop: "50px" }}>
            <div className="article_featured_image mt-2">
              <img
                className="img-fluid"
                src="images/banner-affiliation-2.webp"
                alt=""
                width="100%"
              />
            </div>
          </section>

          <section className="free-listing-steps">
            <div className="container">
              <h2 className="title">
                Get a FREE Business Listing in 3 Simple Steps
              </h2>
              <ul className="steps-list">
                {steps.map((step, index) => (
                  <li key={index} className="step-item">
                    <img
                      src={step.imgSrc}
                      alt={step.imgAlt}
                      width={step.imgWidth}
                      height={step.imgHeight}
                      loading="lazy"
                    />
                    <div className="step-details">
                      <span className="step-number">{step.step}</span>
                      <p className="step-title">{step.title}</p>
                      <p className="step-description">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
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
                    <h2 className="ft-bold text-light whastapp-title">
                      Join GOMZI Today and Discover Exclusive Deals - Connect
                      with Us Instantly!
                    </h2>
                    <h6 className="text-light mb-0 d-md-block d-none">
                      Unlock Success with GOMZI - Connect Now over whatsapp for
                      Advance Perks!
                    </h6>
                    <p className="ft-bold text-light mt-4"></p>
                  </div>
                </div>
              </div>
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-7 col-lg-10 col-md-12 col-sm-12 col-12">
                  <form className="rounded p-1">
                    <div className="d-flex justify-content-center">
                      <div className="form-group mb-0">
                        <WhatsappBtn
                          message={
                            "Hello, I wanted to know more about Business Listing."
                          }
                          options={{ pageRef: true }}
                        />
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

export default AffordableList;
