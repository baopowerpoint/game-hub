import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

const GameCard = ({ game }) => {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <HStack mb={3} justifyContent={"space-between"} mt={"5px"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
