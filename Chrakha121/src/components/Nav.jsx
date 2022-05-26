import { Flex, Box, Center, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";

export const Nav = () => {
  return (
    <div>
      <Flex h="30" marginTop='10px' width="100%" marginBottom='100px'>
        <Center w="20%" textAlign="left">
          <Box bg='#805ad5' color='white' width='30px' height='30px' textAlign='center' fontSize='20px' marginLeft='-150px' borderRadius='2px'>
            4d
          </Box>
        </Center>
        <Center width="55%" bg="white" size="150px">
          <Text></Text>
        </Center>
        <Flex width="25%" justifyContent="space-around">
          <Center>
            <Button colorScheme="gray" fontWeight='400' variant="ghost">
              SignIn
            </Button>
          </Center>
          <Center>
            <Button colorScheme="teal" color={'gray'} variant="outline">
              SignUp
            </Button>
          </Center>
          <Center>
            <Button colorScheme="purple" color={'white'} variant="solid">
             Rocket 🚀
            </Button>
          </Center>
        </Flex>
      </Flex>
    </div>
  );
};
