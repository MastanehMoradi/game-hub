import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { CardGameSkeleton } from "./CardGameSkeleton";

export const Gamegrid = () => {
  const { games, error, isLoading} = useGames();
  const skeletons = [1,2,3,4,5,6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} spacing={10} padding='10px'>
        {isLoading && skeletons.map(Skeleton => <CardGameSkeleton key={Skeleton}></CardGameSkeleton>)}
        {games.map((game) => (
        //   <li key={game.id}>{game.name}</li>
        <GameCard key={game.id} game={game}/>
        ))}
      </SimpleGrid>
    </>
  );
};
