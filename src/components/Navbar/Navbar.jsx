import {
    Box,
} from '@chakra-ui/react'
import MainNavbar from './Navbar sub-components/main-navbar';

function Navbar() {
    return (
        <Box w={'100vw'} h={'38vw'} id='HomePageNavbar'>
            <MainNavbar />
        </Box>
    )
}

export default Navbar;