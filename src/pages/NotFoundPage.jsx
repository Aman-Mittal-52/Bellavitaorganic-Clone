import { Button, Box, Center, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <Box pt={'150px'}>
            <Center p={5}>
                <Heading as={'h1'}>404</Heading>
            </Center>
            <Center p={5}>
                <Heading>Page Not Found</Heading>
            </Center>
            <Center p={5}>
                <Link to={'/'}>
                    <Button>
                        Return To Home
                    </Button>
                </Link>
            </Center>
        </Box>
    )
}

export default NotFound;