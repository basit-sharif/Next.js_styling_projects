import { Box, Button, Flex, Heading, HStack, Text, Icon } from "@chakra-ui/react";
import checkMarkicon from "./icons/checkMarkicon";

export default function Pricing() {

    return (
        <Box maxW='55rem' m='auto' mt='-12rem' mx={{base:'1rem' , md:'1rem' , lg:'auto'}} bg='whitesmoke' borderRadius='0.7rem' overflow='hidden'>
            <Flex direction={{base:'column' , md:'column' , lg:'row'}}>
                <Box bg='#e3c7e3' p='2.6rem' textAlign='center'>
                    <Text fontSize='24px' fontWeight='bold'>Standerd Pack</Text>
                    <Heading fontSize='60px'>$856</Heading>
                    <Text>Build just once</Text>
                    <Button mt='1rem' width='300px' color="#e1d3e1" bg="#6B46C1">Add to Cart</Button>
                </Box>
                <Box pt='2.6rem' pl='2rem' pr={"1rem"}>
                    <Text mb="0.9rem">Access these feature when you get this pricing package for your business.</Text>

                    <HStack mb='0.6rem'>
                        <Icon as={checkMarkicon} />
                        <Text>Internationaly calling and messaging api</Text>
                    </HStack>

                    <HStack mb='0.6rem'>
                        <Icon as={checkMarkicon} />
                        <Text>Additional phone number</Text>
                    </HStack>

                    <HStack mb='0.6rem'>
                        <Icon as={checkMarkicon} />
                        <Text>Automated message via whatsapp</Text>
                    </HStack>

                    <HStack mb='0.6rem'>
                        <Icon as={checkMarkicon} />
                        <Text>24/7 support and consultating</Text>
                    </HStack>

                </Box>
            </Flex>
        </Box>
    )

}