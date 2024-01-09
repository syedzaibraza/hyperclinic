import Link from "next/link";
import React, { useState } from "react";
import { Blog, Doctor, Home, Login, Pages, Services, Shop } from "./Menu";
import { useSelector } from "react-redux";

const MobileMenu = ({ mobileTrigger, setMobileTrigger }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };

  const { isLoggedIn, userInfo } = useSelector((state) => state);
  return (
    <div
      className={`slide-panel mobile-slide-panel ${
        mobileTrigger ? "show-panel" : ""
      }`}
    >
      <div className="panel-overlay" onClick={() => setMobileTrigger()} />
      <div className="panel-inner">
        <div className="panel-logo">
          <img src="assets/img/logo.png" alt="" />
        </div>
        <nav className="mobile-menu">
          <ul className="primary-menu">
            <li className="active">
              <a href="#">
                Home
                <span
                  className="dd-trigger"
                  onClick={() => activeMenuSet("demo")}
                >
                  <i className="fas fa-angle-down" />
                </span>
              </a>
              <ul className="sub-menu" style={activeLi("demo")}>
                <Home />
              </ul>
            </li>
            <li>
              <Link href="/labs">Labs</Link>
            </li>

            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <a href="#">
                Pages
                <span
                  className="dd-trigger"
                  onClick={() => activeMenuSet("Pages")}
                >
                  <i className="fas fa-angle-down" />
                </span>
              </a>
              <ul className="sub-menu" style={activeLi("Pages")}>
                <Services />

                <Pages />
              </ul>
            </li>
            <li>
              <a href="#">
                Doctors
                <span
                  className="dd-trigger"
                  onClick={() => activeMenuSet("Doctor")}
                >
                  <i className="fas fa-angle-down" />
                </span>
              </a>
              <ul className="sub-menu" style={activeLi("Doctor")}>
                <Doctor />
              </ul>
            </li>
            <li>
              <a href="#">
                Blog
                <span
                  className="dd-trigger"
                  onClick={() => activeMenuSet("Blog")}
                >
                  <i className="fas fa-angle-down" />
                </span>
              </a>
              <ul className="sub-menu" style={activeLi("Blog")}>
                <Blog />
              </ul>
            </li>
            <li>
              <a href="#">
                Shop
                <span
                  className="dd-trigger"
                  onClick={() => activeMenuSet("shop")}
                >
                  <i className="fas fa-angle-down" />
                </span>
              </a>
              <ul className="sub-menu" style={activeLi("shop")}>
                <Shop />
              </ul>
            </li>
            <li className="active">
              <Link href="/contact">Contact</Link>
            </li>
            {isLoggedIn ? (
              <li>
                <Link href="/profile">
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
                  <Login />
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
        <a href="#" className="panel-close" onClick={() => setMobileTrigger()}>
          <i className="fal fa-times" />
        </a>
      </div>
    </div>
  );
};
export default MobileMenu;
