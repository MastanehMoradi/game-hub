import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { Gamegrid } from "./components/Gamegrid";
import { GenreList } from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {

const [selectedGenre, setSelectedGenre] = useState<Genre|null>(null);


  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList onSelectedGenre={(genre) => setSelectedGenre(genre)}></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Gamegrid selectedGenre={selectedGenre}></Gamegrid>
      </GridItem>
    </Grid>
  );
}

export default App;
