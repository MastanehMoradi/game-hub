import { GameQuery } from "../App";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";
import APIClient, { FetchResponse } from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery | null) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getALl({
        params: {
          genres: gameQuery?.genre?.id,
          parent_platform: gameQuery?.platform?.id,
          ordering: gameQuery?.sortOreder,
          search: gameQuery?.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next?  allPages.length + 1 : undefined;
    },
    initialPageParam:1
  });

// useData<Game>(
//   "/games",
//   {
//     params: {
//       genres: gameQuery?.genre?.id,
//       platform: gameQuery?.platform?.id,
//       ordering: gameQuery?.sortOreder,
//       search: gameQuery?.searchText
//     },
//   },
//   [gameQuery]
// );

export default useGames;
