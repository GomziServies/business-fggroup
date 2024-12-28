import React from "react";

function Footer() {
  return (
    <>
      <footer className="light-footer skin-light-footer style-2 text-start">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="footer_widget">
                  <div className="d-flex align-items-center">
                    <img
                      src="images/logo.png"
                      className="img-footer small mb-2"
                      alt=""
                    />
                    <h5 className="ps-2 mb-0">FG Group</h5>
                  </div>
                  <div className="address mt-2">
                    <p>2-Gomzi, Abhushan, Near Alkapuri Char Rasta, Katargam, Surat-395004</p>
                  </div>
                  <div className="address mt-2">
                    <p>+91 63540 51487</p>
                  </div>
                  <div className="address mt-2">
                    <p>gomziconsultingservices@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2">
                <div className="footer_widget">
                  <h4 className="widget_title">Links</h4>
                  <ul className="footer-menu">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/listing-list">Listing</a>
                    </li>
                  </ul>
                  <div className="address mt-2">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="https://www.facebook.com/gajani2/" className="theme-cl">
                          <i className="lni lni-facebook-filled" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://www.youtube.com/channel/UCLyvtq55YZORdV-SN8OQSzQ" className="theme-cl">
                          <i className="lni lni-youtube" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://www.instagram.com/fitnesswithgomzi/" className="theme-cl">
                          <i className="lni lni-instagram-filled" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://www.linkedin.com/in/dt-gautam-jani-561a50161/" className="theme-cl">
                          <i className="lni lni-linkedin-original" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer_widget">
                  <h4 className="widget_title">location</h4>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d929.8211810783346!2d72.8407405!3d21.2205552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ee63694215d%3A0xae1754b1fbc9eab1!2sAbhushan%20Bungalows%2C%20Sharda%20Society%2C%202%2C%20Sumul%20Dairy%20Rd%2C%20near%20alkapuri%2C%20beside%20richi%20xerox%2C%20Old%20Pushpakunj%20Society%2C%20Shraddha%20Society%2C%20Katargam%2C%20Surat%2C%20Gujarat%20395004!5e0!3m2!1sen!2sin!4v1734762696174!5m2!1sen!2sin" width="100%" height="250" style={{ border: 0, borderRadius: '10px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
