import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import Layouts from "../src/layouts/Layouts";
import { testimonialOne } from "../src/sliderProps";
import { useSelector } from "react-redux";

const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layouts position={"absolute"}>
      <>
        {/*====== Hero Area Start ======*/}
        <section className="hero-area-one">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-5 col-md-8">
                <div className="hero-content">
                  <h1 className="title wow fadeInDown" data-wow-delay="0.3s">
                    We Care Medical &amp; Health
                  </h1>
                  <p className="wow fadeInLeft" data-wow-delay="0.4s">
                    Dolor sit amet consectetur adipiscing elitsedes eiusmod
                    tempor incididunt utlabore Lorem
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="hero-img wow fadeInUp" data-wow-delay="0.3s">
                  <img
                    src="https://seeva.vercel.app/assets/img/hero-img/hero-img.png"
                    alt="Hero"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-section cta-boxed-three pb-5">
          <div className="container">
            <div className="cta-inner">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 order-lg-last">
                  <div
                    className="cta-img text-center text-lg-right wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <img
                      className="animate-float-bob-y"
                      src="https://seeva.vercel.app/assets/img/cta-img/illustration.png"
                      alt="Image"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-10">
                  <div className="cta-content">
                    <div className="section-heading heading-white">
                      {/* <span className="tagline">
                        Get Our Doctors Consultations
                      </span> */}
                      <h2 className="title">
                        Check Your Symptoms and Find Medication & Doctors
                      </h2>
                    </div>

                    <Link href="/symptoms-checker">
                      <a className="template-btn mt-30" data-wow-delay="0.5s">
                        Symptoms Checker <i className="far fa-search" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Hero Area End ======*/}
        <div className="cta-boxes-wrapper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div
                  className="cta-boxed-two bg-color-secondary bg-size-cover blend-mode-multiply mb-30"
                  style={{
                    backgroundImage:
                      "url(https://seeva.vercel.app/assets/img/cta-img/cta-boxed-2-1.jpg)",
                  }}
                >
                  <h2 className="cta-title">
                    Looking a Doctors For Health Care
                  </h2>
                  <Link href={"/doctor"}>
                    <a className="template-btn template-btn-bordered">
                      Find Doctor <i className="far fa-plus" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="cta-boxed-two bg-color-secondary bg-size-cover blend-mode-multiply mb-30"
                  style={{
                    backgroundImage:
                      "url(https://seeva.vercel.app/assets/img/cta-img/cta-boxed-2-2.jpg)",
                  }}
                >
                  <h2 className="cta-title">Make Appointment Online (24/7)</h2>
                  <Link href="/appointments">
                    <a className="template-btn template-btn-bordered">
                      Appointment <i className="far fa-plus" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-8">
                <div
                  className="cta-boxed-two bg-color-secondary bg-size-cover blend-mode-multiply mb-30"
                  style={{
                    backgroundImage:
                      "url(https://seeva.vercel.app/assets/img/cta-img/cta-boxed-2-3.jpg)",
                  }}
                >
                  <h2 className="cta-title">Innovative Labs For Tests</h2>
                  <Link href="/labs">
                    <a className="template-btn template-btn-bordered">
                      Find Labs <i className="far fa-plus" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layouts>
  );
};
export default Index;
