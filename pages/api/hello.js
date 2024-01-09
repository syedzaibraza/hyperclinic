// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import Cookies from "js-cookie";

// export default function APIPOST(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }

const queryCors = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: queryCors,
});

api.interceptors.request.use(
  (request) => {
    const token = Cookies.get("token");
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export const ApiPost = (url, body) => {
  return api.post(queryCors + url, body, {
    withCredentials: true,
  });
};

export const ApiGet = (url) => {
  return api.get(url);
};

export const ApiGetBookings = (url) => {
  return api.get(url);
};

export const ApiGetBody = (url, body) => {
  return api.get(url, body);
};

export const ApiPatch = (url, body) => {
  return api.patch(url, body);
};
