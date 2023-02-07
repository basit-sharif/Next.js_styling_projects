"use client"
import { Box, Flex } from "@chakra-ui/layout"
import { ChakraProvider } from "@chakra-ui/react"
import Main from "./Main"

export default function Home() {

  return (
    <ChakraProvider>
      <Flex bgColor='black' w='100%' h='100vh' justifyContent='center' alignItems='center' >
        <Main />
      </Flex>
    </ChakraProvider>
  )

}
