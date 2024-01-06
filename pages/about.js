import Link from "next/link";
import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";

const About = () => {
  const [toggle, setToggle] = useState(1);
  return (
    <Layouts footer={2} noNewsletters={false}>
      <PageBanner title={"About"} />
      <section className="about-section section-gap">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-lg-6 col-md-10">
              <div className="circle-image-gallery mb-md-50">
                <div className="row">
                  <div className="col-6 gallery-left">
                    <div
                      className="single-img wow fadeInLeft"
                      data-wow-delay="0.3s"
                    >
                      <img
                        src="https://webtend.site/html/seeva/assets/img/circle-image-gallery/01.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className="single-img wow fadeInRight"
                      data-wow-delay="0.4s"
                    >
                      <img
                        src="https://webtend.site/html/seeva/assets/img/circle-image-gallery/03.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-6 gallery-right">
                    <div
                      className="single-img wow fadeInRight"
                      data-wow-delay="0.5s"
                    >
                      <img
                        className="animate-float-bob-y"
                        src="https://webtend.site/html/seeva/assets/img/circle-image-gallery/02.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className="single-img wow fadeInLeft"
                      data-wow-delay="0.6s"
                    >
                      <img
                        src="https://webtend.site/html/seeva/assets/img/circle-image-gallery/04.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="about-text">
                <div className="section-heading mb-35">
                  <span className="tagline">About Hyper Clinic</span>
                  <h2 className="title">All-in-One Worksite Health Solution</h2>

                  <p>Established in 2023 for Medical Services</p>
                </div>
                <p>
                  Welcome to Hyper Clinic, a leading healthcare service provider
                  known for its world-class medical facilities and a team of
                  highly experienced doctors. We are committed to providing the
                  best care to every patient every day.
                </p>
                <br />
                <p>
                  Established in 2023, our journey of two decades has been
                  filled with milestones, including pioneering medical
                  procedures, world-renowned healthcare services, and a firm
                  commitment to our core values. We always prioritize our
                  patients, ensuring they receive the utmost care, compassion,
                  and medical expertise.
                </p>
                {/* <Link href="/about">
                  <a className="template-btn mt-40">
                    Learn More <i className="far fa-plus"></i>
                  </a>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== About Section End ======--> */}

      <div className="wcu-with-doctors">
        {/* <!--====== Why Choose Section Start ======--> */}
        {/* <section className="wcu-section section-gap-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="section-heading heading-white text-center mb-40">
                  <span className="tagline">Why Choose Our Medical</span>
                  <h2 className="title">
                    Breakthrough in Comprehensive, Flexible Care Delivery Models
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-9">
                <div
                  className="image-title-box mt-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <h4 className="title">
                    <Link href="/service">
                      <a>Optimize Your Health Care Services</a>
                    </Link>
                  </h4>

                  <div className="image">
                    <img src="assets/img/img-title-box/01.jpg" alt="Image" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-9">
                <div
                  className="image-title-box mt-30 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <h4 className="title">
                    <Link href="/service">
                      <a>Boost Employee Engagement</a>
                    </Link>
                  </h4>

                  <div className="image">
                    <img src="assets/img/img-title-box/02.jpg" alt="Image" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-9">
                <div
                  className="image-title-box mt-30 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <h4 className="title">
                    <Link href="/service">
                      <a>Accelerate Your Return On Investment</a>
                    </Link>
                  </h4>

                  <div className="image">
                    <img src="assets/img/img-title-box/03.jpg" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <!--====== Why Choose Section End ======--> */}

        {/* <!--====== Doctor Section Start ======--> */}
        <section className="doctors-section bg-color-grey polygon-pattern-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-6">
                <div className="section-heading text-center mb-40">
                  <span className="tagline">Professional Team</span>
                  <h2 className="title">Meet Our Experience Team Members</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center doctors-loop">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div
                  className="doctor-box-three mt-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="doctor-photo">
                    <img src="assets/img/doctors/HOD.png" alt="Image" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                      <Link href="#">
                        <a>Mian Muhammad Munir Ud Din</a>
                      </Link>
                    </h5>
                    <span className="specialty">Founder and Mentor</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div
                  className="doctor-box-three mt-30 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="doctor-photo">
                    <img src="assets/img/doctors/Wahab.png" alt="Image" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                      <Link href="#">
                        <a>Wahab Asif</a>
                      </Link>
                    </h5>
                    <span className="specialty">Co-Founder</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div
                  className="doctor-box-three mt-30 wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="doctor-photo">
                    <img src="assets/img/doctors/Ali.png" alt="Image" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                      <Link href="#">Syed Ali Asghar</Link>
                    </h5>
                    <span className="specialty">Co-Founder</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div
                  className="doctor-box-three mt-30 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="doctor-photo">
                    <img src="assets/img/doctors/Noman.png" alt="Image" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                      <Link href="#">
                        <a>Muhammad Noman</a>
                      </Link>
                    </h5>
                    <span className="specialty">Co-Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--====== Doctor Section End ======--> */}
      </div>

      {/* <!--====== FAQ Section Start ======--> */}
      {/* <section className="faq-section section-gap">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="faq-image text-center text-lg-left mb-md-50">
                <img src="assets/img/section-img/faq-image.jpg" alt="Image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-9 col-sm-11">
              <div className="faq-content pl-xl-5">
                <div className="section-heading mb-30">
                  <span className="tagline">How Can We help</span>
                  <h2 className="title">
                    Flexible & Responsive to Changing Needs
                  </h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium totam rem aperieaqueys epsa
                  quae abillo inventore veritatis et quase
                </p>
                <Accordion
                  defaultActiveKey="collapseOne"
                  className="accordion-style-two mt-30"
                >
                  <div
                    className={
                      toggle === 1
                        ? "accordion-item active-accordion"
                        : "accordion-item"
                    }
                  >
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapseOne"
                        data-toggle="collapse"
                        onClick={() => setToggle(toggle === 1 ? 0 : 1)}
                      >
                        <span>Advanced Equipment and Best Dentists</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapseOne">
                      <div className="accordion-content">
                        <p>
                          Orem psum dolor sit amet consectetur adipiscing elit
                          sed do eiusmod tempor incididunt ut labore ets dolore
                          magna aliqua uispsum suspendisse
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div
                    className={
                      toggle === 2
                        ? "accordion-item active-accordion"
                        : "accordion-item"
                    }
                  >
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapseTwo"
                        data-toggle="collapse"
                        onClick={() => setToggle(toggle === 2 ? 0 : 2)}
                      >
                        <span>Our 10 Years Working Experience</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapseTwo">
                      <div className="accordion-content">
                        <p>
                          Orem psum dolor sit amet consectetur adipiscing elit
                          sed do eiusmod tempor incididunt ut labore ets dolore
                          magna aliqua uispsum suspendisse
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div
                    className={
                      toggle === 3
                        ? "accordion-item active-accordion"
                        : "accordion-item"
                    }
                  >
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapseThree"
                        data-toggle="collapse"
                        onClick={() => setToggle(toggle === 3 ? 0 : 3)}
                      >
                        <span>Advanced Equipment and Best Dentists</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapseThree">
                      <div className="accordion-content">
                        <p>
                          Orem psum dolor sit amet consectetur adipiscing elit
                          sed do eiusmod tempor incididunt ut labore ets dolore
                          magna aliqua uispsum suspendisse
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Layouts>
  );
};
export default About;
