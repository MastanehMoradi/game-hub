import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}></Box>
      <Heading>Oops</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "The page does not exist."
          : "An unxpected error occured."}
      </Text>
    </>
  );
};
