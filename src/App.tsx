import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { Layout } from './components/Layout'
import {Card} from './components/Card'

function App() {
  return (
    <ChakraProvider>
      <Layout>
      <Card title='Faça o Login'/>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
