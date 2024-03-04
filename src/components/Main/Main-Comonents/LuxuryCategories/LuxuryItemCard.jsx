import {Box, Image, Text} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function LuxuryItemCard({ImageSrc, Title, LinkTo}) {
    return (
        <Box>
            <Link to={LinkTo}>
                <Image boxSize={'200px'} src={ImageSrc} mb={3} />
                <Text fontSize={14} textAlign={'center'}>{Title}</Text>
            </Link>
        </Box>
    )
}

export default LuxuryItemCard;