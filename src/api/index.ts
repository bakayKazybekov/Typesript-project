import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);