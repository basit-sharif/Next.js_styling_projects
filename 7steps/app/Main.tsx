"use client"
import { CheckIcon } from "@chakra-ui/icons";
import { Box, Button, ChakraProvider, Divider, Flex, Heading, Stack, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"

export default function Main() {
  const [stepContent, setstepContent] = useState('Step 1 Content');
  const [reset, setreset] = useState('none');
  const [seconddiv, setseconddiv] = useState('#2b3746');
  const [line1Color, setline1Color] = useState('#454a54');
  const [line2Color, setline2Color] = useState('#454a54');
  const [prevbtndisable, setprevbtndisable] = useState('');
  const [nextbtndisable, setnextbtndisable] = useState('');
  const [borderofchecks1, setborderofchecks1] = useState('2px solid white');
  const [borderofchecks2, setborderofchecks2] = useState('none');
  const [borderofchecks3, setborderofchecks3] = useState('none');
  const [index1, setindex1] = useState('1');
  const [index2, setindex2] = useState('2');
  const [index3, setindex3] = useState('3');
  const [checkboxdisplay1, setcheckboxdisplay1] = useState('none');
  const [checkboxdisplay2, setcheckboxdisplay2] = useState('none');
  const [checkboxdisplay3, setcheckboxdisplay3] = useState('none');
  const [checkboxcolor1, setcheckboxcolor1] = useState("#2d313d");
  const [checkboxcolor2, setcheckboxcolor2] = useState("#2d313d");
  const [checkboxcolor3, setcheckboxcolor3] = useState("#2d313d");


  const defaulChanges = () => {
    setstepContent('Step 1 Content');
    setreset('none');
    setseconddiv('#2b3746');
    setline1Color('#454a54');
    setline2Color('#454a54');
    setprevbtndisable('');
    setnextbtndisable('');
    setborderofchecks1('2px solid white');
    setborderofchecks2('none');
    setborderofchecks3('none');
    setindex1("1")
    setindex2("2")
    setindex3("3")
    setcheckboxdisplay1('none');
    setcheckboxdisplay2('none');
    setcheckboxdisplay3('none');
    setcheckboxcolor1('#2d313d');
    setcheckboxcolor2('#2d313d');
    setcheckboxcolor3('#2d313d');
  }

  const checkStepContent = (data: any) => {
    if (data === 'Step 1 Content') {
      setstepContent('Step 2 Content');
      setline1Color('white');
      setborderofchecks2('2px solid white');
      setborderofchecks1('none');
      setcheckboxdisplay1('flex');
      setindex1('');
      setcheckboxcolor1("#36a168");
    }
    else if (data === 'Step 2 Content') {
      setstepContent('Step 3 Content');
      setline2Color('white');
      setborderofchecks3('2px solid white');
      setborderofchecks2('none');
      setcheckboxdisplay2('flex');
      setindex2('');
      setcheckboxcolor2("#36a168");
    }
    else if (data === 'Step 3 Content') {
      setstepContent('All Done! Reset to Play Again');
      setreset('flex');
      setseconddiv('#19212b');
      setprevbtndisable("disable");
      setnextbtndisable('disable');
      setborderofchecks1('none');
      setborderofchecks2('none');
      setborderofchecks3('none');
      setcheckboxdisplay3('flex');
      setindex3('');
      setcheckboxcolor3("#36a168");
    }
    else if (data === "remove All Done! Reset to Play Again") {
      setstepContent('Step 3 Content');
      setreset('none');
      setseconddiv('#2b3746');
    }
    else if (data === "remove Step 3 Content") {
      setstepContent('Step 2 Content');
      setline2Color('#454a54');
      setborderofchecks2('2px solid white');
      setborderofchecks3('none');
      setcheckboxdisplay2('none');
      setindex2('2');
      setcheckboxcolor2("#2d313d");
    }
    else if (data === "remove Step 2 Content") {
      setstepContent('Step 1 Content');
      setline1Color('#454a54');
      setborderofchecks1('2px solid white');
      setborderofchecks2('none');
      setcheckboxdisplay1('none')
      setindex1('1');
      setcheckboxcolor1("#2d313d");
    }
  }
  return (
    <ChakraProvider>

      <Stack px={{base:'0.8rem' , md:'1.3rem'}} pb={{base:'0.1rem' , md:'0'}} w={{base:'70%' , md:'62%'}} height={{base:'55%' , md:'42%'}} bg='#19212b' >

        <Flex justifyContent='space-between' h='32%' >
          <Flex color='white' justifyContent='center' alignItems='center'>
            <Flex w={{base:'8' , md:'10'}} h={{base:'8' , md:'10'}} borderRadius='50%' backgroundColor='#2c313d' alignItems='center' border={borderofchecks1} justifyContent='center' bg={checkboxcolor1} ><CheckIcon bg={'#36a168'} display={checkboxdisplay1} />{index1}</Flex>
            <Text ml='3' display={{base:'none' , md:'flex'}}>Step 1</Text>
            <Stack direction='row' width={{base:'30px' , md:'210px'}} ml='5'>
              <Divider orientation='horizontal' borderColor={line1Color} />
            </Stack>
          </Flex>
          <Flex color='white' justifyContent='center' alignItems='center'>
            <Flex w={{base:'8' , md:'10'}} h={{base:'8' , md:'10'}} borderRadius='50%' backgroundColor='#2c313d' alignItems='center' border={borderofchecks2} justifyContent='center' bg={checkboxcolor2}><CheckIcon bg={'#36a168'} display={checkboxdisplay2} />{index2}</Flex>
            <Text ml='3' display={{base:'none' , md:'flex' }} >Step 2</Text>
            <Stack direction='row' width={{base:'30px' , md:'210px'}} color='white' ml='5'>
              <Divider orientation='horizontal' borderColor={line2Color} />
            </Stack>
          </Flex>
          <Flex color='white' justifyContent='center' alignItems='center'>
            <Flex w={{base:'8' , md:'10'}} h={{base:'8' , md:'10'}} borderRadius='50%' backgroundColor='#2c313d' alignItems='center' border={borderofchecks3} justifyContent='center' bg={checkboxcolor3} ><CheckIcon bg={'#36a168'} display={checkboxdisplay3} />{index3}</Flex>
            <Text ml='3' display={{base:'none' , md:'flex' }} >Step 3</Text>
          </Flex>
        </Flex>

        <VStack h='50%' >
          <Flex w='100%' h='63%' bg={seconddiv} borderRadius='7' alignItems='center' justifyContent='center' color='white' >
            <Text >{stepContent}
              <br />
              <Button bg='#2c313d' h='8' _hover={{ bg: '#454a54' }} _active={{ bg: '#575c68' }} onClick={defaulChanges} mt='4' mx='auto' display={reset}>Reset</Button>
            </Text>
          </Flex>
          <Flex w='100%' h='33%' alignItems='center' justifyContent={{base:'center' , md:'flex-end'}} color='white' >
            <Button isDisabled={Boolean(prevbtndisable)} bg='#19212b' h='8' color='#585e6c' mr='1' _hover={{ bg: '#2c313d' }} _active={{ bg: '#575c68', color: 'white' }} onClick={() => checkStepContent("remove " + stepContent)}>Prev</Button>
            <Button isDisabled={Boolean(nextbtndisable)} bg='#2c313d' h='8' _hover={{ bg: '#454a54' }} _active={{ bg: '#575c68' }} onClick={() => checkStepContent(stepContent)} >Next</Button>
          </Flex>
        </VStack>

        <VStack h='18%' >
          <Button bg='#2d313d' h='8' w='7.8rem' color='white' _hover={{ bg: '#454a54' }} _active={{ bg: '#575c68' }}><a href="/">Show Code &lt;/&gt; </a></Button>
        </VStack>

      </Stack>

    </ChakraProvider>

  )

}

