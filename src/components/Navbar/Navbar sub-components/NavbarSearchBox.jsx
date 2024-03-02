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
            <SearchIcon className='c-b' pos={'relative'} top={7} />
            <Input className='c-b' onFocus={moveSearchIcon} onBlur={backSearchIcon} ref={navSearch} variant='flushed' placeholder='        Search' />
        </Box>
    )
}

export default NavbarSearchBox;