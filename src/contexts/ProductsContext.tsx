import { AxiosResponse } from 'axios'
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'
import { api } from '../services/api'

interface ProductsProviderProps {
  children: ReactNode
}

interface Product {
  id: string
  name: string
  description?: string
  price?: number
  promo_price?: number
  category?: string
}

interface ProductsContextData {
  products: Product[]
  createProduct: (data: Omit<Product, 'id'>) => Promise<void>
}

const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData
)

const useProducts = () => {
  const context = useContext(ProductsContext)

  if (!context) {
    throw new Error('useProducts must be used within an ProductsProvider')
  }
  return context
}

const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([])

  const createProduct = useCallback(async (data: Omit<Product, 'id'>) => {
    api
      .post('/products', data)
      .then((response: AxiosResponse<Product>) =>
        setProducts((oldProducts) => [...oldProducts, response.data])
      )
      .catch((err) => console.log(err))
  }, [])

  return (
    <ProductsContext.Provider value={{ products, createProduct }}>
      {children}
    </ProductsContext.Provider>
  )
}

export { useProducts, ProductsProvider }
