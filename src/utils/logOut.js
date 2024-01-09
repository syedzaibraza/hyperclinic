import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import PreLoader from "../components/PreLoader";
import { useState } from "react";

const useLogout = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const logOut = () => {
    router.push("/");
    setTimeout(() => {
      localStorage.removeItem("userInfo");
      Cookies.remove("token");
      dispatch({
        type: "set",
        isLoggedIn: false,
        userInfo: null,
      });
    }, 1000);
  };

  return logOut;
};

export default useLogout;
