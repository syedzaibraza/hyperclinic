import React, { useEffect, useState } from "react";
import Layouts from "../src/layouts/Layouts";
import PageBanner from "../src/components/PageBanner";
import Link from "next/link";
import Select from "react-select";
import { Specialty, Days, Service, Slots } from "../src/utils/DataCreator";
import { ApiGet, ApiPost } from "./api/hello";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

export const customStyles = {
  control: (provided) => ({
    ...provided,
    height: "65px",
    minHeight: "65px",
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: "65px",
    padding: "0 16px",
  }),
  input: (provided) => ({
    ...provided,
    margin: "0px",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: "65px",
  }),

  // Add more custom styles if needed for other parts of the Select
};

const Dashboard = () => {
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
  const dispatch = useDispatch();
  const [services, setServices] = useState([]);
  const router = useRouter();

  useEffect(() => {
    GetCategories();
  }, []);

  const GetCategories = () => {
    ApiGet("/categories")
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

    const doctorsData = {
      ...credentials,
      specialty: credentials.specialty,
      phoneNumber: credentials.phoneNumber,
      address: credentials.address,
      description: credentials.description,
      availability: credentials.availability,
      role: "Doctor",
    };

    ApiPost("/auth/signup", doctorsData)
      .then((res) => {
        dispatch({
          type: "set",
          isLoggedIn: true,
          userInfo: res.data.data,
        });
        toast.success(`Doctor Created Successfully`);
        router.push("/dashboard");
      })
      .catch((err) => {
        toast.error("Something went wrong");
      });
  };
  const transformedServices = services?.map((service) => ({
    label: service?.name,
    value: service?._id,
  }));
  return (
    <Layouts footer={2}>
      <PageBanner title={"Dashboard"} pageName="Dashboard" />
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
                    styles={customStyles}
                    required
                    options={transformedServices}
                    onChange={handleSelectChange}
                    placeholder="Select specialty..."
                  />
                </div>
              </div>
              <div className="input-group mb-3 ">
                <div className="input-group-prepend">Select Days</div>
                <div style={{ width: "100%" }}>
                  <Select
                    styles={customStyles}
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
                    styles={customStyles}
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
                    styles={customStyles}
                    required
                    hideSelectedOptions={true}
                    isMulti
                    onChange={handleService}
                    options={Service}
                    placeholder="Select Service..."
                  />
                </div>
              </div>
              <div className="login-btns">
                <button
                  type="submit"
                  className="template-btn text-center template-btn-primary mt-sm-30 wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  Add Doctor
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Dashboard;
