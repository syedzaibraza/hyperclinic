import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Blog, Doctor, Home, Login, Pages, Services, Shop } from "./Menu";
import MobileMenu from "./MobileMenu";
import SlidePanel from "./SlidePanel";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { ApiGet } from "../../../pages/api/hello";
import { toast } from "react-toastify";
import useLogout from "../../utils/logOut";

const Header1 = ({ headerTopbar, position }) => {
  const [sidebarTrigger, setSidebarTrigger] = useState(false);
  const [mobileTrigger, setMobileTrigger] = useState(false);
  const { isLoggedIn, userInfo } = useSelector((state) => state);
  const dispatch = useDispatch();
  const pathname = useRouter().pathname;
  const logOut = useLogout();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      dispatch({
        type: "set",
        isLoggedIn: true,
        userInfo: JSON.parse(userInfo),
      });
    }
  }, [isLoggedIn]);
  useEffect(() => {
    GetDoctors();
  }, []);
  const GetDoctors = () => {
    ApiGet("/user/doctors").then((res) => {
      dispatch({
        type: "set",
        doctors: res.data,
      });
    });
  };
  return (
    <header
      className={`template-header sticky-header header-one ${
        position ? position + "-header" : ""
      }`}
    >
      {headerTopbar && (
        <div className="header-topbar d-none d-md-block">
          <div className="container-fluid container-1400">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-4">
                <ul className="topbar-menu">
                  <li>
                    <Link href="/faq">Faq</Link>
                  </li>
                  <li>
                    <Link href="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-8">
                <ul className="contact-info">
                  <li>
                    <a href="#">
                      <i className="far fa-envelope" /> Email :
                      hotmail@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-phone" /> Call US : +012 (345) 6789
                    </a>
                  </li>
                  <li>
                    <div className="social-icons">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container-fluid container-1400">
        <div className="header-navigation">
          <div className="header-left">
            <div className="site-logo">
              <Link href="/">
                <img src="/assets/img/logo.png" alt="Hyper Clinic" />
              </Link>
            </div>
            <nav className="site-menu menu-gap-left d-none d-xl-block">
              <ul className="primary-menu">
                <li className={`${pathname === "/" && "active"} `}>
                  <Link href="/">
                    <a>
                      Home
                      {/* <span className="dd-trigger">
                        <i className="far fa-plus" />
                      </span> */}
                    </a>
                  </Link>
                  {/* <ul className="sub-menu">
                    <Home />
                  </ul> */}
                </li>
                <li className={`${pathname === "/about" && "active"} `}>
                  <Link href="/about">About</Link>
                </li>

                <li className={`${pathname === "/categories" && "active"} `}>
                  <Link href="/categories">
                    <a>
                      Services
                      <span className="dd-trigger">
                        <i className="far fa-plus" />
                      </span>
                    </a>
                  </Link>
                  <ul className="sub-menu">
                    <Services />
                  </ul>
                </li>
                <li
                  className={`${pathname === "/symptoms-checker" && "active"} `}
                >
                  <Link href="/symptoms-checker">Symptoms Checker</Link>
                </li>
                <li className={`${pathname === "/doctor" && "active"} `}>
                  <Link href="/doctor">
                    <a>Doctors</a>
                  </Link>
                </li>
                <li className={`${pathname === "/appointments" && "active"} `}>
                  <Link href="/appointments">Appointments</Link>
                </li>
                <li className={`${pathname === "/contact" && "active"} `}>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <nav className="site-menu menu-gap-left d-none d-xl-block">
              <ul className="primary-menu">
                {isLoggedIn ? (
                  <li>
                    <Link
                      href={`${
                        userInfo?.role === "admin" ? "/dashboard" : "/profile"
                      }`}
                    >
                      <button
                        className="template-btn text-center template-btn-primary mt-sm-30  wow fadeInRight"
                        data-wow-delay="0.3s"
                      >
                        <i
                          className="far fa-user"
                          style={{ paddingRight: "8px" }}
                        />{" "}
                        {userInfo?.name}
                      </button>
                    </Link>
                    <ul className="sub-menu">
                      {userInfo?.role === "admin" ? (
                        <li>
                          <div className="logoutbutton" onClick={logOut}>
                            Logout
                          </div>
                        </li>
                      ) : (
                        <Login />
                      )}
                    </ul>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link href="/login">
                        <button
                          className="template-btn text-center template-btn-primary mt-sm-30 wow fadeInRight"
                          data-wow-delay="0.3s"
                        >
                          Login
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href="/signup">
                        <button
                          className="template-btn text-center template-btn-primary mt-sm-30 wow fadeInRight"
                          data-wow-delay="0.3s"
                        >
                          SignUp
                        </button>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>

          <div className="header-right">
            <ul className="extra-icons">
              <li className="d-none d-xl-block">
                <div
                  className="off-canvas-btn style-two"
                  onClick={() => setSidebarTrigger(true)}
                >
                  <span />
                </div>
              </li>
              <li className="d-xl-none">
                <a
                  href="#"
                  className="navbar-toggler"
                  onClick={() => setMobileTrigger(true)}
                >
                  <span />
                  <span />
                  <span />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Start Off Canvas */}
      <SlidePanel
        sidebarTrigger={sidebarTrigger}
        setSidebarTrigger={() => setSidebarTrigger(false)}
      />
      {/* End Off Canvas */}
      {/* Start Mobile Panel */}
      <MobileMenu
        mobileTrigger={mobileTrigger}
        setMobileTrigger={() => setMobileTrigger(false)}
      />
      {/* Start Mobile Panel */}
    </header>
  );
};
export default Header1;
