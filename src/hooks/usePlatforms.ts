import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import platforms from "../data/platforms";
import ms from 'ms'
import { Platform } from "../entities/Platform";


// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getALl,
    staleTime:  ms('24h'),  // 24*60*60*1000,
    initialData: platforms
  });
};

export default usePlatforms;
