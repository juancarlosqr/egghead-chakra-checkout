import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '@/styles/theme'
import '@/styles/styles.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
