import useData from "./useData";

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;

interface Platform {
  id: number;
  name: string;
  slug: string;
}
