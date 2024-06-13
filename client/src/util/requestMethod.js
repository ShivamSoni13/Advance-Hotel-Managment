import axios from "axios";

const Base_URL = "https://www.api.mejbanempire.in/";

const menuRequest = axios.create({
  baseURL: Base_URL + "menu",
});

const siteRequest = axios.create({
  baseURL: Base_URL,
});

export { menuRequest, siteRequest };
