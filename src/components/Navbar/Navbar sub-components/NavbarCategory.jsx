import {
    Flex,
    Text,
    Spacer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'

function NavbarCategory() {
    return (
        <Flex color={'#fff'} h={'50px'} alignItems={'center'} px={400}>
            <Text className={'navList'} fontSize={11}>CRAZY DEALS</Text>
            <Spacer />
            <Text className={'navList'} fontSize={11}>SHOP ALL</Text>
            <Spacer />
            <Text className={'navList'} fontSize={11}>BESTSELLERS</Text>
            <Spacer />
            <Menu>
                <MenuButton>
                    <Text className={'navList'} fontSize={11}>PRFUMES</Text>
                </MenuButton>
                <MenuList color={'#000'}>
                    <MenuItem>All Perfumes</MenuItem>
                    <MenuItem>Men</MenuItem>
                    <MenuItem>Women</MenuItem>
                    <MenuItem>Unisex</MenuItem>
                    <MenuItem>Oud Collections</MenuItem>
                    <MenuItem>Little Luxuries</MenuItem>
                </MenuList>
            </Menu>
            <Spacer />
            <Menu>
                <MenuButton>
                    <Text className={'navList'} fontSize={11}>BATH BODY</Text>
                </MenuButton>
                <MenuList color={'#000'}>
                    <MenuItem>Shower Gel</MenuItem>
                    <MenuItem>Body Mist</MenuItem>
                    <MenuItem>Body Perfume</MenuItem>
                    <MenuItem>Body Lotion</MenuItem>
                    <MenuItem>Travel Kit</MenuItem>
                </MenuList>
            </Menu>
            <Spacer />
            <Text className={'navList'} fontSize={11}>NEW ARRIVALS</Text>
            <Spacer />
            <Menu>
                <MenuButton>
                    <Text className={'navList'} fontSize={11}>SKINCARE</Text>
                </MenuButton>
                <MenuList color={'#000'}>
                    <MenuItem>All Skin Care</MenuItem>
                    <MenuItem>Face Care</MenuItem>
                    <MenuItem>Lip Care</MenuItem>
                </MenuList>
            </Menu>
            <Spacer />
            <Menu>
                <MenuButton>
                    <Text className={'navList'} fontSize={11}>GIFTING</Text>
                </MenuButton>
                <MenuList color={'#000'}>
                    <MenuItem>Gift Sets</MenuItem>
                    <MenuItem>Perfume Combos</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    )
}

export default NavbarCategory;