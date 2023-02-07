import { Heading, Text } from "@chakra-ui/react"

function Practise() {
    return (
        <>
            <Heading>This is Heading by Chakra ui</Heading>
            <Heading as="h4" color={"blue"} fontSize="6rem">
                This is Heading by Chakra ui
            </Heading>
            <Text>This is Paragraph by Chakra ui</Text>
        </>
    )
}

export default Practise