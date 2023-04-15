import { Button, Checkbox, FormControl, FormLabel, GridItem, Heading, Input, Select, SimpleGrid, Text, useBreakpointValue, VStack } from "@chakra-ui/react";

export default function Detail() {
    return (

        <VStack w='full' h='full' p='9' spacing='9' alignItems='flex-start'>
            <VStack spacing='3' alignItems='flex-start'>
                <Heading>Your details</Heading>
                <Text size='2rem'>If you already have an account, click here to log in.</Text>
            </VStack>
            <SimpleGrid columns={2} columnGap={3} rowGap='6'>
                <GridItem colSpan={1} >
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input placeholder="John" />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input placeholder="Doe" />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>Address</FormLabel>
                        <Input placeholder="Blvd. Broken Dreams 21" />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={ [2 , 1 , 1 ]}>
                    <FormControl>
                        <FormLabel>City</FormLabel>
                        <Input placeholder="San Francisco" />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={ [2 , 1 , 1 ]}>
                    <FormControl>
                        <FormLabel>Country</FormLabel>
                        <Select>
                            <option value={"Pakistan"}>Pakistan</option>
                            <option value={"India"}>India</option>
                            <option value={"Canada"}>Canada</option>
                            <option value={"America"}>America</option>
                            <option value={"Japan"}>Japan</option>
                        </Select>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <Checkbox defaultChecked>Ship to the billing address.</Checkbox>
                </GridItem>
                <GridItem colSpan={2}>
                    <Button bg='#2b6cb0' w='full'>Place Order</Button>
                </GridItem>
            </SimpleGrid>
        </VStack>

    )
}