import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import "../assets/css/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsappBtn from "../components/WhatsappBtn";

const PremiumList = () => {
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
        <title>Premium Business Listings - Get Featured for Free</title>
        <meta
          name="description"
          content="Upgrade your business visibility with a premium listing at no cost. Stand out, attract more customers, and enhance your brand's presence for free!"
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
                          src="images/premium-list.webp"
                          alt=""
                        />
                      </div>
                      <h2 className="post-title">Premium Gym</h2>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Space Requirement :- </b> Expansive facilities
                        ranging from 10,000 to 100,000 sq. ft., featuring
                        luxurious layouts, multiple dedicated zones for
                        specialized activities, and ample open areas that
                        provide a premium experience. These gyms often have room
                        for innovation in fitness technology and diverse
                        wellness programs.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Reception Area :- </b> An opulent and grand reception
                        area that creates a strong first impression with
                        luxurious seating, high-end furnishings, and
                        professional decor. The layout is designed to convey the
                        premium quality of services and ensure maximum comfort
                        for every visitor or member.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Strength Equipment :- </b> A fully equipped strength
                        training zone featuring high-end machines and an
                        extensive range of free weights designed to support
                        professional-level bodybuilding, rehabilitation, and
                        advanced strength workouts. The equipment is regularly
                        updated to reflect the latest advancements in fitness
                        technology.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Cardio Equipment :- </b> Offers a superior cardio
                        experience with 20-25 treadmills and 15-20 advanced
                        cycles, often including smart displays and advanced
                        monitoring systems. This comprehensive cardio zone
                        ensures a high-quality experience tailored for both
                        endurance and weight loss programs.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Miscellaneous Equipment :- </b> Provides specialized
                        tools such as kettlebells, battle ropes, resistance
                        bands, and an extensive selection of mats (30-40). These
                        high-end accessories support advanced functional
                        training, strength development, and flexibility
                        routines, appealing to fitness enthusiasts and
                        professionals alike.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Additional Facilities :- </b> Offers premium
                        facilities such as a fully operational cafeteria,
                        counseling cabins, a manager's office, sauna, and a hot
                        tub. These additions transform the gym into a
                        comprehensive wellness destination, elevating the
                        overall member experience.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Dietitian Services :- </b> Comprehensive dietary
                        services featuring on-site dietitians who provide
                        personalized consultations, meal planning, and
                        workshops. These services are deeply integrated into the
                        fitness programs, emphasizing the importance of
                        nutrition in achieving overall wellness.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Physiotherapist Services :- </b> Includes
                        professional physiotherapy sessions with licensed
                        experts available on-site. These services cover injury
                        prevention, rehabilitation, and personalized guidance,
                        ensuring a holistic approach to fitness and health.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Corporate Structure :- </b> Features a fully-fledged
                        corporate hierarchy including MDs, managers, team
                        leaders, and specialized staff across HR, finance, and
                        customer service. This structure ensures a highly
                        professional environment and optimal service delivery
                        for all members.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Membership Pricing :- </b> Commands a premium price
                        due to the extensive range of high-quality services,
                        exclusivity, and luxury features, making it ideal for
                        members seeking an elite fitness experience.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Hygiene Standards :- </b> Premium hygiene protocols
                        include advanced cleaning technologies, daily
                        sanitization, and dedicated housekeeping staff. These
                        measures guarantee an immaculate and health-conscious
                        environment for all members.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Group Classes :- </b> Offers a rich variety of
                        exclusive group classes including Yoga, Pilates, HIIT,
                        Zumba, and more. These sessions are led by highly
                        experienced trainers, catering to a wide range of
                        fitness interests and goals.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Technology Integration :- </b> Utilizes
                        state-of-the-art technology including app-based progress
                        tracking, smart gym equipment, virtual classes, and
                        integrated wearable devices. This ensures an interactive
                        and data-driven fitness journey for members.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Fire Safety & Licensing :- </b> Employs advanced fire
                        safety systems with emergency evacuation protocols,
                        premium-grade certifications, and regular audits. These
                        measures underline the gym's commitment to member safety
                        and legal adherence.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Parking Space :- </b> Features extensive parking
                        solutions including valet services, covered parking
                        spaces, and designated areas for members. These
                        provisions ensure hassle-free parking and elevate the
                        overall experience for premium gym-goers.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Opening Hours :- </b> Open 24/7 with secure entry
                        systems and round-the-clock access. This flexibility
                        accommodates all member lifestyles, from night owls to
                        early risers, providing unparalleled convenience.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Personal Training Services :- </b> Delivers highly
                        personalized one-on-one training sessions with top-tier
                        fitness experts. These programs are customized to the
                        member's unique needs, with options for virtual or
                        in-person training to enhance convenience and outcomes.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Customer Support :- </b> Premium 24/7 customer
                        support through multiple channels such as phone, email,
                        and instant messaging. It offers priority service,
                        personalized attention, and a swift resolution to ensure
                        a hassle-free experience.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Member Engagement :- </b> Highly interactive member
                        engagement, including exclusive events, personalized
                        challenges, workshops, and tailored promotions. These
                        activities aim to create a vibrant community while
                        aligning with individual member preferences.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Branding & Atmosphere :- </b> Luxurious interiors
                        featuring high-quality materials, premium furnishings,
                        and attention to detail in aesthetics. The atmosphere is
                        designed to evoke a sense of exclusivity and
                        sophistication, enhancing the premium feel of the gym.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Social Media Presence :- </b> A robust and
                        influential online presence, including partnerships with
                        fitness influencer, exclusive content for followers, and
                        strategic promotions. This strengthens the brand's
                        visibility and appeal to a broader audience.
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "17px" }}>
                        <b>Additional Benefits :- </b> Exclusive benefits such
                        as VIP events, priority bookings, spa treatments, and
                        luxury perks. These offerings emphasize exclusivity and
                        provide added value to premium memberships.
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
                    <h3>Space Requirement </h3>
                    <p>
                      Expansive facilities ranging from 10,000 to 100,000 sq.
                      ft., featuring luxurious layouts, multiple dedicated zones
                      for specialized activities, and ample open areas that
                      provide a premium experience. These gyms often have room
                      for innovation in fitness technology and diverse wellness
                      programs.
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
                    <h3>Reception Area </h3>
                    <p>
                      An opulent and grand reception area that creates a strong
                      first impression with luxurious seating, high-end
                      furnishings, and professional decor. The layout is
                      designed to convey the premium quality of services and
                      ensure maximum comfort for every visitor or member.
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
                      A fully equipped strength training zone featuring high-end
                      machines and an extensive range of free weights designed
                      to support professional-level bodybuilding,
                      rehabilitation, and advanced strength workouts. The
                      equipment is regularly updated to reflect the latest
                      advancements in fitness technology.
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
                      Offers a superior cardio experience with 20-25 treadmills
                      and 15-20 advanced cycles, often including smart displays
                      and advanced monitoring systems. This comprehensive cardio
                      zone ensures a high-quality experience tailored for both
                      endurance and weight loss programs.
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
                      Provides specialized tools such as kettlebells, battle
                      ropes, resistance bands, and an extensive selection of
                      mats (30-40). These high-end accessories support advanced
                      functional training, strength development, and flexibility
                      routines, appealing to fitness enthusiasts and
                      professionals alike.
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
                      Offers premium facilities such as a fully operational
                      cafeteria, counseling cabins, a manager's office, sauna,
                      and a hot tub. These additions transform the gym into a
                      comprehensive wellness destination, elevating the overall
                      member experience.
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
                      Comprehensive dietary services featuring on-site
                      dietitians who provide personalized consultations, meal
                      planning, and workshops. These services are deeply
                      integrated into the fitness programs, emphasizing the
                      importance of nutrition in achieving overall wellness.
                    </p>
                  </div>
                </div>
                <div class="grow-business-item">
                  <div class="grow-business-image d-block d-md-none">
                    <img
                      src="images/physiotherapist-services.webp"
                      alt="Reception Area"
                    />
                  </div>
                  <div class="grow-business-content">
                    <h3>Physiotherapist Services </h3>
                    <p>
                      Includes professional physiotherapy sessions with licensed
                      experts available on-site. These services cover injury
                      prevention, rehabilitation, and personalized guidance,
                      ensuring a holistic approach to fitness and health.
                    </p>
                  </div>
                  <div class="grow-business-image grow-mt d-none d-md-block">
                    <img
                      src="images/physiotherapist-services.webp"
                      alt="Reception Area"
                    />
                  </div>
                </div>
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
                      Features a fully-fledged corporate hierarchy including
                      MDs, managers, team leaders, and specialized staff across
                      HR, finance, and customer service. This structure ensures
                      a highly professional environment and optimal service
                      delivery for all members.
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
                      Commands a premium price due to the extensive range of
                      high-quality services, exclusivity, and luxury features,
                      making it ideal for members seeking an elite fitness
                      experience.
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
                      Premium hygiene protocols include advanced cleaning
                      technologies, daily sanitization, and dedicated
                      housekeeping staff. These measures guarantee an immaculate
                      and health-conscious environment for all members.
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
                      Offers a rich variety of exclusive group classes including
                      Yoga, Pilates, HIIT, Zumba, and more. These sessions are
                      led by highly experienced trainers, catering to a wide
                      range of fitness interests and goals.
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
                      Utilizes state-of-the-art technology including app-based
                      progress tracking, smart gym equipment, virtual classes,
                      and integrated wearable devices. This ensures an
                      interactive and data-driven fitness journey for members.
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
                      Employs advanced fire safety systems with emergency
                      evacuation protocols, premium-grade certifications, and
                      regular audits. These measures underline the gym's
                      commitment to member safety and legal adherence.
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
                      eatures extensive parking solutions including valet
                      services, covered parking spaces, and designated areas for
                      members. These provisions ensure hassle-free parking and
                      elevate the overall experience for premium gym-goers.
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
                      Open 24/7 with secure entry systems and round-the-clock
                      access. This flexibility accommodates all member
                      lifestyles, from night owls to early risers, providing
                      unparalleled convenience.
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
                      Delivers highly personalized one-on-one training sessions
                      with top-tier fitness experts. These programs are
                      customized to the member's unique needs, with options for
                      virtual or in-person training to enhance convenience and
                      outcomes.
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
                      Premium 24/7 customer support through multiple channels
                      such as phone, email, and instant messaging. It offers
                      priority service, personalized attention, and a swift
                      resolution to ensure a hassle-free experience.
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
                      Highly interactive member engagement, including exclusive
                      events, personalized challenges, workshops, and tailored
                      promotions. These activities aim to create a vibrant
                      community while aligning with individual member
                      preferences.
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
                      Luxurious interiors featuring high-quality materials,
                      premium furnishings, and attention to detail in
                      aesthetics. The atmosphere is designed to evoke a sense of
                      exclusivity and sophistication, enhancing the premium feel
                      of the gym.
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
                      A robust and influential online presence, including
                      partnerships with fitness influencer, exclusive content
                      for followers, and strategic promotions. This strengthens
                      the brand's visibility and appeal to a broader audience.
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
                      Exclusive benefits such as VIP events, priority bookings,
                      spa treatments, and luxury perks. These offerings
                      emphasize exclusivity and provide added value to premium
                      memberships.
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

export default PremiumList;
