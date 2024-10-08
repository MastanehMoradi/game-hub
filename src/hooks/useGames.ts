import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from 'ms'
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";


const apiClient = new APIClient<Game>("/games");

const useGames = () =>   //gameQuery: GameQuery | null
{
  const gameQuery = useGameQueryStore(s=> s.gameQuery)

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getALl({
        params: {
          genres: gameQuery?.genreId,
          parent_platform: gameQuery?.platformId,
          ordering: gameQuery?.sortOreder,
          search: gameQuery?.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next?  allPages.length + 1 : undefined;
    },
    initialPageParam:1,
    staleTime: ms('24h'),    //24*60*60*1000, //24 h
  });

}
  

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
