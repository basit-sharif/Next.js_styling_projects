"use client"
import { Box, Button, ChakraProvider, Flex, Heading, Text } from "@chakra-ui/react"
import Image from "next/image"

export default function Main() {

    return (

        <ChakraProvider>

            <Flex flexDir={{ base: 'column-reverse', md: 'row', lg: 'row' }} mt={{ base: '3rem', md: '0', lg: '0' }} justifyContent='space-between' align='center' w="100%" h='86%' >
                <div>
                    <Box h='15rem' mb={{base:'45%' , md:'0' , lg:'0'}} w={{ base: '95%', md: '65%', lg: '70%' }} textAlign={{ base: 'center', md: 'left', lg: 'left' }}>
                        <Heading mb='4' color='#275939' size='lg'>Build this rad dark landing page from scratch</Heading>
                        <Text mb='3' color='#275939' fontSize='1.2rem' >This is the subheader section where you describe the basic benifits of your product</Text>
                        <Button mb={1} bg='#499f68' color='whiteAlpha.800' >Creat your account now --&gt; </Button>
                        <Text color='#275939' fontSize='12px' >No creadit card required</Text>
                    </Box>
                </div>
                <Box>
                    <Image style={{ borderRadius: '2rem', boxShadow: '-2px 1px 0.8rem rgb(227,230,211,1)' , marginBottom:'1rem'}} width={490} height={150} alt="Flowers" src='/img.png' />
                </Box>
            </Flex>

        </ChakraProvider>

    )

}