import axios from "axios";

import { getToken } from "../services/auth";

const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

if(getToken()) {
  request.defaults.headers.Authorization = `Bearer ${getToken()}`;
}

export default request;
