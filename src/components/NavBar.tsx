import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";
import { Link } from "react-router-dom";

// interface Props{
//   onSearch: (searchtext: string)=>void;
// }

export const NavBar = () => {
  //{onSearch}: Props
  return (
    // justifyContent='space-between'
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit='cover'></Image>
      </Link>
      <SearchInput
      // onSearch={onSearch}
      ></SearchInput>
      <ColorModeSwitch />
    </HStack>
  );
};
