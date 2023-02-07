"use client"
import { MoonIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { Box, Button, ChakraProvider, Flex, GridItem, ListItem, SimpleGrid, Text, UnorderedList, useColorMode } from "@chakra-ui/react"
import Image from "next/image"
import { useState } from "react";


export default function Navigation() {
  const { toggleColorMode } = useColorMode();
  let [sicon, ChangeStraitIcon] = useState("flex");
  let [cicon, ChangeCloseIcon] = useState("none");
  let [display, ChangeDisplay] = useState("none");

  return (
    <ChakraProvider>

      <Flex w='100%' h='10%' mt='6' justifyContent='space-between' align='center' >

        <Image alt="Logo" style={{ marginBottom: "14px" }} height={60} width={130} src={"/logo2.png"} />

        <UnorderedList listStyleType='none' >
          <Flex gap={{ base: '2', md: '4', lg: '12' }} fontFamily='sans-serif'>
            <Box mr='10' gap={{ base: '2', md: '4', lg: '12' }} fontFamily='sans-serif' display={{ base: 'none', md: "flex", lg: "flex" }}>
              <ListItem color='#499f68' mt='2' _hover={{ cursor:'pointer' , textDecoration:'underline' }} >Home</ListItem>
              <ListItem color='#499f68' mt='2' _hover={{ cursor:'pointer' , textDecoration:'underline' }}>How It works</ListItem>
              <ListItem color='#499f68' mt='2' _hover={{ cursor:'pointer' , textDecoration:'underline' }}>Features</ListItem>
              <ListItem color='#499f68' mt='2' _hover={{ cursor:'pointer' , textDecoration:'underline' }}>Pricing</ListItem>
              <Button bgColor='#499f68' color='whiteAlpha.900'>Create Account</Button>
            </Box>
            <Box onClick={toggleColorMode} cursor={'pointer'}>
              <MoonIcon ml='-0.8rem' mt={{ base: '2', md: '3', lg: '3' }} />
            </Box>
            <Box display={{base:sicon , md:'none' , lg:'none'}} cursor={'pointer'} onClick={() => ChangeDisplay("flex")}>
              <Box onClick={() => ChangeStraitIcon("none")}>
                <HamburgerIcon onClick={() => ChangeCloseIcon("flex")} ml='1.5rem' mt={{ base: '2.5', md: '3', lg: '3' }} />
              </Box>
            </Box>
            <Box display={cicon} cursor={'pointer'} onClick={() => ChangeDisplay("none")}>
              <Box onClick={() => ChangeStraitIcon("flex")}>
                <CloseIcon onClick={() => ChangeCloseIcon("none")} ml='1.5rem' mt={{ base: '2.5', md: '3', lg: '3' }} />
              </Box>
            </Box>
          </Flex>
        </UnorderedList>
      </Flex>
      <Flex p='2rem' flexDir='column' justifyContent='center' align='center' bg='#4a9f66' display={display}>
        <Button color='white' colorScheme='4a9f66' mt='2'>Home</Button>
        <Button color='white' colorScheme='4a9f66' mt='2'>How It works</Button>
        <Button color='white' colorScheme='4a9f66' mt='2'>Features</Button>
        <Button color='white' colorScheme='4a9f66' mt='2'>Pricing</Button>
        <Button bgColor='whiteAlpha.900' color='4a9f66' mt='2rem'>Create Account</Button>
      </Flex>

    </ChakraProvider>
  )

}

