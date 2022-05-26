import React from "react";
import {
  VStack,
  Box,
  StackDivider,
  Center,
  Text,
  Flex,
} from "@chakra-ui/react";

export const Todo = () => {
  return (
    <div>
      <Box width="70%" textAlign="left" marginBottom="20px">
        <Center>
          <Text
            textAlign="left"
            fontSize={"40px"}
            color="Purple"
            fontWeight="bold"
          >
            Recent
          </Text>
          <Text
            textAlign="left"
            fontSize={"40px"}
            color="black"
            fontWeight="bold"
          >
            Jobs
          </Text>
        </Center>
      </Box>
      <Center>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={1}
          align="stretch"
          width="50%"
        >
          <Box h="100px" borderRadius="3px" bg="yellow.200">
            <Flex h="100%" border={"2px solid purple"} borderRadius="6px">
              <Center w="200px" bg="white">
                <Box>
                  <Text color="purple" fontWeight="bold">
                    Talewind Talewind
                  </Text>
                  <Text color={"black"} fontSize="13px" fontWeight='bold' w="80%" margin="auto">
                    {" "}
                    Lead Producer £50k - £65k
                  </Text>
                </Box>
              </Center>
              <Center w="100px" bg="white">
                <Text></Text>
              </Center>
              <Center w="100px" bg="white">
                <Text></Text>
              </Center>
              <Center w="100px" bg="white">
                <Text></Text>
              </Center>
              <Center w="100px" bg="white">
                <Text></Text>
              </Center>
              <Center w="200px" bg="white" color="purple" fontWeight="bold">
                <Text color="black">Full Time</Text>
              </Center>
            </Flex>
          </Box>
          {/*  */}
          <Box h="100px" borderRadius="3px" bg="yellow.200">
            <Flex h="100%" border={"2px solid purple"} borderRadius="6px">
              <Center w="200px" bg="white">
                <Box>
                  <Text color="purple" fontWeight="bold">
                    Talewind Talewind
                  </Text>
                  <Text color={"black"} fontSize="13px" fontWeight='bold' w="80%" margin="auto">
                    {" "}
                    Lead Producer £50k - £65k
                  </Text>
                </Box>
              </Center>
              <Center w="100px" bg="white">
                <Text></Text>
              </Center>
              <Center w="100px" bg="white">
                <Text></Text>
              </Center>
              <Center w="100px" bg="white">
                <Text></Text>
              </Center>
              <Center w="100px" bg="white">
                <Text></Text>
              </Center>
              <Center w="200px" bg="white" color="purple" fontWeight="bold">
                <Text color="black">Full Time</Text>
              </Center>
            </Flex>
          </Box>
          {/*  */}
          <Box h="100px" borderRadius="3px" bg="yellow.200">
            <Flex h="100%" border={"2px solid purple"} borderRadius="6px">
              <Center w="200px" bg="white">
                <Box>
                  <Text color="purple" fontWeight="bold" fontSize="17px">
                    Talewind Talewind
                  </Text>
                  <Text color={"black"} fontSize="13px" fontWeight='bold'  w="80%" margin="auto">
                    {" "}
                    Lead Producer £50k - £65k
                  </Text>
                </Box>
              </Center>
              <Center w="100px" bg="white">
                <Text></Text>
              </Center>
              <Center w="100px" bg="white">
                <Text></Text>
              </Center>
              <Center w="100px" bg="white">
                <Text></Text>
              </Center>
              <Center w="100px" bg="white">
                <Text></Text>
              </Center>
              <Center w="200px" bg="white" color="purple" fontWeight="bold">
                <Text color="black">Full Time</Text>
              </Center>
            </Flex>
          </Box>
        </VStack>
      </Center>
    </div>
  );
};
