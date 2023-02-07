"use client"
import { Box, ChakraProvider, Flex, Heading, Text } from "@chakra-ui/react"
import Image from "next/image"

export default function Main() {
  return (

    <Box w='100%' h={{ base: '100%', md: '100%', lg: '70%' }} bgColor="#edf2f6" color='#1a202c' >

      <Flex mt='1rem' flexDir='column' p='1rem' w='100%' alignItems='center' justifyContent='center'>
        <Heading mb='2' >Our Client Speak</Heading>
        <Text>We have been working with clients around the world</Text>
      </Flex>

      <Flex flexDir={{ base: 'column', md: 'column', lg: 'row' }} alignItems='center' mt='2' px='2rem' justifyContent='space-around' py='1rem' w='100%' >

        <Flex flexDir='column' w={{ base: '95%', md: "95%", lg: '31%' }}>

          <Flex borderRadius='1rem' position='relative' _before={{ content: '""', position: "absolute", left: "50%", top: "100%", transform: "translateX(-50%)", border: "15px solid", borderColor: "#ffffff #0000 #0000" }} p={{base:'3rem' , md:'3rem' , lg:'1.6rem'}} bgColor="#ffffff" boxShadow='4px 5px 10px #bdc4c9' textAlign='center' alignItems='center' justifyContent='center' flexDir='column'>
            <Heading size='h1' mb='1'>Efficient Collaborating</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, dolorem fuga. Ullam, amet?</Text>
          </Flex>

          <Flex p='1rem' mt='2' flexDir='column' alignItems='center' justifyContent='center' >
            <Image style={{ borderRadius: '50%' }} width='50' height='100' alt="Abdul-Basit" src="/basit.jpg" />
            <Heading mt='2' size='h1'>Abdul-Basit</Heading>
            <Text fontSize='14'>CEO at ABC Corportaion</Text>
          </Flex>

        </Flex>

        <Flex mt={{base:'1rem' , md:'2rem' , lg:'0'}} flexDir='column' w={{ base: '95%', md: "95%", lg: '31%' }}>

          <Flex borderRadius='1rem' position='relative' _before={{ content: '""', position: "absolute", left: "50%", top: "100%", transform: "translateX(-50%)", border: "15px solid", borderColor: "#ffffff #0000 #0000" }} p={{base:'3rem' , md:'3rem' , lg:'1.6rem'}} bgColor="#ffffff" boxShadow='4px 5px 10px #bdc4c9' textAlign='center' alignItems='center' justifyContent='center' flexDir='column'>
            <Heading size='h1' mb='1'>Efficient Collaborating</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, dolorem fuga. Ullam, amet?</Text>
          </Flex>

          <Flex p='1rem' mt='2' flexDir='column' alignItems='center' justifyContent='center'>
            <Image style={{ borderRadius: '50%' }} width='50' height='100' alt="Abdul-Basit" src="/basit.jpg" />
            <Heading mt='2' size='h1'>Abdul-Basit</Heading>
            <Text fontSize='14'>CEO at ABC Corportaion</Text>
          </Flex>

        </Flex>

        <Flex mt={{base:'1rem' , md:'2rem' , lg:'0'}} textAlign='center' alignItems='center' justifyContent='center' flexDir='column' w={{ base: '95%', md: "95%", lg: '31%' }}>

          <Flex borderRadius='1rem' position='relative' _before={{ content: '""', position: "absolute", left: "50%", top: "100%", transform: "translateX(-50%)", border: "15px solid", borderColor: "#ffffff #0000 #0000" }} p={{base:'3rem' , md:'3rem' , lg:'1.6rem'}} bgColor="#ffffff" boxShadow='4px 5px 10px #bdc4c9' flexDir='column'>
            <Heading size='h1' mb='1'>Efficient Collaborating</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, dolorem fuga. Ullam, amet?</Text>
          </Flex>

          <Flex p='1rem' mt='2' flexDir='column' alignItems='center' justifyContent='center' >
            <Image style={{ borderRadius: '50%' }} width='50' height='100' alt="Abdul-Basit" src="/basit.jpg" />
            <Heading mt='2' size='h1'>Abdul-Basit</Heading>
            <Text fontSize='14'>CEO at ABC Corportaion</Text>
          </Flex>

        </Flex>

      </Flex>

    </Box>

  )
}