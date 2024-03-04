import { Box, Center, SimpleGrid, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LuxuryItemCard from "./LuxuryItemCard";

function LuxuryCategories() {
    return (
        <Box p={"5vw"}>
            <Center mb={8}><Text letterSpacing={3} fontSize={'25px'} fontWeight={500}>LUXURY CATEGORIES</Text></Center>
            <SimpleGrid mx={'9vw'} columns={{ base: 2, lg: 5 }} spacingX={5} placeItems={'center'}>
                <LuxuryItemCard
                    ImageSrc={'http://bellavitaorganic.com/cdn/shop/files/intense_1.jpg?v=1702643236&width=800'}
                    Title={'LUXURY PERFUMES'}
                    LinkTo={'/'} />
                <LuxuryItemCard
                    ImageSrc={'http://bellavitaorganic.com/cdn/shop/files/3_c364391f-45a0-4f2f-8ab2-babe0720a752.jpg?v=1691575834&width=300'}
                    Title={'BODY WASHES'}
                    LinkTo={'/'} />
                <LuxuryItemCard
                    ImageSrc={'https://bellavitaorganic.com/cdn/shop/files/lotion-new.jpg?v=1693994675&width=300'}
                    Title={'BODY LOTIONS'}
                    LinkTo={'/'} />
                <LuxuryItemCard
                    ImageSrc={'https://bellavitaorganic.com/cdn/shop/files/p4.jpg?v=1691475245&width=300'}
                    Title={'BODY DEOS'}
                    LinkTo={'/'} />
                <LuxuryItemCard
                    ImageSrc={'https://bellavitaorganic.com/cdn/shop/files/Artboard_4_copy_05b3b2ed-5440-4463-b119-bedcd60ed5c1.jpg?v=1700227583&width=300'}
                    Title={'GIFT SETS'}
                    LinkTo={'/'} />
            </SimpleGrid>
        </Box>
    )
}

export default LuxuryCategories;
