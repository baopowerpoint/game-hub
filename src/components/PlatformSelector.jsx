import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }) => {
  const { data } = usePlatforms();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "platform"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
