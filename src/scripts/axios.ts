import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const baseURL: string = "https://fakestoreapi.com";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    console.log("Request Failed: ", error);
    const errorMessage =
      (error.response && error.response.data) || error.message;
    return Promise.reject(errorMessage);
  }
);

export default axiosInstance;