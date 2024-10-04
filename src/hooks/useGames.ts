
import { GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";



export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
}

const useGames = (gameQuery: GameQuery | null) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery?.genre?.id,
            parent_platform: gameQuery?.platform?.id,
            ordering: gameQuery?.sortOreder,
            search: gameQuery?.searchText,
          },
        })
        .then((res) => res.data),
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
