import { ChakraProvider, Divider } from "@chakra-ui/react";
import { Layout_01 } from "./components/Layout_01";
import { Layout_02 } from "./components/Layout_02";
import { Layout_03 } from "./components/Layout_03";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Layout_01 />
        <br />
        <hr color="black" />
        <br />
        <Layout_02 />
        <br />
        <hr color="2px solid black" />
        <br />
        <Layout_03 />
      </ChakraProvider>
    </div>
  );
}

export default App;
