import { Game } from "../entities/Game"
import { DefenitionItem } from "../components/DefenitionItem";
import { CriticScore } from "../components/CriticScore";
import { SimpleGrid, Text } from "@chakra-ui/react";


interface Props {
    game: Game;
}

export const GameAttributes = ({game}: Props) => {
  return (
    <SimpleGrid columns={2} as='dl'>
        <DefenitionItem term="Platforms">
          {game.parent_platforms?.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </DefenitionItem>

        <DefenitionItem term="Metascore">
          <CriticScore score={game.metacritic}></CriticScore>
        </DefenitionItem>

        <DefenitionItem term="Genres">
          {game.genres?.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefenitionItem>

        <DefenitionItem term="Publishers">
          {game.publishers?.map((publisher) => (
            <Text key={publisher.id}>{publisher.name}</Text>
          ))}
        </DefenitionItem>
      </SimpleGrid>
  )
}
