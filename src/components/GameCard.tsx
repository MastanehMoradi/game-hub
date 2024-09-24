import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, Hide, Image } from '@chakra-ui/react';

interface Props {
    game: Game;
}


export const GameCard = ({game} :Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image}></Image>
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}
