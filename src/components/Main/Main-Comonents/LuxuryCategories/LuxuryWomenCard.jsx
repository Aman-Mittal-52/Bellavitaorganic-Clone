import { Box, Flex, Spacer, Image } from "@chakra-ui/react";
import WomenProduct from "./WomenProduct";

function LuxuryWomenCard(){
    return(
        <Flex w={'100vw'}  justifyContent={'space-between'} h={'40vw'}>
            <Image w={'40%'} h={'100%'} src="https://bellavitaorganic.com/cdn/shop/files/Luxe-Perfumes_1.jpg?v=1696580210&width=750"></Image>
            <WomenProduct/>
        </Flex>
    )
}

export default LuxuryWomenCard;