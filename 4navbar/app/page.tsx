"use client"
import { ChakraProvider } from "@chakra-ui/react"
import Navigation from "./Navigation"

export default function Home() {

  return (
    <ChakraProvider>
      <Navigation />
    </ChakraProvider>
  )

}
