import { Box, Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { CardGameSkeleton } from "./CardGameSkeleton";
import { GameCardContainer } from "./GameCardContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

// interface Props {
//   gameQuery: GameQuery | null;
// }

export const Gamegrid = () => {  //{ gameQuery }: Props
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(); //gameQuery
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) <Text>{error.message}</Text>;

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <Box padding="10px">
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner></Spinner>}
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
          {isLoading &&
            skeletons.map((Skeleton) => (
              <GameCardContainer key={Skeleton}>
                <CardGameSkeleton />
              </GameCardContainer>
            ))}

          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}

          {/* {data?.results.map((game) => (
        //   <li key={game.id}>{game.name}</li>
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))} */}
        </SimpleGrid>
      </InfiniteScroll>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? "Loading...." : "Load More"}
        </Button>
      )}
    </Box>
  );
};
