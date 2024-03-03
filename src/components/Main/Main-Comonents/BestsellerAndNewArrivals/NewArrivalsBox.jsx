import { Flex, SimpleGrid, Spacer } from "@chakra-ui/react";
import ProductCard from "../../../UniversalComponents/ProductCard";

function NewArrivalsBox() {
    return (
        <SimpleGrid columns={{base:4,sm:1,md:2,lg:3,xl:4}} spacing={3} mx={'10vw'} placeItems={'center'}>
            <ProductCard
                ImageSrc={'https://bellavitaorganic.com/cdn/shop/files/WhiteOUDTravelKit-01.jpg?v=1709020079&width=300'}
                ProductTag={'APP EXCUSIVE'}
                Title={'OUD WHITE Travel Minis Kit'} />
            <ProductCard
                ImageSrc={"https://bellavitaorganic.com/cdn/shop/files/WhiteoudGiftset-01.jpg?v=1709040820&width=300"}
                ProductTag={'APP EXCUSIVE'}
                Title={'Oud White Premium Gift Set'} />
            <ProductCard
                ProductTag={'APP EXCUSIVE'}
                ImageSrc={'https://bellavitaorganic.com/cdn/shop/files/GlamWomanbodylotion200ml-01_1.jpg?v=1708603710&width=300'}
                Title={'GLAM Woman Perfume Body Lotion - 200ml'}/>
            <ProductCard 
                ProductTag={'APP EXCUSIVE'}
                ImageSrc={'https://bellavitaorganic.com/cdn/shop/files/Hot-_-classy-2_2.jpg?v=1707985653&width=300'}
                Title={'Hot & Classy'}/>
        </SimpleGrid>
    )
}

export default NewArrivalsBox;