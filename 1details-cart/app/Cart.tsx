import { AspectRatio, Button, Divider, Heading, HStack, Stack, Text, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react";
import Image from "next/image";

export default function Cart() {
    let { toggleColorMode } = useColorMode();
    let bgcolor = useColorModeValue("gray.50","whiteAlpha.100")
    let secondrycolor = useColorModeValue("gray.600" , "gray.400")

    return (

        <VStack bg={bgcolor} w='full' h='full' p='10' spacing='6' alignItems='flex-start' >
            <VStack alignItems='flex-start' spacing={3}>
                <Heading>Your Cart</Heading>
                <Text>
                    If Color is too hard on your eyes,
                    <Button onClick={toggleColorMode} variant="Link" colorScheme='black' mt="-2.7px" ml='-3px'>Try changing the theme.</Button>
                </Text>
            </VStack>

            <HStack spacing='6' alignItems='center' w='full'>
                <AspectRatio ratio={1} w={24}>
                    <Image src={"/boat.jpg"} alt='Car' width={100} height={100} />
                </AspectRatio>
                <Stack spacing="0" width='full' direction='row' justifyContent='space-between' alignItems='center'>
                    <VStack w='full' spacing={0} alignItems='flex-start' >
                        <Heading size='md'>Water Boat</Heading>
                        <Text color='secondrycolor'>Model: A34E44</Text>
                    </VStack>
                    <Heading size='sm' textAlign='end'>$126.00</Heading>
                </Stack>
            </HStack>

            <VStack spacing={4} alignItems='stretch' w='full'>
                <HStack justifyContent='space-between'>
                    <Text color='secondrycolor'>Subtotal</Text>
                    <Heading size='sm'>$126.00</Heading>
                </HStack>
                <HStack justifyContent='space-between'>
                    <Text color='secondrycolor'>Shipping</Text>
                    <Heading size='sm'>$12.00</Heading>
                </HStack>
                <HStack justifyContent='space-between'>
                    <Text color='secondrycolor'>Taxes(estimated)</Text>
                    <Heading size='sm'>$16.00</Heading>
                </HStack>
            </VStack>
            <Divider />
            <HStack w="full" justifyContent='space-between'>
                <Text color='secondrycolor'>Total</Text>
                <Heading size='lg'>$154.00</Heading>
            </HStack>
        </VStack>

    )
}