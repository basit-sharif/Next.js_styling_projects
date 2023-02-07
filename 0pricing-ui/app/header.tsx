import { Box, Heading, Text } from "@chakra-ui/react"

export default function Header() {

  return (
    <Box textAlign={{base:"left" , md:"left" , lg:"center"}} pl='1rem' bg="#6B46C1" pt='88px' pb='246px' textColor='white'>
        <Heading>Pricing for your Business Fundamentals</Heading>
        <Text pt='10px'>Plans that are carefully crafted to suit your Business</Text>
    </Box>
  )

}