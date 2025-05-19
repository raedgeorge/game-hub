import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient from "../services/api-client";

const useGames = (gameQuery: GameQuery) =>
  useQuery<Game[], Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery?.genre?.id,
            parent_platforms: gameQuery?.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data.results),
  });
export default useGames;

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
