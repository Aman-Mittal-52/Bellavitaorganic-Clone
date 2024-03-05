import { Box, Flex, Input, SimpleGrid, Text } from "@chakra-ui/react";
import { ArrowForwardIcon, PhoneIcon, SettingsIcon, InfoOutlineIcon, UnlockIcon } from '@chakra-ui/icons'

import TagList from "./TagList";

function FooterTopLists() {
    return (
        <Flex>
            <SimpleGrid w={'60%'} m={16} columns={4} id="footerTagsList">
                <TagList Title='BESTSELLERS' Tags={['Ultimate Perfume Box', 'Perfume Gift Set For Men', 'Perfume Gift Set For Women', 'Under Eye Cream for Dark Circles', 'Perfume For Men', 'Perfume For Women', 'Unisex Perfumes']} />
                <TagList Title='INFORMATION' Tags={['Blogs', 'Newsroom', 'Terms & Conditions', 'Privacy Policy', 'Refund and Return', 'Shipping Policy', 'Bulk Order - GST Invoice']} />
                <TagList Title='SUPPORT' Tags={['About Us', 'Contact Us', 'Order Tracking', 'All Products', 'FAQ', 'Sitemap']} />
                <TagList Title='CONTACT US' Tags={['Office Location: Plot no. 417, Udyog Vihar Phase III, Gurgaon, Haryana, India', 'shop@bellavitaorganic.com', '+91-9311732440', 'Timing: 10:00 AM to 7:00 PM, Monday to Sunday']} />
            </SimpleGrid>
            <Box m={16}>
                <Text fontSize={20} fontWeight={600} my={3}>EXCLUSIVE</Text>
                <Input type="email" variant={'flushed'} placeholder="Enter email here" p={1} _hover={{ border: "2px solid white" }} />
                <ArrowForwardIcon position={'relative'} top={-8} right={'-30vw'} />
                <Text mb={2}>Sign up here to get the latest news, updates and special offers delivered to your inbox.</Text>
                <Text>Plus, you'll be the first to know about our discounts!</Text>
                <Flex m={7} justifyContent={'space-evenly'}>
                    <PhoneIcon />
                    <SettingsIcon />
                    <InfoOutlineIcon />
                    <UnlockIcon />
                </Flex>
            </Box>
        </Flex>
    )
}

export default FooterTopLists;