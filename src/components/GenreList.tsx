import { HStack, List, ListItem, Image, Text, Spinner, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";


interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

export const GenreList = ({onSelectedGenre}: Props) => {
  const { data, isLoading, error } = useGenres();

  if(error) return null;
  if(isLoading) return <Spinner></Spinner>

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}></Image>
            <Button fontSize='lg' variant='link'  onClick={(()=> onSelectedGenre(genre) )}>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
