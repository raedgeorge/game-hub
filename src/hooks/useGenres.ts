import { useQuery } from "@tanstack/react-query";
import ApiCliet from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  action: string;
  image_background: string;
}

const apiClient = new ApiCliet<Genre>("/genres");

const useGenres = () => {
  return useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default useGenres;
