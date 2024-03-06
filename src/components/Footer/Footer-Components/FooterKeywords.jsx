import { Box, Text } from "@chakra-ui/react";
import Keyword from "./Keyword";

function FooterKeywords({ Keywords }) {
    return (
        <Box mx={16} py={4}>
            <Text fontSize={17} fontWeight={500} my={3}>MOST SEACRCHED KEYWORDS</Text>
            <Box w={'90%'}>
                {Keywords.map((keyword, i) => {
                    return <Keyword key={i} Title={keyword} />
                })}
            </Box>
            <Box mt={20} mb={10}>
                © 2024, Bella Vita Organic (IDAM Natural Wellness Pvt. Ltd.).
            </Box>
        </Box>
    )
}

export default FooterKeywords;