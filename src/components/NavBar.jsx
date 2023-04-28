import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/learn-docker.jpg";

const NavBar = () => {
  return (
    <HStack>
      <Image m="10px" src={logo} boxSize="60px" />
      <Text fontWeight="semibold">NavBar</Text>
    </HStack>
  );
};

export default NavBar;
