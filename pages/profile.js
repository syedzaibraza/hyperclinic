import Link from "next/link";
import React, { useEffect, useState } from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";
import { useSelector } from "react-redux";
import { withAuth } from "../redux/useAuth";
import { ApiGet, ApiGetBody, ApiPatch, ApiPost } from "./api/hello";
import { toast } from "react-toastify";

const DoctorDetails = () => {
  const { userInfo, doctors } = useSelector((state) => state);
  const [bookings, setBookings] = useState();
  useEffect(() => {
    if (userInfo) {
      GetAppointments();
    }
  }, [userInfo]);

  const GetAppointments = () => {
    ApiGet(`/bookings/${userInfo?._id.toString()}`)
      .then((res) => {
        setBookings(res.data);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      });
  };

  const onCancel = (id) => {
    ApiPatch(`/bookings/cancelAppointment/`, { id: id })
      .then((res) => {
        toast.success("Appointment canceled");
        GetAppointments();
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      });
  };

  return (
    <Layouts>
      <PageBanner title={`Your Profile`} pageName={`Your Profile`} bgnone />
      <section className="doctors-section section-gap">
        <div className="container">
          <div className="doctor-details-wrapper">
            <div
              className="doctor-info-box"
              style={{
                alignItems: userInfo?.role === "Patient" && "center",
                gap: userInfo?.role === "Patient" && "100px",
              }}
            >
              <div className="doctor-photo">
                {userInfo?.role === "Doctor" ? (
                  <img
                    src="https://a0.anyrgb.com/pngimg/130/28/stethoscope-doctor-cartoon-cartoon-doctor-male-doctor-female-doctor-doctors-icon-user-profile-medical-equipment-doctor.png"
                    alt="Image"
                  />
                ) : (
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
                    alt="Image"
                  />
                )}
              </div>
              <div
                className="doctor-description"
                style={{
                  background: userInfo?.role === "Patient" && "none",
                }}
              >
                <div className="description-header">
                  <div>
                    <h3 className="name">
                      {userInfo?.role === "Doctor" ? "" : "Patient: "}
                      {userInfo?.name}
                    </h3>
                    <span className="specialty">
                      {userInfo?.specialty?.name}
                    </span>
                  </div>
                </div>
                <p>{userInfo?.description}</p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="doctor-information">
                  <div className="section-heading mb-30">
                    <span className="tagline">
                      {userInfo?.role} Information
                    </span>
                    <h2 className="title">{userInfo?.role} Information</h2>
                  </div>

                  <ul>
                    <li>
                      <span className="info-title">Phone</span>
                      <span className="info-desc">{userInfo?.phoneNumber}</span>
                    </li>
                    <li>
                      <span className="info-title">Email</span>
                      <span className="info-desc">{userInfo?.email}</span>
                    </li>
                    {userInfo?.role === "Doctor" && (
                      <>
                        <li>
                          <span className="info-title">Field of expertise</span>
                          <span className="info-desc">
                            {userInfo?.specialty?.name}
                          </span>
                        </li>
                        <li>
                          <span className="info-title">Address</span>
                          <span className="info-desc">
                            {userInfo?.address || "Gulberg,Lahore"}{" "}
                          </span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-10">
                <div className="working-hour-table mt-md-50">
                  {userInfo?.role === "Doctor" ? (
                    <>
                      <div className="section-heading mb-30">
                        <span className="tagline">Working Hours</span>
                        <h2 className="title">Working Hours</h2>
                      </div>
                      <ul>
                        <li style={{ fontWeight: "bold" }}>
                          <span>Days</span>
                        </li>
                        {userInfo?.availability?.days.map((day, index) => (
                          <>
                            <li>
                              <span key={index}>{day}</span>
                            </li>
                          </>
                        ))}
                        <li style={{ fontWeight: "bold" }}>
                          <span>Time Slots</span>
                        </li>
                        {userInfo?.availability?.timeSlots.map(
                          (time, index) => (
                            <>
                              <li>
                                <span key={index}>{time}</span>
                              </li>
                            </>
                          )
                        )}
                      </ul>
                      <br />
                      <div className="section-heading ">
                        <span className="tagline">Appointment</span>
                        <h2 className="title">Appointments</h2>
                        {bookings?.length ? (
                          <div className="booking-list">
                            {bookings.map((booking) => (
                              <div
                                key={booking?._id}
                                className={`booking-card `}
                              >
                                <div className="booking-details">
                                  <h2 className="booking-date">
                                    {booking?.date}
                                  </h2>
                                  <div className="booking-time">
                                    {booking?.timeSlot}
                                  </div>
                                  <div className="booking-with">
                                    Patient: {booking?.user?.name}
                                  </div>
                                  <div className="booking-created">
                                    Created on:{" "}
                                    {new Date(
                                      booking?.createdAt
                                    ).toLocaleString()}
                                  </div>
                                </div>
                                <button
                                  className="cancel-booking-btn"
                                  style={{
                                    pointerEvents: `${
                                      booking?.isValid === false
                                        ? "none"
                                        : "auto"
                                    }`,
                                  }}
                                  onClick={() => onCancel(booking?._id)}
                                >
                                  {booking?.isValid === false
                                    ? "Canceled"
                                    : "Cancel"}
                                </button>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <>No bookings available</>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="section-heading mb-30">
                        <span className="tagline">My Bookings</span>
                        <h2 className="title">My Bookings</h2>
                        {bookings?.length ? (
                          <div className="booking-list">
                            {bookings.map((booking) => (
                              <div
                                key={booking?._id}
                                className={`booking-card `}
                              >
                                <div className="booking-details">
                                  <h2 className="booking-date">
                                    {booking?.date}
                                  </h2>
                                  <div className="booking-time">
                                    {booking?.timeSlot}
                                  </div>
                                  <div className="booking-with">
                                    Booking with: {booking?.bookingWith?.name}
                                  </div>
                                  <div className="booking-created">
                                    Created on:{" "}
                                    {new Date(
                                      booking?.createdAt
                                    ).toLocaleString()}
                                  </div>
                                </div>
                                {booking?.isValid === false ? (
                                  <div
                                    style={{
                                      display: "flex",
                                      gap: "8px",
                                      color: "red",
                                      alignItems: "center",
                                    }}
                                  >
                                    <i className="fa fa-exclamation-triangle"></i>
                                    <div>Canceled</div>
                                  </div>
                                ) : (
                                  <button
                                    className="cancel-booking-btn"
                                    style={{
                                      pointerEvents: `${
                                        booking?.isValid === false
                                          ? "none"
                                          : "auto"
                                      }`,
                                    }}
                                    onClick={() => onCancel(booking?._id)}
                                  >
                                    Cancel
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <>No bookings available</>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default withAuth(DoctorDetails);
