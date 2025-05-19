import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "11cf95b9ed7e4b3e961950b3d778a375",
  },
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

class ApiCliet<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data.results);
  };
}

export default ApiCliet;
