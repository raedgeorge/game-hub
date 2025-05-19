import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "11cf95b9ed7e4b3e961950b3d778a375",
  },
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
