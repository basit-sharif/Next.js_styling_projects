"use client"
import { Box, ChakraProvider, Flex, Heading } from "@chakra-ui/react"
import Main from "./Main"

export default function page() {
  return (
    <ChakraProvider>
      <Flex justifyContent='center' alignItems="center" w='100%' h='100vh' backgroundColor='black' >
        <Main />
      </Flex>
    </ChakraProvider>
  )
}