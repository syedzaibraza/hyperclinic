// import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";
import { createStore } from "redux";

const initialState = {
  isLoggedIn: false,
  userInfo: null,
  token: Cookies.get("token"),
  doctors: null,
};

const changeState = (state = initialState, { type, payload, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    default:
      return state;
  }
};

const store = createStore(changeState);
export default store;

// case "notify":
//   let current = [...state.notifications];
//   current.push({ ...payload, id: uuidv4() });
//   return { ...state, notifications: current };
// case "closeNotification":
//   let currentOpen = [...state.notifications];
//   currentOpen = currentOpen.filter((item) => item.id !== payload);
//   return { ...state, notifications: currentOpen };
