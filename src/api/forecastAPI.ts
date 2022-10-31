import axios from "axios";

export const forecastAPI = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_FORECAST_URL
})