import {
    Box,
    Flex,
    Spacer,
    Image
} from '@chakra-ui/react'
import { CiUser } from "react-icons/ci";
import { IoBasketOutline } from "react-icons/io5";

import './Navbar.css'

import NavbarTopCarousel from "./Navbar sub-components/NavBarTopCarousel";
import NavbarSearchBox from './Navbar sub-components/NavbarSearchBox';
import NavbarCategory from './Navbar sub-components/NavbarCategory';

function Navbar() {
    return (
        <Box maxWidth={'100vw'} w={'100vw'} h={'80vh'} id='Navbar'>
            <Box className='navbarOnly'> 
                <NavbarTopCarousel />
                <Flex p={['30px 20em 30px','30px 150px']} h={10} alignItems={'center'}>
                    <NavbarSearchBox />
                    <Spacer />
                    <Box>
                        <Image h={5} src={"https://bellavitaorganic.com/cdn/shop/files/Bella_Vita_Logo_360_E_2x_White.png?height=30&v=1689597318"} />
                    </Box>
                    <Spacer />
                    <Flex w={28} color={'#fff'} justifyContent={'space-between'}>
                        <CiUser size={30} />
                        <IoBasketOutline size={30} />
                    </Flex>
                </Flex>
                <NavbarCategory/>
            </Box>
        </Box>
    )
}

export default Navbar;