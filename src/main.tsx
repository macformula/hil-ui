import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react';
// import theme from '@chakra-ui/theme';
// testing github

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ChakraProvider>
      <App/>
    </ChakraProvider>
)
