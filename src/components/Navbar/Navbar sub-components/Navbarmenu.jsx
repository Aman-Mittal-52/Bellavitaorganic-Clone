import {
    Flex,
    Text,
    Spacer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

function Navbarmenu({colorClass}) {
    const [isOpenPerfumes, setIsOpenPerfumes] = useState(false);
    const [isOpenBath, setIsOpenBath] = useState(false);
    const [isOpenSkincare, setIsOpenSkincare] = useState(false);
    const [isOpenGifting, setIsOpenGifting] = useState(false);

    return (
        <div id='navbarMenu'>
            <Flex color={'#fff'} h={'50px'} alignItems={'center'} px={'10vw'} className={colorClass}>
                <Link to='/pages/build-a-box'>
                    <Text className={'navList'} fontSize={11}>CRAZY DEALS</Text>
                </Link>
                <Spacer />
                <Link to='/collections/all-products'>
                    <Text className={'navList'} zIndex={2} fontSize={11}>SHOP ALL</Text>
                </Link>
                <Spacer />
                <Link to='/collections/bestsellers'>
                    <Text className={'navList'} fontSize={11}>BESTSELLERS</Text>
                </Link>
                <Spacer />
                <Link to='/collections/luxury-perfumes'>
                    <Menu isOpen={isOpenPerfumes} onClose={() => setIsOpenPerfumes(false)}>
                        <MenuButton
                            onMouseEnter={() => setIsOpenPerfumes(true)}
                            onMouseLeave={() => setTimeout(() => {
                                setIsOpenPerfumes(false)
                            }, 3000)}>
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
                </Link>
                <Spacer />
                <Link to='/collections/all-natural-body-care-products'>
                    <Menu isOpen={isOpenBath} onClose={() => setIsOpenBath(false)}>
                        <MenuButton
                            onMouseEnter={() => setIsOpenBath(true)}
                            onMouseLeave={() => setTimeout(() => {
                                setIsOpenBath(false)
                            }, 3000)}>
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
                </Link>
                <Spacer />
                <Link to='/collections/new-arrival'>
                    <Text className={'navList'} fontSize={11}>NEW ARRIVALS</Text>
                </Link>
                <Spacer />
                <Link to='/collections/natural-skin-care-products'>
                    <Menu isOpen={isOpenSkincare} onClose={() => setIsOpenPerfumes(false)}>
                        <MenuButton
                            onMouseEnter={() => setIsOpenSkincare(true)}
                            onMouseLeave={() => setTimeout(() => {
                                setIsOpenSkincare(false)
                            }, 3000)}>
                            <Text className={'navList'} fontSize={11}>SKINCARE</Text>
                        </MenuButton>
                        <MenuList color={'#000'}>
                            <MenuItem>All Skin Care</MenuItem>
                            <MenuItem>Face Care</MenuItem>
                            <MenuItem>Lip Care</MenuItem>
                        </MenuList>
                    </Menu>
                </Link>
                <Spacer />
                <Link to='/collections/git-sets'>
                    <Menu isOpen={isOpenGifting} onClose={() => setIsOpenGifting(false)}>
                        <MenuButton
                            onMouseEnter={() => setIsOpenGifting(true)}
                            onMouseLeave={() => setTimeout(() => {
                                setIsOpenGifting(false)
                            }, 3000)}>
                            <Text className={'navList'} fontSize={11}>GIFTING</Text>
                        </MenuButton>
                        <MenuList color={'#000'}>
                            <MenuItem>Gift Sets</MenuItem>
                            <MenuItem>Perfume Combos</MenuItem>
                        </MenuList>
                    </Menu>
                </Link>
            </Flex>
        </div>
    )
}

export default Navbarmenu;