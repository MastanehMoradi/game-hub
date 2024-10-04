import { HStack, List, ListItem, Image, Button, Heading, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";


interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

export const GenreList = ({onSelectedGenre, selectedGenreId}: Props) => {
   const { data, isLoading, error } = useGenres();

   //these if conditions are not required anymore
  if(error) return null;
  if(isLoading) return <Spinner></Spinner>

  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genre</Heading>
    <List>
      {data?.results.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px' objectFit='cover' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}></Image>
            <Button whiteSpace= {'normal'} textAlign='left'  fontWeight={genre.id === selectedGenreId ?'bold' : 'normal'}  fontSize='lg' variant='link'  onClick={(()=> onSelectedGenre(genre) )}>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};
