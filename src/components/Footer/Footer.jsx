import { Box } from "@chakra-ui/react";

import FooterTopLists from "./Footer-Components/FooterTopLists";
import FooterKeywords from "./Footer-Components/FooterKeywords";

import './Footer.css'

function Footer() {
    return (
        <Box px={'3vw'} bg={'RGBA(0, 0, 0, 0.68)'} color={'#fff'}>
            <FooterTopLists/>
            <FooterKeywords Keywords={['Perfume', 'Best perfume for men', 'Perfume for men', 'Vitamin C Face Wash', 'Perfume for women', 'Best perfume for women', 'Perfume set for women', 'Gift for Men', 'Face wash for oily skin', 'Body scrub', 'Dark circle', 'Perfume for girls', 'Dark circles removal cream', 'Acne face wash','under eye cream', 'Gift sets for women', 'Body wash for women', 'Pocket perfume for men', 'De tan face pack', 'Pimple removal cream', 'Lip scrub', 'Tan removal face pack', 'Face wash for acne', 'Exfoliate scrub', 'Gift set for men', 'Coffee Body Scrub', 'Best long lasting perfume for men', 'Perfumes for men under 500', 'Perfumes for women under 500', 'Perfume gift sets', 'Oud perfume', 'Ceo perfume', 'Under eye cream for dark circles', 'Acne cream', 'Vitamin c cream for face' ,'Body lotion for women', 'Long lasting perfume for women', 'Perfume gift pack for her' ,'Perfume gift pack for him' ,'Charcoal face wash' ,'Body wash for men', 'Best shower gel for women',' Shower Gel for men and Women', 'Body lotion for dry skin' ,'Body Lotion for men',' Body Lotion for women', 'Shower Gel and Perfume Combo', 'Shower Travel Kit', 'Travel Mini Kit', 'Birthday Gift for Women/Girls', 'Wedding Gifts for Couples', 'Gifts for Men Under 500', 'Gifts for Women Under 500', 'Birthday Gift for Men/ Boys', 'Corporate Gifts']} />
            {/* <FooterAccordion/> */}
        </Box>
    )
}

export default Footer; 