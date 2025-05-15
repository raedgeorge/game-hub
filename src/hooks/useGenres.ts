import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  action: string;
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
