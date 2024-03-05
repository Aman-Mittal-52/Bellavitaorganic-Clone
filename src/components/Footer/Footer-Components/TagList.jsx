import { Box, Divider, Text } from "@chakra-ui/react";
import FooterTag from "./FooterTag"

function TagList({ Title, Tags }) {
    return (
        <Box>
            <Text fontSize={17} fontWeight={500} my={3}>{Title}</Text>
            {
                Tags.map((tag, index) => {
                    return <FooterTag key={index} Title={tag} />
                })
            }
        </Box>
    )
}

export default TagList;