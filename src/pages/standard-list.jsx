import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import "../assets/css/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsappBtn from "../components/WhatsappBtn";

const StandardList = () => {
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
        <title>Standard Gym Listings - Promote Your Fitness Center Today</title>
        <meta
          name="description"
          content="List your gym in our standard directory to boost visibility. Attract fitness enthusiasts, grow memberships, and showcase your services effectively!"
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
          <section style={{ marginTop: "50px" }} className="d-none d-md-block">
            <div className="mt-2">
              <img
                className="img-fluid"
                src="images/standerd-banner.webp"
                width={"100%"}
                alt=""
              />
            </div>
          </section>
          <section style={{ marginTop: "70px" }} className="d-block d-md-none">
            <div className="mt-2">
              <img
                className="img-fluid"
                src="images/standard-mobile.webp"
                width={"100%"}
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
                          src="images/standard-list.webp"
                          alt=""
                        />
                      </div>
                      <h2 className="post-title">Standard Gym</h2>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Space Requirement :- </b> Moderate facilities
                        spanning 3,000 to 8,000 sq. ft., providing enough space
                        to include multiple fitness zones, equipment areas, and
                        member relaxation spaces, ensuring a balanced experience
                        between functionality and comfort.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Reception Area :- </b> A thoughtfully organized and
                        spacious reception area that exudes professionalism.
                        This includes ample seating for waiting members or
                        visitors, a dedicated desk for inquiries, and decor that
                        reflects the gym's mid-tier branding.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Strength Equipment :- </b> Includes 8-10 machines
                        covering various muscle groups and free weights ranging
                        from 3-40 kg. This selection caters to intermediate
                        fitness enthusiasts and provides enough diversity to
                        support progressive strength training and muscle toning.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Cardio Equipment :- </b> Features 5-6 treadmills or
                        cycles, with an assortment of moderate-quality machines.
                        This setup caters to varied cardio routines and supports
                        moderate member traffic while ensuring a comfortable
                        workout experience.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Miscellaneous Equipment :- </b> Offers a wider range
                        of equipment including 10-20 mats, several sticks, and
                        3-4 medicine balls. This variety supports more dynamic
                        workouts such as aerobics and group fitness activities.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Additional Facilities :- </b> Includes enhanced
                        facilities such as a steam room and a group fitness
                        area, providing members with additional relaxation and
                        fitness options. These features cater to a more diverse
                        set of needs beyond basic workouts.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Dietitian Services :- </b> Basic dietary
                        consultations are provided as an add-on service. These
                        consultations often include general tips and guidelines
                        to complement the member's fitness goals but lack
                        personalized meal planning.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Physiotherapist Services :- </b> Physiotherapy
                        services are not included, requiring members to seek
                        external assistance for injury prevention or recovery.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Corporate Structure :- </b> Employs a medium-sized
                        team with department heads overseeing key functions.
                        This structure ensures better service management and
                        enhances member experience through organized operations.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Membership Pricing :- </b> Offers mid-range pricing
                        that reflects a balance between affordability and
                        additional amenities, making it an attractive choice for
                        members seeking value for money.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Hygiene Standards :- </b> Higher hygiene standards
                        are implemented, with regular cleaning schedules and
                        visible maintenance routines. This ensures a cleaner and
                        more inviting atmosphere for members.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Group Classes :- </b> Includes a selection of group
                        fitness classes such as yoga and aerobics, encouraging
                        social interaction and diversified workout options.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Technology Integration :- </b> Introduces partial
                        technological solutions like fitness tracking apps or
                        wearable devices. These tools enhance member engagement
                        and provide moderate insights into fitness progress.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Fire Safety & Licensing :- </b> Implements
                        comprehensive fire safety protocols including fire
                        extinguishers and signage. Additionally, all mandatory
                        licenses are acquired to ensure legal compliance.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Parking Space :- </b> Provides adequate parking
                        facilities that are designed to handle moderate member
                        traffic, ensuring convenience and accessibility during
                        peak hours.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Opening Hours :- </b> Extends operational hours
                        (e.g., 6 AM-11 PM), catering to members who prefer early
                        morning or late-night workout sessions.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Personal Training Services :- </b> Offers regular
                        personal training sessions conducted by trainers with
                        specialized expertise. These programs focus on targeted
                        fitness goals such as weight loss or muscle gain.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Customer Support :- </b> Enhanced customer support
                        through a dedicated team, available during gym hours to
                        address member needs, complaints, and inquiries,
                        ensuring smoother communication and resolution.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Member Engagement :- </b> Regular communication
                        through newsletters, events, and fitness challenges to
                        keep members motivated. These initiatives promote a
                        sense of community and enhance member loyalty.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Branding & Atmosphere :- </b> Modern interiors with a
                        sleek, professional design. The ambiance reflects the
                        gym's mid-tier branding, blending functionality with
                        visual appeal to enhance member experience.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Social Media Presence :- </b> Active social media
                        engagement with regular posts, fitness tips, and member
                        stories. It utilizes platforms to promote services,
                        interact with members, and build an online community.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Additional Benefits :- </b> Loyalty programs,
                        referral benefits, and occasional member discounts.
                        These features add value to the membership and encourage
                        long-term engagement.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col"></div>
              </div>
            </div>
          </section> */}
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
                      Moderate facilities spanning 3,000 to 8,000 sq. ft.,
                      providing enough space to include multiple fitness zones,
                      equipment areas, and member relaxation spaces, ensuring a
                      balanced experience between functionality and comfort.
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
                    <h3>Good Reception Area </h3>
                    <p>
                      A thoughtfully organized and spacious reception area that
                      exudes professionalism. This includes ample seating for
                      waiting members or visitors, a dedicated desk for
                      inquiries, and decor that reflects the gym's mid-tier
                      branding.
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
                      Includes 8-10 machines covering various muscle groups and
                      free weights ranging from 300-400 kg. This selection caters
                      to intermediate fitness enthusiasts and provides enough
                      diversity to support progressive strength training and
                      muscle toning.
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
                      Features 5-6 treadmills or cycles, with an assortment of
                      moderate-quality machines. This setup caters to varied
                      cardio routines and supports moderate member traffic while
                      ensuring a comfortable workout experience.
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
                      Offers a wider range of equipment including 10-20 mats,
                      several sticks, and 3-4 medicine balls. This variety
                      supports more dynamic workouts such as aerobics and group
                      fitness activities.
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
                      Includes enhanced facilities such as a steam room and a
                      group fitness area, providing members with additional
                      relaxation and fitness options. These features cater to a
                      more diverse set of needs beyond basic workouts.
                    </p>
                  </div>
                  <div class="grow-business-image grow-mt d-none d-md-block">
                    <img
                      src="images/additional-facilities.webp"
                      alt="Reception Area"
                    />
                  </div>
                </div>
                <div class="grow-business-item">
                  <div class="grow-business-image">
                    <img
                      src="images/dietitian-services.webp"
                      alt="Space Requirement"
                    />
                  </div>
                  <div class="grow-business-content">
                    <h3>Dietitian Services </h3>
                    <p>
                      Basic dietary consultations are provided as an add-on
                      service. These consultations often include general tips
                      and guidelines to complement the member's fitness goals
                      but lack personalized meal planning.
                    </p>
                  </div>
                </div>
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
                      Physiotherapy services are not included, requiring members
                      to seek external assistance for injury prevention or
                      recovery.
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
                      Employs a medium-sized team with department heads
                      overseeing key functions. This structure ensures better
                      service management and enhances member experience through
                      organized operations.
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
                      Offers mid-range pricing that reflects a balance between
                      affordability and additional amenities, making it an
                      attractive choice for members seeking value for money.
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
                      Higher hygiene standards are implemented, with regular
                      cleaning schedules and visible maintenance routines. This
                      ensures a cleaner and more inviting atmosphere for
                      members.
                    </p>
                  </div>
                </div>
                <div class="grow-business-item">
                  <div class="grow-business-image d-block d-md-none">
                    <img src="images/group-class.webp" alt="Reception Area" />
                  </div>
                  <div class="grow-business-content">
                    <h3>Group Classes </h3>
                    <p>
                      Includes a selection of group fitness classes such as yoga
                      and aerobics, encouraging social interaction and
                      diversified workout options.
                    </p>
                  </div>
                  <div class="grow-business-image grow-mt d-none d-md-block">
                    <img src="images/group-class.webp" alt="Reception Area" />
                  </div>
                </div>
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
                      Introduces partial technological solutions like fitness
                      tracking apps or wearable devices. These tools enhance
                      member engagement and provide moderate insights into
                      fitness progress.
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
                      Implements comprehensive fire safety protocols including
                      fire extinguishers and signage. Additionally, all
                      mandatory licenses are acquired to ensure legal
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
                      Provides adequate parking facilities that are designed to
                      handle moderate member traffic, ensuring convenience and
                      accessibility during peak hours.
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
                      Extends operational hours (e.g., 6 AM-11 AM & 4 PM-11PM), catering to
                      members who prefer early morning or late-night workout
                      sessions.
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
                      Offers regular personal training sessions conducted by
                      trainers with specialized expertise. These programs focus
                      on targeted fitness goals such as weight loss or muscle
                      gain.
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
                      Enhanced customer support through a dedicated team,
                      available during gym hours to address member needs,
                      complaints, and inquiries, ensuring smoother communication
                      and resolution.
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
                      Regular communication through newsletters, events, and
                      fitness challenges to keep members motivated. These
                      initiatives promote a sense of community and enhance
                      member loyalty.
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
                      Modern interiors with a sleek, professional design. The
                      ambiance reflects the gym's mid-tier branding, blending
                      functionality with visual appeal to enhance member
                      experience.
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
                      Active social media engagement with regular posts, fitness
                      tips, and member stories. It utilizes platforms to promote
                      services, interact with members, and build an online
                      community.
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
                      Loyalty programs, referral benefits, and occasional member
                      discounts. These features add value to the membership and
                      encourage long-term engagement.
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
          <section style={{ marginTop: "50px" }} className="d-none d-md-block">
            <div className="mt-2">
              <img
                className="img-fluid"
                src="images/standard-banner-small.webp"
                alt=""
                width="100%"
              />
            </div>
          </section>
          <section style={{ marginTop: "50px" }} className="d-block d-md-none">
            <div className="mt-2">
              <img
                className="img-fluid"
                src="images/standard-mobile-2.webp"
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

export default StandardList;
