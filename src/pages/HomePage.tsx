import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { Gamegrid } from "../components/Gamegrid";
import { GenreList } from "../components/GenreList"; 
import { PlatformSelector } from "../components/PlatformSelector";
import { SortSelector } from "../components/SortSelector";
import { GameHeading } from "../components/GameHeading";
import { Platform } from "../hooks/usePlatforms";

export const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
     
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            // selectedGenreId={gameQuery.genreId}
            // onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id })}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading 
          // gameQuery={gameQuery} 
          />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                // selectedPlatformId={gameQuery.platformId}
                // onSelectePlatform={(platform) =>
                //   setGameQuery({ ...gameQuery, platformId: platform.id })
                // }
              ></PlatformSelector>
            </Box>

            <SortSelector
              // sortOrder={gameQuery.sortOreder}
              // onSelectSortOredr={(sortOreder) =>
              //   setGameQuery({ ...gameQuery, sortOreder })
              // }
            />
          </Flex>
        </Box>
        <Gamegrid 
        // gameQuery={gameQuery}
        ></Gamegrid>
      </GridItem>
    </Grid>
  )
}
