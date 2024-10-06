import axios from "axios";

export const AUTH_URL = "https://gateway.scan-interfax.ru/api/v1";
export const API_URL = "https://gateway.scan-interfax.ru/api/v1/account";

const $api = axios.create({
    baseURL: API_URL,
});

$api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

$api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            console.error(`API Error: ${error.response.status} - ${error.response.data.message || error.message}`);
        } else {
            console.error(`Network Error: ${error.message}`);
        }
        return Promise.reject(error);
    }
);

const apiService = {
    get: (url, params = {}) => $api.get(url, { params }),
    post: (url, data) => $api.post(url, data),
    put: (url, data) => $api.put(url, data),
    delete: (url) => $api.delete(url),
};

export default { $api, apiService };