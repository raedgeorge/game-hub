import { CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

const GameCardSkeleton = () => {
  return (
    <GameCardContainer>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </GameCardContainer>
  );
};

export default GameCardSkeleton;
