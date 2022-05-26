

import React from 'react'
import { GridItem,Center,Grid } from '@chakra-ui/react'
export const Layout_02 = () => {
  return (
    <div>
        


<Center>
        <Grid
  h='200px'
  templateRows={['1fr 1fr 1fr','repeat(3, 1fr)']}
  templateColumns={['1','repeat(3, 1fr)']}
  m={20}
  column={[1,3]}
  gap="0px"
  direction={["row","column"]}
>
  <GridItem w={[300,300]} h={[300,200]} colSpan={[1,2]} rowSpan={[1,2]}  bg='purple.400' />
  <GridItem w={[300,200]} h={[300,300]} colSpan={[1,1]} rowSpan={[1,3]}  bg='tomato' />
  <GridItem w={[300,300]} h={[300,100]} colSpan={[1,2]} rowSpan={[1,1]}  bg='skyblue' />

</Grid>
</Center> 
        
    </div>
  )
}