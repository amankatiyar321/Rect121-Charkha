

import {ChakraProvider} from "@chakra-ui/react"
import './App.css'
import { Nav } from './components/Nav'
import { SearchBar } from './components/SearchBar'
import { Todo } from './components/Todo'

function App() {

  return (
    <ChakraProvider>
    <div className="App">
     <Nav/>
     <SearchBar/>
     <Todo/>
    </div>
    </ChakraProvider>
  )
}

export default App