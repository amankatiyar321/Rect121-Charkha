import { Flex, Square, Box, Center, Text, Image } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Input,InputGroup,InputRightElement } from '@chakra-ui/react'
import React from "react";

export const SearchBar = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div marginTop="100px">
      <Box width="40%" marginTop={"100px"} margin="auto" marginBottom='50px'>
        <Center>
          <Text margin='2px' color='black' fontSize='43px' fontWeight='bold'>Find The Right</Text>
        </Center>
        <Center>
        <Text fontWeight='bold' fontSize='43px' color="purple">Four-Day</Text> 
          <Text color='black' fontSize='43px' margin='8px' fontWeight='bold'>Week Job</Text>
        </Center>
        <Center>
          <InputGroup size="md"  margin='10px'>
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Serach Job . . . . . ."
              padding='20px'
              border="2px solid red"
            />
            <InputRightElement width="4.5rem">
              <Button h="2rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Center>
        <Center marginTop='10px'>
        <Button colorScheme='purple' w='100px' marginLeft='5px' padding='15px'>Remote</Button>
        <Button colorScheme='purple' w='100px' marginLeft='5px' padding='15px'>{"<> Tech"}</Button>
        <Button colorScheme='purple' w='100px' marginLeft='5px' padding='15px'>Marketing</Button>
        </Center>
      </Box>
    </div>
  );
};
