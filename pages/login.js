import React, { useState } from "react";
import Layouts from "../src/layouts/Layouts";
import PageBanner from "../src/components/PageBanner";
import Link from "next/link";
import { ApiPost } from "./api/hello";

const TabSwitcher = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ApiPost("/auth/login", credentials);
  };
  const [activeTab, setActiveTab] = useState("patient");

  return (
    <Layouts footer={2}>
      <PageBanner title={"Login"} pageName="Login" />

      <div className="main">
        <div className="container">
          <div className="login_form">
            <div className="header-form pb-3">
              <h4 className="text-primary text-center">
                <i
                  className="fa fa-user-circle"
                  style={{ fontSize: "110px", color: "#2e279d" }}
                ></i>
              </h4>
              <div className="image"></div>
            </div>
            <form className="body-form" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <input
                  required
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={handleInputChange}
                  value={credentials.username}
                />
              </div>
              <div className="input-group mb-3 ">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  required
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={handleInputChange}
                  value={credentials.password}
                />
              </div>
              <div className="login-btns">
                <button
                  type="submit"
                  className="template-btn text-center template-btn-primary mt-sm-30 wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  Login
                </button>
                <Link
                  href={"/signup"}
                  type="submit"
                  className="template-btn text-center template-btn-primary mt-sm-30 wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  Create an Account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default TabSwitcher;
