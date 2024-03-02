import {
    Box,
    Flex,
    Spacer,
    Image,
    Text,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerHeader,
    DrawerContent,
    DrawerBody,
    Divider,
    Icon
} from '@chakra-ui/react'
import { Link as ChakraLink } from '@chakra-ui/react'
import { CiUser } from "react-icons/ci";
import { IoBasketOutline } from "react-icons/io5";
import { HamburgerIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom'

import '../Navbar.css'

import NavbarTopCarousel from './NavBarTopCarousel';
import NavbarSearchBox from './NavbarSearchBox';
import Navbarmenu from './Navbarmenu';


function MainNavbar({ bgcColor }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box bg={bgcColor} className='navbar bg-w--c-b' w={'full'} pos={'fixed'} >
            <NavbarTopCarousel />
            <Flex p={{ base: '30px 30px', lg: '30px 150px' }} h={10} alignItems={'center'}>
                <HamburgerIcon onClick={onOpen} className='c-b' color={'#fff'} mt={4} display={{ base: "block", lg: "none" }} fontSize={35} />
                <Drawer onClose={onClose} isOpen={isOpen} size={'md'} placement='left'>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>{`drawer contents`}</DrawerHeader>
                        <DrawerBody>
                            <Flex alignItems={'center'}>
                                <CiUser className='c-b' width={'20px'} size={20} />
                                <Link to={'/login'}> <ChakraLink p={3}>Login</ChakraLink> </Link>
                            </Flex>
                            <Link to='/pages/build-a-box'>
                                <Text className='rubik' fontSize={20} py={5} px={3} >Crazy Deals</Text>
                            </Link>
                            <Divider />
                            <Link to='/collections/all-products'>
                                <Text className='rubik' fontSize={20} py={5} px={3} >Shop All</Text>
                            </Link>
                            <Divider />
                            <Link to='/collections/bestsellers'>
                                <Text className='rubik' fontSize={20} py={5} px={3} >Bestsellers</Text>
                            </Link>
                            <Divider />
                            <Link to='/collections/luxury-perfumes'>
                                <Flex alignItems={'center'}>
                                    <Text className='rubik' fontSize={20} py={5} px={3} >Perfumes</Text>
                                    <Spacer />
                                    <Icon as={ArrowForwardIcon} />
                                </Flex>
                            </Link>
                            <Divider />
                            <Link to='/collections/all-natural-body-care-products'>
                                <Flex alignItems={'center'}>
                                    <Text className='rubik' fontSize={20} py={5} px={3} >Bath & Body</Text>
                                    <Spacer />
                                    <Icon as={ArrowForwardIcon} />
                                </Flex>
                            </Link>
                            <Divider />
                            <Link to='/collections/new-arrival'>
                                <Text className='rubik' fontSize={20} py={5} px={3} >New Arrivals</Text>
                            </Link>
                            <Divider />
                            <Link to='/collections/natural-skin-care-products'>
                                <Flex alignItems={'center'}>
                                    <Text className='rubik' fontSize={20} py={5} px={3} >Skincare</Text>
                                    <Spacer />
                                    <Icon as={ArrowForwardIcon} />
                                </Flex>
                            </Link>
                            <Divider />
                            <Link to='/collections/git-sets'>
                                <Flex alignItems={'center'}>
                                    <Text className='rubik' fontSize={20} py={5} px={3} >Gifting</Text>
                                    <Spacer />
                                    <Icon as={ArrowForwardIcon} />
                                </Flex>
                            </Link>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
                <Spacer display={{ base: "none", sm: "block", '2xl': "none" }} />
                <NavbarSearchBox />
                <Spacer />
                <Box borderRadius={6} bg={"#000"} p={3}>
                    <Link to={'/'}>
                        <Image h={5} src={"https://bellavitaorganic.com/cdn/shop/files/Bella_Vita_Logo_360_E_2x_White.png?height=30&v=1689597318"} />
                    </Link>
                </Box>
                <Spacer />
                <Flex w={28}  color={'#fff'} justifyContent={'space-between'}>
                    <CiUser className='c-b' size={30} />
                    <IoBasketOutline className='c-b' size={30} />
                </Flex>
            </Flex>
            <Navbarmenu />
        </Box>
    )
}

export default MainNavbar;