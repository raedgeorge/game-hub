import { BsChevronDown } from "react-icons/bs";
import { Button, MenuButton, MenuList, Menu, MenuItem } from "@chakra-ui/react";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
