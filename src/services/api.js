import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org",
  headers: {
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
});
