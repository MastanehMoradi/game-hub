import { HStack , Image} from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import { ColorModeSwitch } from './ColorModeSwitch'
import { SearchInput } from './SearchInput'

export const NavBar = () => {
  return (
    // justifyContent='space-between' 
  <HStack padding='10px'> 
    <Image src={logo} boxSize='60px'></Image>
    <SearchInput></SearchInput>
    <ColorModeSwitch/>
  </HStack>
  )
}
