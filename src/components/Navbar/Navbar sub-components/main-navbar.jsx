import {
    Box,
    Flex,
    Spacer,
    Image
} from '@chakra-ui/react'
import { CiUser } from "react-icons/ci";
import { IoBasketOutline } from "react-icons/io5";
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom'

import '../Navbar.css'

import NavbarTopCarousel from './NavBarTopCarousel';
import NavbarSearchBox from './NavbarSearchBox';
import Navbarmenu from './Navbarmenu';


function MainNavbar({ bgcColor }) {
    return (
        <Box bg={bgcColor} w={'full'}>
            <NavbarTopCarousel />
            <Flex p={{ base: '30px 30px', lg: '30px 150px' }} h={10} alignItems={'center'}>
                <HamburgerIcon color={'#fff'} mt={8} display={{ base: "block", lg: "none" }} fontSize={35} />
                <Spacer display={{ base: "none", sm: "block", '2xl': "none" }} />
                <NavbarSearchBox />
                <Spacer />
                <Box>
                    <Link to={'/'}>
                        <Image h={5} src={"https://bellavitaorganic.com/cdn/shop/files/Bella_Vita_Logo_360_E_2x_White.png?height=30&v=1689597318"} />
                    </Link>
                </Box>
                <Spacer />
                <Flex w={28} color={'#fff'} justifyContent={'space-between'}>
                    <CiUser size={30} />
                    <IoBasketOutline size={30} />
                </Flex>
            </Flex>
            <Navbarmenu />
        </Box>
    )
}

export default MainNavbar;