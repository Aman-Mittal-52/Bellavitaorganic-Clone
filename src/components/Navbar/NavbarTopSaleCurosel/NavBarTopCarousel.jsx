import { useEffect, useState } from 'react';
import './NavBarTopCarousel.css';

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

    useEffect(()=>{
        setTimeout(() => {
            nextSlide()
        }, 3500);
    },[textIndex])
    return (
        <Flex w="100%" cursor="grab" bg="black" color="#fff" alignItems="center" h={10} px={52} fontWeight={600} className="rubik">
            <button bg="transparent" onClick={prevSlide}>{'<'}</button>
            <Spacer />
            <Text>{NavBarTopCarouselText[textIndex]}</Text>
            <Spacer />
            <button bg="transparent" onClick={nextSlide}>{'>'}</button>
        </Flex>
    );
}

export default NavbarTopCarousel;
