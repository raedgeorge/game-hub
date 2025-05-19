import { BsChevronDown } from "react-icons/bs";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { useState } from "react";

interface Props {
  onSelectPlatform: (platformId: number) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const { data, error } = usePlatforms();

  if (error) return null;

  const platformSelectHandler = (platform: Platform) => {
    setSelectedPlatform(platform);
    onSelectPlatform(platform.id);
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => platformSelectHandler(platform)}
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
