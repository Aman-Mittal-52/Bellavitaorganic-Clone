import { Box, Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useRef } from 'react';

function NavbarSearchBox() {
    const navSearch = useRef();

    function moveSearchIcon() {
        navSearch.current.style.left = "22px";
        navSearch.current.placeholder = 'Search'
    }

    function backSearchIcon() {
        navSearch.current.placeholder = '    Search'
    }

    return (
        <Box color={'#fff'}>
            <SearchIcon pos={'relative'} top={7} />
            <Input onFocus={moveSearchIcon} onBlur={backSearchIcon} ref={navSearch} variant='flushed' placeholder='     Search' />
        </Box>
    )
}

export default NavbarSearchBox;