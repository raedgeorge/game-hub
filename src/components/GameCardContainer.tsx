import { Card } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Card borderRadius={10} width="300px" overflow="hidden">
      {children}
    </Card>
  );
};

export default GameCardContainer;
