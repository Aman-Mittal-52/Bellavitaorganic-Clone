import { Flex, SimpleGrid, Spacer } from "@chakra-ui/react";
import ProductCard from "../../../UniversalComponents/ProductCard";

function BestsellersBox() {
    return (
        <SimpleGrid columns={{ base: 4, sm: 1, md: 2, lg: 3, xl: 4 }} spacing={3} mx={'10vw'} placeItems={'center'}>
            <ProductCard
                ImageSrc={'https://bellavitaorganic.com/cdn/shop/files/ManPerfumeGiftSet-01_2_eb660165-6da9-4e14-bdf0-fabd68113a00.jpg?v=1695204946&width=300'}
                Title={'Luxury Perfume Gift Set For Men - 4 x 20mls'}
                ProductTag={'BESTSELLER'} />
            <ProductCard
                ImageSrc={"https://bellavitaorganic.com/cdn/shop/files/OUDGold-01.jpg?v=1698055234&width=300"}
                Title={'OUD GOLD - 100ml'}
                ProductTag={'BESTSELLER'} />
            <ProductCard
                ImageSrc={'https://bellavitaorganic.com/cdn/shop/files/CEOMAN_3b131d25-7893-4ad5-a17a-4b3de9a3ebd3.jpg?v=1693290059&width=300'}
                Title={'CEO Man Luxury Perfme - 100ml'}
                ProductTag={'BESTSELLER'} />
            <ProductCard
                ImageSrc={'https://bellavitaorganic.com/cdn/shop/files/WomanPerfumeGiftSet_1.jpg?v=1695204304&width=300'}
                Title={'Luxury Perfume Gift Set For Women - 4 x 20mls'}
                ProductTag={'BESTSELLER'} />
        </SimpleGrid>
    )
}

export default BestsellersBox;