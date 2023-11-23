import axios from "axios";

export const api = axios.create({
  baseURL: "https://authback-b4sh.onrender.com/"
})