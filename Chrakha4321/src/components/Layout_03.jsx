// import React from "react";
// import { Grid, GridItem } from '@chakra-ui/react'

// export const Layout_03 = () => {
//   return (
//     <div>
//       <Grid
//         h="200px"
//         templateRows="repeat(16, 1fr)"
//         templateColumns="repeat(5, 1fr)"
//         gap={4}
//       >
//         <GridItem rowSpan={8} colSpan={1} bg="tomato" />
//         <GridItem colSpan={2} bg="papayawhip" />
//         <GridItem colSpan={2} bg="papayawhip" />
//         <GridItem colSpan={4} bg="tomato" />
//       </Grid>
//     </div>
//   );
// };

//

import React from "react";
import { Center, Stack, Box } from "@chakra-ui/react";

export const Layout_03 = () => {
  return (
    <div>
      <Center>
        <Stack gap={"0px"} m={20} direction={"column"} spacing="20">
          <Stack direction={["column", "row"]}>
            <Box w={300} h={[100, 200]} bg="yellow.400"></Box>
            <Box w={300} h={[100, 200]} bg="yellow.400"></Box>
          </Stack>

          <Box w={[300, 600]} h={[200,200]} bg="red.500"></Box>

          <Stack direction={["column", "row"]}>
            <Box w={[300,200]} h={[100, 200]} bg="purple.400"></Box>
            <Box w={[300,200]} h={[100, 200]} bg="purple.400"></Box>
            <Box w={[0,0,200,200]} h={[100, 200]} bg="purple.400"></Box>
          </Stack>
        </Stack>
      </Center>
    </div>
  );
};
