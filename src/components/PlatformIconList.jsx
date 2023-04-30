import React from "react";
import {
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaPlaystation,
  FaWindows,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";

const PlatformIconList = ({ platforms }) => {
  const iconMap = {
    pc: FaWindows,
    playStation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack>
      {platforms &&
        platforms.map((platform) => (
          <Icon
            key={platform.id}
            color="gray.500"
            as={iconMap[platform.slug]}
          />
        ))}
    </HStack>
  );
};

export default PlatformIconList;
