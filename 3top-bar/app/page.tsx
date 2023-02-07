"use client"

import { EmailIcon } from "@chakra-ui/icons"
import { Box, Button, ChakraProvider, Flex, HStack, Text } from "@chakra-ui/react"
import Contact from "./icon/contact"
import Location from "./icon/location"
import Store from "./icon/store"

export default function Home() {

  return (
    <ChakraProvider>
      <Flex gap={{base:"2" , lg:'0'}} align="center" direction={{base:"column" , md:"row" , lg:"row"}} justify={{base:"center" , md:"space-around" , lg:"space-around"}} bg='#571f9c' maxWidth="full" h={{base:"4rem" , lg:"3rem"}}>
          <HStack color={'white'} fontFamily='sans-serif' marginRight='3rem'>
            <EmailIcon color='white' />
            <Text _hover={{textDecor:"underline"}} fontSize={{base:'11' , md:"14" , lg:"17"}} >help@example.com</Text>
          </HStack>
          <Box >
            <HStack color={"white"} fontFamily='sans-serif'>
              <Location />
              <Text _hover={{textDecor:"underline"}}><Button fontSize={{base:'10' , md:"13", lg:"15"}} ml={"-4"} variant='Link'>Branches</Button>|</Text>
              <Store />
              <Text _hover={{textDecor:"underline"}}><Button fontSize={{base:'10' , md:"13", lg:"15"}} ml={"-4"} variant='Link'>Stores</Button>|</Text>
              <Contact />
              <Text _hover={{textDecor:"underline"}}><Button fontSize={{base:'10' , md:"13", lg:"15"}} ml={"-4"} variant='Link'>Contact us</Button></Text>
            </HStack>
          </Box>
      </Flex>

    </ChakraProvider>
  )

}
