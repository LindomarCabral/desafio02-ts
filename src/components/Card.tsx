import { 
  Center,
  Input,
  Box  
} from '@chakra-ui/react'
import { login } from '../services/login';
import {Button} from './Button/Button'

interface ICard {
  title: string  
}
export const Card = ({ title }: ICard) => {
  return(
    <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>{title}</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <Button onClick={login}> 
            Entrar        
            </Button>
          </Center>
        </Box>
      </Box>
  )
}