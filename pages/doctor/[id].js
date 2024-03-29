import Link from "next/link";
import React, { useEffect, useState } from "react";
import PageBanner from "../../src/components/PageBanner";
import Layouts from "../../src/layouts/Layouts";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ApiGet, ApiGetBody } from "../api/hello";
import { toast } from "react-toastify";
import { SPwithID } from "../../src/utils/DataCreator";
import PreLoader from "../../src/components/PreLoader";

const DoctorDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [state, setState] = useState();
  const [Categories, setCategories] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
    GetCategories();
    GetDoctorsByID();
  }, [id]);

  const GetDoctorsByID = () => {
    setLoading(true);
    ApiGet(`/user/${id}`)
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  const GetCategories = () => {
    setLoading(true);
    ApiGet("/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <Layouts>
      <PageBanner title={state?.name} pageName={"Doctor Details"} bgnone />
      {loading ? (
        <PreLoader />
      ) : (
        <>
          <section className="doctors-section section-gap">
            <div className="container">
              <div className="doctor-details-wrapper">
                <div className="doctor-info-box">
                  <div className="doctor-photo">
                    <img
                      src="https://a0.anyrgb.com/pngimg/130/28/stethoscope-doctor-cartoon-cartoon-doctor-male-doctor-female-doctor-doctors-icon-user-profile-medical-equipment-doctor.png"
                      alt="Image"
                    />
                  </div>
                  <div className="doctor-description">
                    <div className="description-header">
                      <div>
                        <h3 className="name">{state?.name}</h3>
                        <span className="specialty">
                          {
                            Categories?.find(
                              (sp) => sp._id === state?.specialty
                            )?.name
                          }
                        </span>
                      </div>
                      <div>
                        <Link href={`/appointments/${state?._id}`}>
                          <a
                            href="#"
                            className="template-btn template-btn-primary"
                          >
                            Appointment Now <i className="far fa-plus"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <p>{state?.description}</p>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-10">
                    <div className="doctor-information">
                      <div className="section-heading mb-30">
                        <span className="tagline">
                          {state?.role} Information
                        </span>
                        <h2 className="title">{state?.role} Information</h2>
                      </div>

                      <ul>
                        <li>
                          <span className="info-title">Phone</span>
                          <span className="info-desc">
                            {state?.phoneNumber}
                          </span>
                        </li>
                        <li>
                          <span className="info-title">Email</span>
                          <span className="info-desc">{state?.email}</span>
                        </li>
                        <li>
                          <span className="info-title">Field of expertise</span>
                          <span className="info-desc">
                            {
                              Categories?.find(
                                (sp) => sp._id === state?.specialty
                              )?.name
                            }
                          </span>
                        </li>
                        <li>
                          <span className="info-title">Address</span>
                          <span className="info-desc">{state?.address}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-10">
                    <div className="working-hour-table mt-md-50">
                      <div className="section-heading mb-30">
                        <span className="tagline">Working Hours</span>
                        <h2 className="title">Working Hours</h2>
                      </div>
                      <ul>
                        <li style={{ fontWeight: "bold" }}>
                          <span>Days</span>
                        </li>
                        <li>
                          {state?.availability?.days.map((day, index) => (
                            <>
                              <span key={index}>{day}</span>
                            </>
                          ))}
                        </li>
                        <li style={{ fontWeight: "bold" }}>
                          <span>Time Slots</span>
                        </li>
                        <li>
                          {state?.availability?.timeSlots.map((time, index) => (
                            <>
                              <span key={index}>{time}</span>
                            </>
                          ))}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!--====== Skill Section Start ======--> */}
          <section className="skill-section section-gap border-top-primary">
            <div className="container">
              <div className="row justify-content-center justify-content-lg-between align-items-center">
                <div className="col-lg-6 col-md-10">
                  <div className="tile-gallery-two pr-lg-3">
                    <div className="image-one">
                      <img src="assets/img/tile-gallery/04.jpg" alt="Image" />
                    </div>
                    <div
                      className="image-two text-right wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <img src="assets/img/tile-gallery/05.jpg" alt="Image" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-9">
                  <div className="skill-content pl-xl-5 mt-md-50">
                    <div className="section-heading mb-20">
                      <span className="tagline">Professional Skills</span>
                      <h2 className="title">
                        25 Years Of Experience In Medical Services
                      </h2>
                    </div>
                    <p>
                      Sed ut perspiciatis unde omnis natus error voluptatem
                      santium doloremque laudantium totam rem aperieaque ipsa
                      quae abillo ven veritatis et quasi architecto beatae vitae
                      dicta.
                    </p>
                    <div
                      className="skills-items mt-50 wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div
                        className="progress-bar-wrapper mb-40"
                        data-percentage="89"
                        data-line-color="#499afa"
                        data-line-bg="#e4f0fe"
                      >
                        <div className="progress-title-wrap">
                          <h5 className="progress-title">Medical Care</h5>
                          <span className="progress-percentage">89%</span>
                        </div>
                        <div className="progress-line-wrap">
                          <div className="progress-line"></div>
                        </div>
                      </div>
                      <div
                        className="progress-bar-wrapper mb-40"
                        data-percentage="64"
                        data-line-color="#ffae00"
                        data-line-bg="#fff3d9"
                      >
                        <div className="progress-title-wrap">
                          <h5 className="progress-title">Family Care</h5>
                          <span className="progress-percentage">64%</span>
                        </div>
                        <div className="progress-line-wrap">
                          <div className="progress-line"></div>
                        </div>
                      </div>
                      <div
                        className="progress-bar-wrapper mb-40"
                        data-percentage="78"
                        data-line-color="#b505ff"
                        data-line-bg="#f4daff"
                      >
                        <div className="progress-title-wrap">
                          <h5 className="progress-title">Child Care</h5>
                          <span className="progress-percentage">78%</span>
                        </div>
                        <div className="progress-line-wrap">
                          <div className="progress-line"></div>
                        </div>
                      </div>
                      <div
                        className="progress-bar-wrapper mb-40"
                        data-percentage="85"
                        data-line-color="#ff3000"
                        data-line-bg="#ffe0d9"
                      >
                        <div className="progress-title-wrap">
                          <h5 className="progress-title">Senior Care</h5>
                          <span className="progress-percentage">85%</span>
                        </div>
                        <div className="progress-line-wrap">
                          <div className="progress-line"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!--====== Skill Section End ======--> */}

          {/* <!--====== Appointment Section Start ======--> */}
          <section className="appointment-section">
            <div className="appointment-form-three style-two bg-color-primary">
              <div className="form-wrap">
                <div className="section-heading text-center heading-white mb-60">
                  <span className="tagline">Make an Appointment</span>
                  <h2 className="title">
                    Fill-up The From to Get Our Medical Services{" "}
                  </h2>
                </div>
                <form onSubmit={(e) => e.preventDefault()} action="#">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="input-field">
                        <input type="text" placeholder="Your Full Name" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-field">
                        <input type="email" placeholder="Email Address" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-field">
                        <select>
                          <option value="1" selected disabled>
                            Choose Doctors
                          </option>
                          <option value="2">Doctor One</option>
                          <option value="3">Doctor Two</option>
                          <option value="4">Doctor Three</option>
                          <option value="5">Doctor Four</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-field">
                        <select>
                          <option value="1" selected disabled>
                            Services Category
                          </option>
                          <option value="2">Service One</option>
                          <option value="3">Service Two</option>
                          <option value="4">Service Three</option>
                          <option value="5">Service Four</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-field">
                        <input type="date" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-field">
                        <input type="text" placeholder="Phone Number" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="input-field">
                        <button type="submit" className="template-btn">
                          Make an Appointment <i className="far fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div
                className="appointment-image"
                style={{
                  backgroundImage: `url(assets/img/appointment/06.jpg)`,
                }}
              ></div>
            </div>
          </section>
          {/* <!--====== Appointment Section End ======--> */}

          {/* <!--====== Service Section Start ======--> */}
          <section className="services-section section-gap">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="section-heading text-center mb-30">
                    <span className="tagline">Popular Medical Services</span>
                    <h2 className="title">
                      Benefit For Physical Mental and Virtual Care
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row service-loop justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="fancy-content-box-two mt-40">
                    <div className="thumbnail">
                      <img src="assets/img/iconic-box/01.jpg" alt="Image" />
                    </div>
                    <div className="box-content">
                      <div className="icon">
                        <img src="assets/img/icon/heart-2.png" alt="" />
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <Link href="/service-details">
                            <a>Cardiology</a>
                          </Link>
                        </h4>
                        <p>Amet consect ascnge eiusmod tempors</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="fancy-content-box-two mt-40">
                    <div className="thumbnail">
                      <img src="assets/img/iconic-box/02.jpg" alt="Image" />
                    </div>
                    <div className="box-content">
                      <div className="icon">
                        <img src="assets/img/icon/brain-2.png" alt="" />
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <Link href="/service-details">
                            <a>Neurology</a>
                          </Link>
                        </h4>
                        <p>Quis autem reprehe nderit voluptate</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="fancy-content-box-two mt-40">
                    <div className="thumbnail">
                      <img src="assets/img/iconic-box/03.jpg" alt="Image" />
                    </div>
                    <div className="box-content">
                      <div className="icon">
                        <img src="assets/img/icon/stomach-2.png" alt="" />
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <Link href="/service-details">
                            <a>Orthopedics</a>
                          </Link>
                        </h4>
                        <p>Amet consect ascnge eiusmod tempors</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!--====== Service Section End ======--> */}
        </>
      )}
    </Layouts>
  );
};
export default DoctorDetails;
