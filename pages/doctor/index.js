import Link from "next/link";
import React, { useEffect, useState } from "react";
import PageBanner from "../../src/components/PageBanner";
import Layouts from "../../src/layouts/Layouts";
import { ApiGet } from "../api/hello";
import { toast } from "react-toastify";
import { SPwithID } from "../../src/utils/DataCreator";
import PreLoader from "../../src/components/PreLoader";
import { useDispatch } from "react-redux";

const Doctor = () => {
  const [State, setState] = useState();
  const [Categories, setCategories] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
    GetCategories();
    GetDoctors();
  }, []);

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

  const GetDoctors = () => {
    ApiGet("/user/doctors")
      .then((res) => {
        dispatch({
          type: "set",
          doctors: res.data,
        });
        setState(res.data);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return (
    <Layouts>
      <PageBanner title={"Meet The Doctors"} bgnone />
      {loading ? (
        <PreLoader />
      ) : (
        <>
          <section className="doctors-section section-gap">
            <div className="container">
              <div className="row doctors-loop justify-content-center">
                {State?.map((item, index) => (
                  <>
                    <div className="col-lg-4 col-md-6 col-sm-9">
                      <div className="doctor-box-one mb-30">
                        <div className="doctor-photo">
                          <img src="assets/img/doctors/01.png" alt="Image" />
                        </div>
                        <div className="doctor-information">
                          <h5 className="name">
                            <Link href={`/doctor/${item._id}`}>
                              <a>{item.name}</a>
                            </Link>
                          </h5>

                          <span className="specialty">
                            {
                              Categories.find((sp) => sp._id === item.specialty)
                                ?.name
                            }
                          </span>
                          <ul className="social-links">
                            <li>
                              <a href="#">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-youtube"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-linkedin"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <div className="load-more-doctors text-center mt-40">
                <Link href="/appointments">
                  <a className="template-btn template-btn-primary">
                    Male An Appointment <i className="far fa-plus"></i>{" "}
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </>
      )}
    </Layouts>
  );
};
export default Doctor;
