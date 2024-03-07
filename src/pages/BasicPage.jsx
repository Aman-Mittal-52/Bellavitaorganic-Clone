import { Box } from "@chakra-ui/react";
import gsap from "gsap";
import { useEffect } from "react";

import MainNavbar from "../components/Navbar/Navbar sub-components/main-navbar";
import Footer from "../components/Footer/Footer";

function BasicPage({ children }) {

    useEffect(() => {
        gsap.to('.DefaultBgTheme', {
            backgroundColor: "#fff",
            color: "#000",
            duration: 0.3
        })
        gsap.to('.DefaultColorTheme', {
            color: "black",
            duration: 0.3
        })
    }, [])

    return (
        <Box>
            <MainNavbar bgcColor={'#242424'} bgColorClass={'DefaultBgTheme'} colorClass={'DefaultColorTheme'} />
            {children}
            <Footer />
        </Box>
    )
}


export default BasicPage;
