import { Box, Image, Text } from "@chakra-ui/react";
import { CheckCircleIcon, StarIcon } from '@chakra-ui/icons'

function WomenProduct() {
    return (
        <Box m={45} h={"fit-content"} w={"30%"}>
            <Box w={'100%'} h={'100%'}>
                <Image w={'100%'} h={'100%'} objectFit={'cover'} src='https://bellavitaorganic.com/cdn/shop/files/OCEANMan.jpg?v=1693289108&width=300' />
            </Box>
            <Box py={3}>
                <Text fontSize={{lg:10,base:5}} fontWeight={500} className="zIndex" opacity={0.6}>EAU DE PARFUM FOR MEN</Text>
                <Text w={'25vw'} fontSize={15} letterSpacing={'1px'} fontWeight={600} textOverflow={'ellipsis'} whiteSpace={'nowrap'} overflow={'hidden'}>HOT MESS PERFUME FOR MEN - 100ml</Text>
            </Box>
            <Box fontWeight={400}>
                <StarIcon color={'yellow.300'} /> {(Math.random() * 10).toFixed(1)} {'  | '}
                <CheckCircleIcon ml={3} color={'blue'} /> {`(${Math.floor(Math.random() * 100)} reviews)`}
            </Box>
            <Box p={1.5}>
                <Text fontWeight={700}>{`₹ ${Math.floor(Math.random() * 100)}9.00  `}<Text opacity={0.5} className="zIndex" as={'s'}>₹ 1499</Text></Text>
            </Box>
            <Box
                justifyContent="center"
                className="ProductBtn"
                alignItems="center"
                fontSize={'1.6vw'}
                cursor="pointer"
                display="flex"
                color="white"
                bg="black"
                w={'100%'}
                p={3}
            >
                ADD TO CART
            </Box>
        </Box>
    )
}

export default WomenProduct;




// <Box h={'490px'} w={'250px'} zIndex={'-10'}>
