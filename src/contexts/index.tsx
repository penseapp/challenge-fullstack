import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { theme } from '../styles/theme'
import { AuthProvider } from './AuthContext'
import { ProductsProvider } from './ProductsContext'

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <ChakraProvider theme={theme}>
    <AuthProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </AuthProvider>
  </ChakraProvider>
)
