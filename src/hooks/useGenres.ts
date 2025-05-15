import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
  action: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoaidng, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => setGenres(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, []);

  return { genres, error, isLoaidng };
};

export default useGenres;
