"use client"
import { ChakraProvider, Heading, Text } from '@chakra-ui/react'
import Features from './Features'

import Header from './header'
import Pricing from './pricing'


export default function Home() {

  return (
    <ChakraProvider>

      <Header />
      <Pricing />
      <Features />
      
    </ChakraProvider>
  )

}