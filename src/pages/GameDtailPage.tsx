import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";

export const GameDtailPage = () => {
  const { slug } = useParams();
  const {data: game, isLoading, error} = useGame(slug!); // ! means slug will never be null

  if(isLoading) return <Spinner/>;
  if(error || !game) return;

  return (
    <>
    <Heading>{game.name}</Heading>
    <Text>{game.description_raw}</Text>
    </>
  )
};
