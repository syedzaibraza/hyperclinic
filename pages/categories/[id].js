import Link from "next/link";
import React, { useEffect, useState } from "react";
import PreLoader from "../../src/components/PreLoader";
import PageBanner from "../../src/components/PageBanner";
import Layouts from "../../src/layouts/Layouts";
import { useRouter } from "next/router";
import { ApiGet, ApiPost } from "../api/hello";

const CategoryID = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [State, setState] = useState();
  console.log("Cate", State);

  const [Categories, setCategories] = useState();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    GetCategories();
    CategoriesDoc();
  }, [id]);

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
  const CategoriesDoc = () => {
    ApiPost("/user/category", { specialty: id }).then((res) => {
      setState(res.data);
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
                          <img src="/01.png" alt="Image" />
                        </div>
                        <div className="doctor-information">
                          <h5 className="name">
                            <Link href={`/doctor/${item._id}`}>
                              <a>{item.name}</a>
                            </Link>
                          </h5>

                          <span className="specialty">
                            {
                              Categories?.find(
                                (sp) => sp._id === item.specialty._id
                              )?.name
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

export default CategoryID;
