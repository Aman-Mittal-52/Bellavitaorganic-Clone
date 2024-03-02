import { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

import {
    Flex,
    Spacer,
    Text
} from '@chakra-ui/react';

function NavbarTopCarousel() {
    const NavBarTopCarouselText = ['Payday sale is live 🚀', 'FREE gifts for all PREPAID Orders', 'Get any 2 100ml Perfumes for just $199', 'Get any 3 100ml Perfumes for just $299'];
    const [textIndex, setTextIndex] = useState(0);

    const nextSlide = () => {
        setTextIndex((textIndex + 1) % NavBarTopCarouselText.length);
    };

    const prevSlide = () => {
        setTextIndex((textIndex - 1 + NavBarTopCarouselText.length) % NavBarTopCarouselText.length);
    };

    useEffect(() => {
        setTimeout(() => {
            nextSlide()
        }, 3500);
    }, [textIndex])
    return (
        <Flex w="100%" cursor="grab" bg="#151515" color="#fff" alignItems="center" h={10} px={52} fontWeight={600} className="rubik navbarCarousel">
            <ChevronLeftIcon onClick={prevSlide} />
            <Spacer />
            <Text fontSize={15}>{NavBarTopCarouselText[textIndex]}</Text>
            <Spacer />
            <ChevronRightIcon onClick={nextSlide} />
        </Flex>
    );
}

export default NavbarTopCarousel;
