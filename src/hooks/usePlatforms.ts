import { useQuery } from "@tanstack/react-query";
import ApiCliet from "../services/api-client";

const apiClient = new ApiCliet<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
  });

export default usePlatforms;

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
