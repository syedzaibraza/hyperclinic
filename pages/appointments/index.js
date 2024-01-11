import React, { useEffect, useState } from "react";
import PageBanner from "../../src/components/PageBanner";
import Layouts from "../../src/layouts/Layouts";
import { withAuth } from "../../redux/useAuth";
import Select from "react-select";
import { ApiGet, ApiPost } from "../api/hello";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Service } from "../../src/utils/DataCreator";
import CreatableSelect from "react-select/creatable";

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: "50px",
    border: "none",
    height: "65px",
    minHeight: "65px",
    boxShadow: "none", // Remove focus shadow
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
  option: (provided) => ({
    ...provided,
    // borderRadius: "50px",
  }),
  // Add more custom styles if needed for other parts of the Select
};

const Appointments = () => {
  const [state, setState] = useState();
  const { userInfo } = useSelector((state) => state);
  const [freeSlots, setFreeSlots] = useState([]);
  const [credentials, setCredentials] = useState({
    bookingWith: "",
    date: "",
    timeSlot: "",
    bookingType: "",
    lastDoctor: "",
  });

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [medication, setMedication] = useState([]);
  const [medicalTests, setMedicalTests] = useState([]);
  const [surgeries, setSurgeries] = useState([]);
  const handleSurgeries = (options) => {
    setSurgeries(options);
  };
  const handleMedicalTests = (options) => {
    setMedicalTests(options);
  };
  const handleMedication = (options) => {
    setMedication(options);
  };
  const handleChange = (options) => {
    console.log("options", options);
    setSelectedOptions(options);
  };

  useEffect(() => {
    GetDoctors();
  }, []);

  const GetDoctors = () => {
    ApiGet("/user/doctors")
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...credentials,
      user: userInfo?._id,
      medicalConditions: selectedOptions.map((item) => item.value),
      currentMedications: medication.map((item) => item.value),
      medicalTests: medicalTests.map((item) => item.value),
      surgeries: surgeries.map((item) => item.value),
    };
    ApiPost("/bookings/create", data)
      .then((res) => {
        toast.success("Appointment Created");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  const timeOptions = freeSlots
    ? freeSlots.map((item) => ({
        value: item,
        label: item,
      }))
    : [];

  return (
    <Layouts footer={2}>
      <PageBanner title={"Appointment"} />
      <section className="appointment-section section-gap">
        <div className="container container-1500">
          <div className="appointment-form-two style-two">
            <div
              className="appointment-image"
              style={{
                backgroundImage:
                  "url(https://seeva.vercel.app/assets/img/appointment/03.jpg)",
              }}
            ></div>
            <div className="form-wrap">
              <div className="section-heading mb-50">
                <span className="tagline">Make an Appointment</span>
                <h2 className="title">
                  Fill-up The From to Get Our Medical Services{" "}
                </h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-field">
                      <Select
                        required
                        styles={customStyles}
                        options={state?.map((item) => ({
                          value: item?._id,
                          label: item?.name,
                        }))}
                        onChange={(selectedOption) =>
                          setCredentials((prevState) => ({
                            ...prevState,
                            bookingWith: selectedOption?.value,
                          }))
                        }
                        placeholder="Select Doctor"
                      />
                    </div>
                  </div>
                  {/*  <div className="col-md-6">
                    <div className="input-field">
                       <Select
                        options={appointmentOptions}
                        onChange={(selectedOption) =>
                          setAppointmentType(selectedOption)
                        }
                      /> 
                    </div>
                  </div>*/}
                  <div className="col-md-6">
                    <div className="input-field">
                      <input
                        required
                        type="date"
                        value={credentials?.date}
                        defaultValue={credentials?.date}
                        onChange={(e) => {
                          if (credentials.bookingWith === "") {
                            toast.error("Please Select Doctor First");
                            return;
                          } else {
                            setCredentials((prevState) => ({
                              ...prevState,
                              date: e.target.value,
                            }));
                            ApiPost("/bookings/availableSlots", {
                              doctor: credentials.bookingWith,
                              date: e.target.value,
                            }).then((res) => {
                              setFreeSlots(res.data.freeSlots);
                            });
                          }
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-field">
                      <Select
                        required
                        styles={customStyles}
                        options={timeOptions}
                        onChange={(selectedOption) =>
                          setCredentials((prevState) => ({
                            ...prevState,
                            timeSlot: selectedOption?.value,
                          }))
                        }
                        placeholder="Select Time"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-field">
                      <Select
                        required
                        styles={customStyles}
                        options={Service}
                        onChange={(selectedOption) =>
                          setCredentials((prevState) => ({
                            ...prevState,
                            bookingType: selectedOption?.value,
                          }))
                        }
                        placeholder="Select Consultation Type"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label>
                      Please provide the name of the last medical doctor or
                      healthcare professional you consulted.
                    </label>
                    <div className="input-field">
                      <input
                        value={credentials.lastDoctor}
                        onChange={(e) =>
                          setCredentials((prevState) => ({
                            ...prevState,
                            lastDoctor: e.target.value,
                          }))
                        }
                        placeholder="Enter last Medical Doctor Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label>
                      Have you ever been diagnosed with any diseases or medical
                      conditions? If so, kindly list the names of these
                      conditions.
                    </label>
                    <div className="input-field">
                      <CreatableSelect
                        styles={customStyles}
                        isMulti
                        onChange={handleChange}
                        value={selectedOptions}
                        placeholder="Enter last Medical Condition & press Enter"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label>
                      Could you list all the medications you are currently
                      taking, including any over-the-counter drugs or
                      supplements?
                    </label>
                    <div className="input-field">
                      <CreatableSelect
                        styles={customStyles}
                        isMulti
                        onChange={handleMedication}
                        value={medication}
                        placeholder="Enter current Medical Condition & press Enter"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label>
                      Please provide details of any medical tests you have
                      undergone recently, including the names of the tests and,
                      if possible, attach or provide the reports associated with
                      these tests.
                    </label>
                    <div className="input-field">
                      <CreatableSelect
                        styles={customStyles}
                        isMulti
                        onChange={handleMedicalTests}
                        value={medicalTests}
                        placeholder="Enter current Mediacl Condition & press Enter"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label>
                      Have you undergone any surgical procedures or operations
                      in the past? If yes, please list them, including the
                      number of surgeries and their respective names.
                    </label>
                    <div className="input-field">
                      <CreatableSelect
                        styles={customStyles}
                        isMulti
                        onChange={handleSurgeries}
                        value={surgeries}
                        placeholder="Enter Surgeries & press Enter"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-field">
                      <button type="submit" className="template-btn">
                        Make an Appointment <i className="far fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Appointment Section End ======--> */}

      {/* <!--====== Skill Section Start ======--> */}
      {/* <section className="skill-section section-gap border-top-primary">
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
                  Sed ut perspiciatis unde omnis natus error voluptatem santium
                  doloremque laudantium totam rem aperieaque ipsa quae abillo
                  ven veritatis et quasi architecto beatae vitae dicta.
                </p>
                <div
                  className="skills-items mt-50 wow fadeInUp"
                  data-wow-delay="0.3s"
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
      </section> */}
    </Layouts>
  );
};
export default withAuth(Appointments);
