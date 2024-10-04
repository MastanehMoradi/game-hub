import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";


interface Props{
    onSelectePlatform: (platform:Platform)=> void;
    selectedPlatformId?: number;
}


export const PlatformSelector = ({onSelectePlatform, selectedPlatformId}: Props) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} >
       {selectedPlatform?.name || 'Platforms' }
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem onClick={()=> onSelectePlatform(platform)}   key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
