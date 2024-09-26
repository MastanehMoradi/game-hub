import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { CardGameSkeleton } from "./CardGameSkeleton";
import { GameCardContainer } from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery | null;
}

export const Gamegrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px"
    >
      {isLoading &&
        skeletons.map((Skeleton) => (
          <GameCardContainer key={Skeleton}>
            <CardGameSkeleton />
          </GameCardContainer>
        ))}
      {data.map((game) => (
        //   <li key={game.id}>{game.name}</li>
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};
