import axios from "axios";

const baseURL = "https://trending.bid";

export const trendingAPIInstance = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});
