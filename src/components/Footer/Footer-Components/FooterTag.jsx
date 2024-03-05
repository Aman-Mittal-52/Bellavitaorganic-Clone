import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";

function FooterTag({ Title }) {
    return (
        <>
            <Link to={'/'}>
                <Text fontWeight={500} opacity={0.7} fontSize={13}>{Title}</Text>
            </Link>
            <br />
        </>
    )
}

export default FooterTag;