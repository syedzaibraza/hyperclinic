import React, { Fragment, useEffect } from "react";
import ScrollTop from "../components/ScrollTop";
import { animation, niceSelect, progressBar, stickyNav } from "../utils";
import Footer from "./footers/Footer";
import HeadersLayouts from "./headers/HeadersLayouts";
import Header1 from "./headers/Header1";
import Footer1 from "./footers/Footer1";
import Footer2 from "./footers/Footer2";

const Layouts = ({
  children,
  footer,
  headerTopbar,
  noNewsletters,
  position,
  noheader,
  noFooter,
}) => {
  useEffect(() => {
    animation();
    niceSelect();
    stickyNav();
    progressBar();
  }, []);

  return (
    <Fragment>
      <Header1 />
      {children}
      <Footer1 />
      <ScrollTop />
    </Fragment>
  );
};
export default Layouts;
