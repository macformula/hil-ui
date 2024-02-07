import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@chakra-ui/theme';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App/>
    </ChakraProvider>
  </React.StrictMode>,
)
