import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/learn-docker.jpg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justify="space-between" padding="10px">
      <Image m="10px" src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
