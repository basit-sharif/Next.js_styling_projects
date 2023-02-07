"use client"
import { Button, ChakraProvider, Container, Flex, VStack } from '@chakra-ui/react'
import Cart from './Cart'
import Detail from './Detail'

export default function Home() {

  return (
    <ChakraProvider>

      <Container maxW='container.xl' p='0'>

        <Flex h={{base:'auto' , md:'100vh'}} py={[0 , 10 , 20]} direction={{base:"column" , md:"row" , lg:"row"}}>
          <Detail />
          <Cart />
        </Flex>

      </Container>

    </ChakraProvider>
  )

}
