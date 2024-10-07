import { HStack , Image} from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import { ColorModeSwitch } from './ColorModeSwitch'
import { SearchInput } from './SearchInput'

// interface Props{
//   onSearch: (searchtext: string)=>void;
// }

export const NavBar = () => {  //{onSearch}: Props
  return (
    // justifyContent='space-between' 
  <HStack padding='10px'> 
    <Image src={logo} boxSize='60px'></Image>
    <SearchInput 
    // onSearch={onSearch}
    ></SearchInput>
    <ColorModeSwitch/>
  </HStack>
  )
}
