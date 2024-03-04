import { Box, Image } from "@chakra-ui/react"

import BestsellerAndNewArrivals from './Main-Comonents/BestsellerAndNewArrivals/BestsellerAndNewArrivals'
import LuxuryCategories from "./Main-Comonents/LuxuryCategories/LuxuryCategories";
import CrazyDeals from "./Main-Comonents/CrazyDeals/CrazyDeals";

function Main() {
    return (
        <Box id="Main">
            <BestsellerAndNewArrivals />
            <Image w={'full'} src="https://bellavitaorganic.com/cdn/shop/files/Offer-Banner-2.jpg?v=1695733175&width=1920"/>
            <LuxuryCategories />
            <CrazyDeals />
        </Box>
    )
}

export default Main;