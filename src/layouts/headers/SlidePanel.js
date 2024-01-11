import React from "react";

const SlidePanel = ({ sidebarTrigger, setSidebarTrigger }) => {
  return (
    <div
      className={`slide-panel off-canvas-panel ${
        sidebarTrigger ? "show-panel" : ""
      }`}
    >
      <div className="panel-overlay" onClick={() => setSidebarTrigger()} />
      <div className="panel-inner">
        <div className="canvas-logo">
          <img src="assets/img/logo.png" alt="" />
        </div>
        <div className="about-us">
          <h5 className="canvas-widget-title">About Us</h5>
          <p>
            Welcome to Seeva, a leading healthcare service provider known for
            its world-class medical facilities and a team of highly experienced
            doctors.
          </p>
        </div>
        <div className="contact-us">
          <h5 className="canvas-widget-title">Contact Us</h5>
          <ul>
            <li>
              <i className="far fa-map-marker-alt" />
              Lahore , Pakistan
            </li>
            <li>
              <i className="far fa-envelope-open" />
              <a href="mailto:support@qolle.com">support@seeva.com</a>
              <a href="mailto:info@qolle.com">info@seeva.com</a>
            </li>
            <li>
              <i className="far fa-phone" />
              <a href="tel:+923001234567">+92 (300)1234567</a>
            </li>
          </ul>
        </div>
        <a href="#" className="panel-close" onClick={() => setSidebarTrigger()}>
          <i className="fal fa-times" />
        </a>
      </div>
    </div>
  );
};
export default SlidePanel;
