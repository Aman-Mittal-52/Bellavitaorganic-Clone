import { Box, Flex, Input, SimpleGrid, Text } from "@chakra-ui/react";

import FooterTopLists from "./Footer-Components/FooterTopLists";

import './Footer.css'

function Footer() {
    return (
        <Box px={'3vw'} bg={'RGBA(0, 0, 0, 0.68)'} color={'#fff'}>
            <FooterTopLists/>
        </Box>
    )
}

export default Footer;