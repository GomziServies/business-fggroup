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
      imgSrc: "images/step-1.webp",
      imgAlt: "Step 1: Create Account",
      imgWidth: 242,
      imgHeight: 195,
    },
    {
      step: "Step 2",
      title: "Enter Business Details",
      description: "Add name, address, business hours and photos",
      imgSrc: "images/step-2.webp",
      imgAlt: "Step 2: Enter Business Details",
      imgWidth: 230,
      imgHeight: 204,
    },
    {
      step: "Step 3",
      title: "Select Categories",
      description: "Add relevant categories to your free listing page",
      imgSrc: "images/step-3.webp",
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
        Affordable Business Listings - List Your Brand at Low Cost
        </title>
        <meta
          name="description"
          content="Discover affordable business listing options to promote your brand. Boost visibility, connect with customers, and grow your reach without overspending!"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="images/favicon.png"
        />
      </Helmet>
      <>
      {loading && (
          <div className="loader-background">
            <div className="spinner-box">
              <div className="three-quarter-spinner"></div>
            </div>
          </div>
        )}
        <div id="main-wrapper">
          <Header />
          <section className="d-none d-md-block section-margin">
            <div className="mt-2">
              <img
                className="img-fluid"
                src="images/banner-affiliation.webp"
                width={"100%"}
                alt=""
              />
            </div>
          </section>
          <section className="d-block d-md-none section-margin">
            <div className="mt-2">
              <img
                className="img-fluid"
                src="images/affrodable-mobile.webp"
                width={"100%"}
                alt=""
              />
            </div>
          </section>
          <section>
            <div class="container text-start mt-5">
              <h2 className="title text-center affordable-h2 mb-3">
                Affordable Plans Use For You
              </h2>
              <div class="grow-business-section">
                <div class="grow-business-item">
                  <div class="grow-business-image">
                    <img
                      src="images/space-requirement.webp"
                      alt="Space Requirement"
                    />
                  </div>
                  <div class="grow-business-content">
                    <h3>Space Requirement</h3>
                    <p>
                      Compact spaces ranging from 1,000 to 3,000 sq. ft.,
                      typically suitable for small-scale fitness centers or
                      startups. These spaces are often designed with a focus on
                      maximizing functionality within limited square footage,
                      making efficient use of the area for essential fitness
                      activities.
                    </p>
                  </div>
                </div>
                <div class="grow-business-item">
                  <div class="grow-business-image d-block d-md-none">
                    <img
                      src="images/reception-area.webp"
                      alt="Reception Area"
                    />
                  </div>
                  <div class="grow-business-content">
                    <h3>Basic Reception Area</h3>
                    <p>
                      A basic and straightforward reception setup that includes
                      a small desk and minimal seating. Designed to prioritize
                      utility, this area is usually managed by one person,
                      catering to the core needs of member inquiries and
                      check-ins without any elaborate features.
                    </p>
                  </div>
                  <div class="grow-business-image grow-mt d-none d-md-block">
                    <img
                      src="images/reception-area.webp"
                      alt="Reception Area"
                    />
                  </div>
                </div>
                <div class="grow-business-item">
                  <div class="grow-business-image">
                    <img
                      src="images/affordable-list.webp"
                      alt="Space Requirement"
                    />
                  </div>
                  <div class="grow-business-content">
                    <h3>Strength Equipment </h3>
                    <p>
                      Equipped with 5 foundational machines and free weights up
                      to 200 kg, these setups cater to beginners and individuals
                      focusing on basic strength-building exercises. The
                      equipment is limited in variety but sufficient for
                      foundational fitness needs.
                    </p>
                  </div>
                </div>
                <div class="grow-business-item">
                  <div class="grow-business-image d-block d-md-none">
                    <img
                      src="images/cardio-equipment.webp"
                      alt="Reception Area"
                    />
                  </div>
                  <div class="grow-business-content">
                    <h3>Cardio Equipment </h3>
                    <p>
                      Provides 2-3 basic treadmills or cycles, suitable for
                      beginners or light cardio routines. These options are
                      functional but limited, ideal for users looking for
                      minimal cardio solutions within an economical budget.
                    </p>
                  </div>
                  <div class="grow-business-image grow-mt d-none d-md-block">
                    <img
                      src="images/cardio-equipment.webp"
                      alt="Reception Area"
                    />
                  </div>
                </div>
                <div class="grow-business-item">
                  <div class="grow-business-image">
                    <img
                      src="images/miscellaneous-equipment.webp"
                      alt="Space Requirement"
                    />
                  </div>
                  <div class="grow-business-content">
                    <h3>Miscellaneous Equipment </h3>
                    <p>
                      Includes essential fitness accessories such as mats, jump
                      ropes, and one medicine ball, catering to basic workout
                      routines. These tools are ideal for fundamental exercises
                      like stretching, light resistance, and core strengthening.
                    </p>
                  </div>
                </div>
                <div class="grow-business-item">
                  <div class="grow-business-image d-block d-md-none">
                    <img
                      src="images/additional-facilities.webp"
                      alt="Reception Area"
                    />
                  </div>
                  <div class="grow-business-content">
                    <h3>Additional Facilities </h3>
                    <p>
                      Basic amenities like a single washroom, a small dressing
                      room, and minimal ventilation systems are available,
                      prioritizing essential comfort and hygiene for members.
                    </p>
                  </div>
                  <div class="grow-business-image grow-mt d-none d-md-block">
                    <img
                      src="images/additional-facilities.webp"
                      alt="Reception Area"
                    />
                  </div>
                </div>
                {/* <div class="grow-business-item">
                  <div class="grow-business-image">
                    <img
                      src="images/dietitian-services.webp"
                      alt="Space Requirement"
                    />
                  </div>
                  <div class="grow-business-content">
                    <h3>Dietitian Services </h3>
                    <p>
                      Dietitian services are not offered, with the gym focusing
                      exclusively on physical fitness routines. Members are
                      encouraged to manage their nutritional needs independently
                      or seek external guidance.
                    </p>
                  </div>
                </div> */}
                {/* <div class="grow-business-item">
                  <div class="grow-business-image d-block d-md-none">
                    <img
                      src="images/physiotherapist-services.webp"
                      alt="Reception Area"
                    />
                  </div>
                  <div class="grow-business-content">
                    <h3>Physiotherapist Services </h3>
                    <p>
                      Physiotherapy services are absent, reflecting the gym's
                      focus on fitness without medical or rehabilitative
                      offerings.
                    </p>
                  </div>
                  <div class="grow-business-image grow-mt d-none d-md-block">
                    <img
                      src="images/physiotherapist-services.webp"
                      alt="Reception Area"
                    />
                  </div>
                </div> */}
                <div class="grow-business-item">
                  <div class="grow-business-image">
                    <img
                      src="images/corporate-structure.webp"
                      alt="Space Requirement"
                    />
                  </div>
                  <div class="grow-business-content">
                    <h3>Corporate Structure </h3>
                    <p>
                      Operates with a lean team structure comprising 1-2
                      trainers and a receptionist. This minimalist approach is
                      designed to keep operational costs low while maintaining a
                      basic level of service.
                    </p>
                  </div>
                </div>
                <div class="grow-business-item">
                  <div class="grow-business-image d-block d-md-none">
                    <img src="images/membership.webp" alt="Reception Area" />
                  </div>
                  <div class="grow-business-content">
                    <h3>Membership Pricing </h3>
                    <p>
                      Positioned at an affordable price point, providing
                      essential gym services that cater to individuals looking
                      for budget-friendly fitness solutions.
                    </p>
                  </div>
                  <div class="grow-business-image grow-mt d-none d-md-block">
                    <img src="images/membership.webp" alt="Reception Area" />
                  </div>
                </div>
                <div class="grow-business-item">
                  <div class="grow-business-image">
                    <img
                      src="images/hygiene-standards.webp"
                      alt="Space Requirement"
                    />
                  </div>
                  <div class="grow-business-content">
                    <h3>Hygiene Standards </h3>
                    <p>
                      Basic hygiene is maintained through periodic cleaning,
                      ensuring an acceptable environment for members. While
                      sufficient for essential needs, it lacks advanced cleaning
                      measures.
                    </p>
                  </div>
                </div>
                {/* <div class="grow-business-item">
                  <div class="grow-business-image d-block d-md-none">
                    <img src="images/group-class.webp" alt="Reception Area" />
                  </div>
                  <div class="grow-business-content">
                    <h3>Group Classes </h3>
                    <p>
                      Group classes are not available, emphasizing self-guided
                      workouts and individual training routines.
                    </p>
                  </div>
                  <div class="grow-business-image grow-mt d-none d-md-block">
                    <img src="images/group-class.webp" alt="Reception Area" />
                  </div>
                </div> */}
                <div class="grow-business-item">
                  <div class="grow-business-image">
                    <img
                      src="images/technology -integration.webp"
                      alt="Space Requirement"
                    />
                  </div>
                  <div class="grow-business-content">
                    <h3>Technology Integration </h3>
                    <p>
                      Relies on manual processes for operations such as
                      record-keeping and workout tracking, reflecting minimal
                      integration of technology in member management.
                    </p>
                  </div>
                </div>
                <div class="grow-business-item">
                  <div class="grow-business-image d-block d-md-none">
                    <img src="images/fire-safety.jpg" alt="Reception Area" />
                  </div>
                  <div class="grow-business-content">
                    <h3>Fire Safety & Licensing </h3>
                    <p>
                      Adheres to basic government-mandated fire safety measures
                      and licensing requirements, ensuring fundamental
                      compliance.
                    </p>
                  </div>
                  <div class="grow-business-image grow-mt d-none d-md-block">
                    <img src="images/fire-safety.jpg" alt="Reception Area" />
                  </div>
                </div>
                <div class="grow-business-item">
                  <div class="grow-business-image">
                    <img
                      src="images/parking-space.webp"
                      alt="Space Requirement"
                    />
                  </div>
                  <div class="grow-business-content">
                    <h3>Parking Space </h3>
                    <p>
                      Offers limited parking spaces, often catering to a small
                      number of members. Parking is typically uncovered and
                      shared with other establishments.
                    </p>
                  </div>
                </div>
                <div class="grow-business-item">
                  <div class="grow-business-image d-block d-md-none">
                    <img src="images/opening-hours.webp" alt="Reception Area" />
                  </div>
                  <div class="grow-business-content">
                    <h3>Opening Hours </h3>
                    <p>
                      Operates during standard hours (e.g., 6 AM-10 AM & 5
                      PM-11PM), which align with the schedules of the majority
                      of members.
                    </p>
                  </div>
                  <div class="grow-business-image grow-mt d-none d-md-block">
                    <img src="images/opening-hours.webp" alt="Reception Area" />
                  </div>
                </div>
                <div class="grow-business-item">
                  <div class="grow-business-image">
                    <img
                      src="images/personal-training.jpg"
                      alt="Space Requirement"
                    />
                  </div>
                  <div class="grow-business-content">
                    <h3>Personal Training Services </h3>
                    <p>
                      Limited to occasional sessions focused on basic fitness
                      guidance. These services cater to members with
                      foundational fitness goals and are not heavily
                      personalized.
                    </p>
                  </div>
                </div>
                <div class="grow-business-item">
                  <div class="grow-business-image d-block d-md-none">
                    <img
                      src="images/customer-support.webp"
                      alt="Reception Area"
                    />
                  </div>
                  <div class="grow-business-content">
                    <h3>Customer Support </h3>
                    <p>
                      Basic support provided through email or phone during
                      working hours. It is limited to resolving essential member
                      queries, offering a straightforward and no-frills
                      approach.
                    </p>
                  </div>
                  <div class="grow-business-image grow-mt d-none d-md-block">
                    <img
                      src="images/customer-support.webp"
                      alt="Reception Area"
                    />
                  </div>
                </div>
                <div class="grow-business-item">
                  <div class="grow-business-image">
                    <img
                      src="images/member-engagement.webp"
                      alt="Space Requirement"
                    />
                  </div>
                  <div class="grow-business-content">
                    <h3>Member Engagement </h3>
                    <p>
                      Minimal engagement with occasional emails or promotions,
                      mostly focused on transactional communication. Member
                      interaction is limited to essential updates or offers.
                    </p>
                  </div>
                </div>
                <div class="grow-business-item">
                  <div class="grow-business-image d-block d-md-none">
                    <img src="images/branding.webp" alt="Reception Area" />
                  </div>
                  <div class="grow-business-content">
                    <h3>Branding & Atmosphere </h3>
                    <p>
                      Functional and straightforward design with no emphasis on
                      aesthetic appeal. The atmosphere is utilitarian, focusing
                      solely on essential fitness activities.
                    </p>
                  </div>
                  <div class="grow-business-image grow-mt d-none d-md-block">
                    <img src="images/branding.webp" alt="Reception Area" />
                  </div>
                </div>
                <div class="grow-business-item">
                  <div class="grow-business-image">
                    <img
                      src="images/social-media.webp"
                      alt="Space Requirement"
                    />
                  </div>
                  <div class="grow-business-content">
                    <h3>Social Media Presence </h3>
                    <p>
                      Limited to occasional local promotions or updates about
                      the gym's services. The focus is primarily on attracting
                      nearby members through direct communication.
                    </p>
                  </div>
                </div>
                <div class="grow-business-item">
                  <div class="grow-business-image d-block d-md-none">
                    <img
                      src="images/additional-benefits.webp"
                      alt="Reception Area"
                    />
                  </div>
                  <div class="grow-business-content">
                    <h3>Additional Benefits </h3>
                    <p>
                      Basic perks like occasional discounts or offers to attract
                      budget-conscious members. The focus is on affordability
                      rather than exclusive benefits.
                    </p>
                  </div>
                  <div class="grow-business-image grow-mt d-none d-md-block">
                    <img
                      src="images/additional-benefits.webp"
                      alt="Reception Area"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="d-none d-md-block">
            <div className="mt-2">
              <img
                className="img-fluid"
                src="images/banner-affiliation-2.webp"
                alt=""
                width="100%"
              />
            </div>
          </section>
          <section className="d-block d-md-none">
            <div className="mt-2">
              <img
                className="img-fluid"
                src="images/affrodable-mobile-2.webp"
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
