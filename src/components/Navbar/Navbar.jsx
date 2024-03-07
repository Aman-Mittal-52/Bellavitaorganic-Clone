import {
    Box,
} from '@chakra-ui/react'
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import MainNavbar from './Navbar sub-components/main-navbar';

function Navbar() {

    useEffect(() => {
        gsap.to(".bg-w--c-b", {
            backgroundColor:"white",
            color:"black",
            duration:1.5,
            scrollTrigger:{
                start:"top -14px",
                end: "top -15px",
                scrub: 4,
            }
        })
        gsap.to(".navbar", {
            borderBottom:"1px solid #2f2f2f69",
            duration:0.3,
            scrollTrigger:{
                scroller:"body",
                trigger:".navbar",
                start:"top -14px",
                end: "top -15px",
                scrub: 5,
            }
        })
        gsap.to(".c-b", {
            color:"black",
            duration:1.5,
            scrollTrigger:{
                start:"top -14px",
                end: "top -15px",
                scrub: 4,
            }
        })
        gsap.to(".zIndex", {
            opacity:0,
            scrollTrigger:{
                trigger:".zIndex",
                scroller:"body",
                start:"top 159px",
                end: "top 150px",
                scrub: 4,
            }
        })
    }, [])
    return (
        <Box w={'100vw'} h={'38vw'} id='HomePageNavbar' zIndex={10} >
            <MainNavbar bgcColor={'transparent'} bgColorClass={'bg-w--c-b'} colorClass={'c-b'}/>
        </Box>
    )
}

export default Navbar;