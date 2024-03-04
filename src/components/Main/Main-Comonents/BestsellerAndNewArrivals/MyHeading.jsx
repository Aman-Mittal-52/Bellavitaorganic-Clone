import { Box, Flex, Text } from "@chakra-ui/react";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function MyHeading({bestsellerShow, setBestsellerShow}) {

    useEffect(()=>{
        gsap.to('.textOverlap',{
            opacity:0,
            scrollTrigger:{
                scroller:"body",
                start:'top 150px',
                end:"top 130px",
                trigger:".textOverlap",
                scrub:1
            }
        })
    },[]);

    return (
        <Flex className="textOverlap" h={'5vw'} justifyContent={'center'} alignItems={'center'} pos={'relative'} left={4}>
            <Text letterSpacing={3} onClick={() => { setBestsellerShow(true) }} fontSize={"25PX"} opacity={bestsellerShow ? 1 : 0.5} fontWeight={500}>BESTSELLERS</Text>
            <Box h={'50%'} mx={10} border={'1px solid black'} ></Box>
            <Text letterSpacing={3} onClick={() => { setBestsellerShow(false) }} fontSize={"25PX"} opacity={bestsellerShow ? 0.5 : 1} fontWeight={500}>NEW ARRIVALS</Text>
        </Flex>
    )
}

export default MyHeading;