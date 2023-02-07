import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import Icon1 from "./icons/icon1";
import Icon2 from "./icons/icon2";
import Icon3 from "./icons/icon3";

export default function Features() {

    return (
        <Box maxW='48rem' margin='auto' pl='1rem' pr='0.5rem' mt='2.2rem'>
            <Flex direction={{base:'column' , md:'row' , lg:'row'}}>

                <HStack mb='1.5rem'>
                    <Icon as={Icon1} />
                    <Text>5 days money back guarantee</Text>
                </HStack>

                <HStack mb='1.5rem'>
                    <Icon as={Icon2} />
                    <Text>Setup fees 5$ 85% hassle-free</Text>
                </HStack>

                <HStack mb='1.5rem'>
                    <Icon as={Icon3} />
                    <Text>No monthly subscription Pay once and for all</Text>
                </HStack>

            </Flex>
        </Box>
    )

}