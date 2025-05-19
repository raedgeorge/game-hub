import { useQuery } from "@tanstack/react-query";
import ApiCliet, { FetchResponse } from "../services/api-client";
import ms from "ms";

export interface Genre {
  id: number;
  name: string;
  action: string;
  image_background: string;
}

const apiClient = new ApiCliet<Genre>("/genres");

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useGenres;
