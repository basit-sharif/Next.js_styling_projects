import { ChakraProvider, SimpleGrid, HStack, Text, Button, Box, Flex, Heading, List, ListItem, ListIcon, Switch, useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useState } from "react";
import Image from "next/image";


export default function Navigation() {
    const btncolor = useColorModeValue("white", "White")
    const { toggleColorMode } = useColorMode();
    const [display, changedisplay] = useState("none")

    return (
        <ChakraProvider>
            <Flex h='6rem' justifyContent='center' align='center' >
                <Flex width='70%' align='center' justifyContent='space-between' >
                    <HStack color={"blue"} mr='5'>
                        <Image alt="Logo" width={170} height={90} src={"/logo.png"}/>
                        {/* <Heading>A</Heading>
                        <Heading fontSize={"25"}>Logo</Heading> */}
                    </HStack>
                    <HStack display={{ base: 'none', md: 'none', lg: 'flex' }} gap='12'>
                        <List>
                            <Flex gap={14}>
                                <ListItem >
                                    <Button color="blue" variant={'link'}>How it work</Button>
                                </ListItem>
                                <ListItem>
                                    <Button color='blue' variant={'link'}>Crypto</Button>
                                </ListItem>
                                <ListItem>
                                    <Button color='blue' variant={'link'}>Marketplace</Button>
                                </ListItem>
                                <ListItem>
                                    <Button color='blue' variant={'link'}>Sign In</Button>
                                </ListItem>
                            </Flex>
                        </List>
                        <Button _hover={{ color: "blue", bg: 'white', border: '2px solid blue' }} w={160} h={9} colorScheme={"blue"} >Get Started</Button>
                    </HStack>
                    <IconButton onClick={() => changedisplay("flex")} color={'blue.400'} aria-label="Open Menu" colorScheme={btncolor} size='lg' mr={5} icon={<HamburgerIcon />} display={["flex", "flex", "flex", "none"]} />

                    <Switch ml={5} onChange={toggleColorMode} />
                </Flex>
            </Flex>
            <Flex flexDir='column' display={display} >
                <Box display='flex' justifyContent={"center"} alignItems='center'>
                    <IconButton color={"blue.400"} colorScheme='whiteAlpha.500' onClick={()=>changedisplay("none")} aria-label="Open Menu" size='lg' ml={5} icon={<CloseIcon />} display={["flex", "flex", "flex", "none"]} />
                </Box>
                <List px='0.4rem' py='1.5rem' borderY={"2px"}>
                    <Flex gap={3} flexDir='column'>
                        <Heading size={'h1'} ml={'3'}>About</Heading>
                        <ListItem ml={'6'}>
                            <Button color="blue" variant={'link'}>How it work</Button>
                        </ListItem>
                        <ListItem ml={'6'}>
                            <Button color='blue' variant={'link'}>Crypto</Button>
                        </ListItem>
                        <Heading size={'h1'} ml={'3'}>Explore Marketplace</Heading>
                        <ListItem ml={'6'}>
                            <Button color='blue' variant={'link'}>Marketplace</Button>
                        </ListItem>

                        <SimpleGrid columns={2} columnGap={3}>
                            <Button colorScheme={'blackAlpha'}>Sign In</Button>
                            <Button colorScheme={"blue"} >Sign In</Button>
                        </SimpleGrid>

                    </Flex>
                </List >
            </Flex>
        </ChakraProvider>
    )
}