"use client"
import { Box, ChakraProvider, Flex  } from "@chakra-ui/react"
import Main from "./Main"
import Navigation from "./Navigation"

export default function Home() {

  return (
    <ChakraProvider>
      <Flex w='full' h='100vh' align='center' justifyContent='center' >
        <Box w='83%' h='100vh' >
          <Navigation />
          <Main />
        </Box>
      </Flex>
    </ChakraProvider>
  )

}
