import { Box, Center } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MyHeading from "./MyHeading";
import BestsellersBox from "./BestsellersBox";
import NewArrivalsBox from "./NewArrivalsBox";

function BestsellerAndNewArrivals() {
    const [bestsellerShow, setBestsellerShow] = useState(true)
    return (
        <Box p={'2vw'}>
            <MyHeading bestsellerShow={bestsellerShow} setBestsellerShow={setBestsellerShow} />
            {bestsellerShow ? <BestsellersBox /> : <NewArrivalsBox />}
            <Center p={12}>
                <Link to={bestsellerShow ? "/collections/bestsellers" : '/new-arrivals'}>
                    <Box className="viewAllBtn" w={'fit-content'} py={4} px={16} border={'1px solid black'} fontSize={14} >VIEW ALL</Box>
                </Link>
            </Center>
        </Box>
    )
}

export default BestsellerAndNewArrivals;