import React from "react";
import { ChakraProvider, Divider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  SimpleGrid,
  Link,
  Image,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Wrap, WrapItem, Center } from "@chakra-ui/react";

export const Layout_01 = () => {
    let bg = [
        "rgb(238,28,37)",
        "rgb(238,28,37)",
        "rgb(248,147,29)",
        "rgb(248,147,29)",
      ];
  return (
    <div>
    
        <Wrap
          spacing="0"
          direction={["column", "column", "row", "row"]}
          gap="0px"
          color="white"
        >
          <WrapItem>
            <Center
              bg={[
                "rgb(0,114,187)",
                "rgb(0,114,187)",
                "rgb(0,114,187)",
                "rgb(0,114,187)",
              ]}
              w="180px"
              h={["80px", "80px", "350px", "350px"]}
            >
              NAV
            </Center>
          </WrapItem>
          <WrapItem>
            <Center
              bg={bg}
              w={["180px", "180px", "300px", "300px"]}
              h={["80px", "80px", "350px", "350px"]}
            >
              CONTENT
            </Center>
          </WrapItem>
          <WrapItem>
            <Center
              bg={[
                "rgb(248,147,29)",
                "rgb(248,147,29)",
                "rgb(238,28,37)",
                "rgb(238,28,37)",
              ]}
              w="180px"
              h={["180px", "180px", "350px", "350px"]}
            >
              WIDGET
            </Center>
          </WrapItem>
        </Wrap>
        {/*  */}
    </div>
  );
};
