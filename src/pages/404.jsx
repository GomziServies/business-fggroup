import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 error page</title>
      </Helmet>
      <Header />
      <section className="section-margin mb-5 gray pt-1 pb-3">
        <div className="container-fluid">
          <div className="container px-0 px-md-3">
            <div className="col-md-12 text-center error px-0 px-md-3">
              <div className="mt-5">
                <img
                  src={process.env.PUBLIC_URL + "/images/404-error.webp"}
                  className="img-fluid mx-auto"
                  alt="404 Error"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFoundPage;
