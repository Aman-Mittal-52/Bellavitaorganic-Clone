import { Center, Text } from "@chakra-ui/react"

function MainHeading({Title}) {
    return (
        <Center>
            <Text letterSpacing={3} fontSize={"25PX"} fontWeight={500}>{Title}</Text>
        </Center>
    )
}

export default MainHeading;