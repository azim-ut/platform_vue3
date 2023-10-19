import axios from "axios";

export const AxiosApi = axios.create({
    withCredentials: false,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    },
    baseURL: import.meta.env.VITE_BASE_URL
})

export const ApiEndpoints = {
    notification: "/api/notification"
}