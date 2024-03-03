import { Box } from "@chakra-ui/react";
import { useState } from "react";
import MyHeading from "./MyHeading";
import BestsellersBox from "./BestsellersBox";
import NewArrivalsBox from "./NewArrivalsBox";

function BestsellerAndNewArrivals(){
    const [bestsellerShow, setBestsellerShow] = useState(true)
    return(
            <Box p={'2vw'}>
                <MyHeading bestsellerShow={bestsellerShow} setBestsellerShow={setBestsellerShow}/>
                {bestsellerShow? <BestsellersBox />:<NewArrivalsBox/>}
            </Box>
        )
}

export default BestsellerAndNewArrivals;