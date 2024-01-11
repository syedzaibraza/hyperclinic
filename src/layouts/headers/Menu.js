import Link from "next/link";
import { Fragment } from "react";
import useLogout from "../../utils/logOut";
import { useRouter } from "next/router";

export const Login = () => {
  const logOut = useLogout();

  return (
    <Fragment>
      <li>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
      </li>
      <li>
        <div className="logoutbutton" onClick={logOut}>
          Logout
        </div>
      </li>
    </Fragment>
  );
};

export const Home = () => (
  <Fragment>
    <li>
      <Link href="/">Home One</Link>
    </li>
    <li>
      <Link href="/index-two">Home Two</Link>
    </li>
    <li>
      <Link href="/index-three">Home Three</Link>
    </li>
    <li>
      <Link href="/index-four">Home Four</Link>
    </li>
    <li>
      <Link href="/index-five">Home Five</Link>
    </li>
  </Fragment>
);
export const Pages = () => (
  <Fragment>
    <li>
      <Link href="/pricing">Pricing Plan</Link>
    </li>
    <li>
      <Link href="/faq">Help &amp; FAQ</Link>
    </li>
    <li>
      <Link href="/gallery">Our Gallery</Link>
    </li>
    <li>
      <Link href="/appointments">Appointment</Link>
    </li>
  </Fragment>
);

export const Services = () => {
  const pathname = useRouter().pathname;
  return (
    <Fragment>
      <li className={`${pathname === "/labs" && "active"} `}>
        <Link href="/labs">Labs</Link>
      </li>
      <li className={`${pathname === "/service-two" && "active"} `}></li>{" "}
      <li>
        <Link href="/categories">Categories</Link>
      </li>
    </Fragment>
  );
};
export const Doctor = () => (
  <Fragment>
    <li>
      <Link href="/doctor">Doctor</Link>
    </li>
    <li>
      <Link href="/doctor-details">Doctor Details</Link>
    </li>
  </Fragment>
);
// import Cookies from "js-cookie";
// import { useRouter } from "next/router";

// const logOut = () => {
//   localStorage.removeItem("userInfo");
//   Cookies.remove("token");
//   dispatch({
//     type: "set",
//     isLoggedIn: false,
//     userInfo: null,
//   });
// };
// export const Login = () => (
//   <Fragment>
//     <li>
//       <Link href="/profile">Profile</Link>
//     </li>
//     <li>
//       <Link href={"/"} onClick={() => logOut}>
//         Logout
//       </Link>
//     </li>
//   </Fragment>
// );
export const Blog = () => (
  <Fragment>
    <li>
      <Link href="/blog-standard">Blog Standard</Link>
    </li>
    <li>
      <Link href="/blog-details">Blog Details</Link>
    </li>
  </Fragment>
);
export const Shop = () => (
  <Fragment>
    <li>
      <Link href="/shop">Shop</Link>
    </li>
    <li>
      <Link href="/product-details">Shop Details</Link>
    </li>
  </Fragment>
);
