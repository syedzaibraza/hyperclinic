// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default function APIPOST(req, res) {
  res.status(200).json({ name: "John Doe" });
}

const queryCors = process.env.NEXT_PUBLIC_API_URL;

export const ApiPost = (url, body) => {
  axios.post(queryCors + url, body);
};
