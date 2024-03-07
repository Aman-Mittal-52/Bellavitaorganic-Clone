import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Keyword({ Title }) {
  return (
    <Link to={'/'}>
      <Text as={'span'} mx={0.5}>
        {" "}<u>{Title}</u> |
      </Text>
    </Link>
  )
}

export default Keyword;