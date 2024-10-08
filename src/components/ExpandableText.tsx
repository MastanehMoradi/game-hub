import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

export const ExpandableText = ({ children }: Props) => {
  const [expnaded, setExpanded] = useState(false);
  const limit = 300;
  
  if (!children) return null;

  if (children.length < limit) return <Text>{children}</Text>;

  const summary = expnaded ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summary}{" "}
      <Button
        size="xs"
        fontWeight="bold"
        marginLeft={1}
        colorScheme="yellow"
        onClick={() => setExpanded(!expnaded)}
      >
        {expnaded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};
