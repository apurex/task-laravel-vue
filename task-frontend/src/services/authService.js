import axios from "axios";

const http = axios.create({
  baseURL: `http://localhost:8000/api`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

http.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export default {
  login(data) {
    return http.post("/login", data);
  },
  register(data) {
    return http.post("/register", data);
  },
  me() {
    return http.get("/user");
  },
};