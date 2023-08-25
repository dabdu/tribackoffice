import axios from "axios";
import { baseURL } from "../URLS";

export const header = () => {
  const key = localStorage.getItem("token");

  if (key) {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${key}`,
    };
  } else {
    return {
      "Content-Type": "application/json",
    };
  }
};

export const api = axios.create({
  baseURL: baseURL,
  headers: header(),
});
