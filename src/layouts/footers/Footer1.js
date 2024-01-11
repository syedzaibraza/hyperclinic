import Link from "next/link";
import React from "react";

const Footer1 = ({ noNewsletters }) => {
  return (
    <footer
      className={`template-footer ${noNewsletters ? "" : "have-cta-boxed-one"}`}
    >
      <div className="footer-inner bg-color-grey">
        <div className="container">
          <div className="footer-widgets">
            <div className="row">
              <div className="col-lg-3 col-md-8">
                <div className="widget text-widget">
                  <div className="footer-logo">
                    <img src="assets/img/logo.png" alt="Medibo" />
                  </div>
                  <p>
                    Welcome to Hyper Clinic, a leading healthcare service
                    provider known for its world-class medical facilities and a
                    team of highly experienced doctors.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-xl-5 col-md-6">
                    <div className="widget nav-widget"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-10">
                <div className="widget newsletters-widget">
                  <h4 className="widget-title">Popular Services</h4>
                  <ul className="nav-links">
                    <li>
                      <Link href="/symptoms-checker">
                        <a>Symptoms Checker</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/appointments">
                        <a>Doctors Appointment</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/labs">
                        <a>Find Labs</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/categories">
                        <a>Find Doctor by Category </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer1;
