import axios, { AxiosRequestConfig } from "axios";
import { data } from "framer-motion/client";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fc1ee6d2abe44cb1a3b68f2791c06a51",
  },
});

export class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getALl = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  post = (data: T) => {
    return axiosInstance.post(this.endpoint, data).then((res) => res.data);
  };
}


export default APIClient;