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
                    Welcome to Seeva, a leading healthcare service provider
                    known for its world-class medical facilities and a team of
                    highly experienced doctors.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-xl-5 col-md-6">
                    <div className="widget nav-widget">
                      <h4 className="widget-title">Popular Services</h4>
                      <ul className="nav-links">
                        <li>
                          <Link href="/service">
                            <a href="#">Symptoms Checker</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/appointments">
                            <a href="#">Doctors Appointment</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/labs">
                            <a href="#">Find Labs</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/categories">
                            <a href="#">Find Disease Category </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-10">
                <div className="widget newsletters-widget">
                  <h4 className="widget-title">Contact Us</h4>
                  <ul className="contact-list">
                    <li>
                      <a href="https://goo.gl/maps/inpkL6wUZqMR3opX7">
                        <i className="far fa-map-marker-alt" /> Lahore ,
                        Pakistan
                      </a>
                    </li>
                    <li>
                      <a href="mailto:support@gmail.com">
                        <i className="far fa-envelope" /> support@seeva.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:01267899">
                        <i className="far fa-phone" />
                        +92 (300)1234567
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <p>
              © 2021 <a href="#">Seeva</a>. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer1;
