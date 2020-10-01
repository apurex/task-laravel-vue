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
    list() {
        return http.get("/taks/crud");
    },
    store(data) {
        return http.post("/taks/crud", data);  
    },
    update(id, data) {
        return http.put("/taks/crud/" + id, data);  
    },
    delete(id) {
        return http.delete("/taks/crud/" + id);  
    }
}