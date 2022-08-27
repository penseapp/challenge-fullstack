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
  price?: string
  promo_price?: string
  category?: string
}

interface ProductsContextData {
  products: Product[]
  loadProducts: () => Promise<void>
  createProduct: (data: Omit<Product, 'id'>) => Promise<void>
  deleteProduct: (productId: string) => Promise<void>
  updateProduct: (productId: string, product: Product) => Promise<void>
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

  const loadProducts = useCallback(async () => {
    api
      .get('/products')
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err))
  }, [])

  const createProduct = useCallback(async (data: Omit<Product, 'id'>) => {
    await api
      .post('/products', data)
      .then((response: AxiosResponse<Product>) =>
        setProducts((oldProducts) => [...oldProducts, response.data])
      )
      .catch((err) => console.log(err))
  }, [])

  const deleteProduct = useCallback(
    async (productId: string) => {
      await api
        .delete(`/products/${productId}`)
        .then((_) => {
          const filteredProducts = products.filter(
            (prod) => prod.id !== productId
          )
          setProducts(filteredProducts)
        })
        .catch((err) => console.log(err))
    },
    [products]
  )

  const updateProduct = useCallback(
    async (productId: string, data: Product) => {
      await api
        .patch(`/products/${productId}`, data)
        .then((_) => {
          const filteredProducts = products.filter(
            (prod) => prod.id !== productId
          )
          const product = products.find((prod) => prod.id === productId)

          if (product) {
            setProducts([...filteredProducts, product])
          }
        })
        .catch((err) => console.log(err))
    },
    [products]
  )

  return (
    <ProductsContext.Provider
      value={{
        products,
        loadProducts,
        createProduct,
        deleteProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export { useProducts, ProductsProvider }
