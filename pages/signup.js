import React, { useState } from "react";
import Layouts from "../src/layouts/Layouts";
import PageBanner from "../src/components/PageBanner";
import Link from "next/link";
import Select from "react-select";
import { Specialty, Days, Service, Slots } from "../src/utils/DataCreator";
const TabSwitcher = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    specialty: "",
    phoneNumber: "",
    address: "",
    description: "",
    availability: {
      days: [],
      timeSlots: [],
      service: [],
    },
  });
  const [activeTab, setActiveTab] = useState("patient");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      specialty: e.value,
    }));
  };
  const handleDays = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      availability: {
        ...prevState.availability,
        days: e.map((item) => item.value),
      },
    }));
  };
  const handleTimeSlots = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      availability: {
        ...prevState.availability,
        timeSlots: e.map((item) => item.value),
      },
    }));
  };
  const handleService = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      availability: {
        ...prevState.availability,
        service: e.map((item) => item.value),
      },
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const patientData = {
      name: credentials.name,
      email: credentials.email,
      password: credentials.password,
      role: activeTab,
    };

    const doctorsData = {
      ...credentials,
      specialty: credentials.specialty,
      phoneNumber: credentials.phoneNumber,
      address: credentials.address,
      description: credentials.description,
      availability: credentials.availability,
      role: activeTab,
    };

    if (activeTab === "doctor") {
      console.log("Doctor===>", doctorsData);
    } else {
      console.log("Patient====>", patientData);
    }
  };

  return (
    <Layouts footer={2}>
      <PageBanner title={"Sign Up"} pageName="Sign Up" />
      <div className="main">
        <div className="tabSwitcher">
          <button
            className={`tabButton ${activeTab === "patient" ? "active" : ""}`}
            onClick={() => setActiveTab("patient")}
          >
            Patient
          </button>
          <button
            className={`tabButton ${activeTab === "doctor" ? "active" : ""}`}
            onClick={() => setActiveTab("doctor")}
          >
            Doctor
          </button>
        </div>
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
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  onChange={handleInputChange}
                  value={credentials.name}
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-envelope"></i>
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
              {activeTab === "doctor" && (
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-phone"></i>
                    </span>
                  </div>
                  <input
                    required
                    type="text"
                    name="phoneNumber"
                    className="form-control"
                    placeholder="Phone Number"
                    onChange={handleInputChange}
                    value={credentials.phoneNumber}
                  />
                </div>
              )}

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
              {activeTab === "doctor" && (
                <>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-map-marker"></i>
                      </span>
                    </div>
                    <input
                      required
                      type="text"
                      name="address"
                      className="form-control"
                      placeholder="Address"
                      onChange={handleInputChange}
                      value={credentials.address}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-info-circle"></i>
                      </span>
                    </div>
                    <input
                      required
                      type="text"
                      name="description"
                      className="form-control"
                      placeholder="Description"
                      onChange={handleInputChange}
                      value={credentials.description}
                    />
                  </div>

                  <div className="input-group mb-3 ">
                    <div className="input-group-prepend">Select Specialty</div>
                    <div style={{ width: "100%" }}>
                      <Select
                        required
                        options={Specialty}
                        onChange={handleSelectChange}
                        placeholder="Select specialty..."
                      />
                    </div>
                  </div>
                  <div className="input-group mb-3 ">
                    <div className="input-group-prepend">Select Days</div>
                    <div style={{ width: "100%" }}>
                      <Select
                        required
                        hideSelectedOptions={true}
                        isMulti
                        onChange={handleDays}
                        options={Days}
                        placeholder="Select Available Days..."
                      />
                    </div>
                  </div>
                  <div className="input-group mb-3 ">
                    <div className="input-group-prepend">Select Time Slots</div>
                    <div style={{ width: "100%" }}>
                      <Select
                        required
                        hideSelectedOptions={true}
                        isMulti
                        onChange={handleTimeSlots}
                        options={Slots}
                        placeholder="Select Time Slots..."
                      />
                    </div>
                  </div>
                  <div className="input-group mb-3 ">
                    <div className="input-group-prepend">Select Service</div>
                    <div style={{ width: "100%" }}>
                      <Select
                        required
                        hideSelectedOptions={true}
                        isMulti
                        onChange={handleService}
                        options={Service}
                        placeholder="Select Service..."
                      />
                    </div>
                  </div>
                </>
              )}
              <div className="login-btns">
                <button
                  type="submit"
                  className="template-btn text-center template-btn-primary mt-sm-30 wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  Signup
                </button>
                <Link
                  href={"/login"}
                  type="submit"
                  className="template-btn text-center template-btn-primary mt-sm-30 wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  Already have Account
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
