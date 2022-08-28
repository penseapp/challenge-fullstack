import { AxiosResponse } from 'axios'
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'
import { api } from '../services/api'
import { toast } from 'react-toastify'

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
  addToWishlist: (product: Product) => void
  delFromWishlist: (product: Product) => void
  searchProduct: (productName: string) => Promise<void>
  createProduct: (data: Omit<Product, 'id'>) => Promise<void>
  updateProduct: (productId: string, product: Product) => Promise<void>
  deleteProduct: (productId: string) => Promise<void>
  notFound: Boolean
  prodNotFound: string
  wishlist: Product[]
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
  const [notFound, setnotFound] = useState(false)
  const [prodNotFound, setProdNotFound] = useState('')

  const [wishlist, setWishlist] = useState(() => {
    try {
      const wishlist = localStorage.getItem('@Penseapp:wishlist')

      if (!wishlist) {
        return []
      }

      return JSON.parse(wishlist) as Product[]
    } catch {
      return []
    }
  })

  const addToWishlist = (product: Product) => {
    setWishlist([...wishlist, product])
    localStorage.setItem('@Penseapp:wishlist', JSON.stringify(wishlist))
    toast.success(`${product.name} added to your wishlist`)
    console.log(wishlist)
  }

  const delFromWishlist = (product: Product) => {
    const newWishlist = wishlist.filter((prod) => prod.id !== product.id)
    setWishlist(newWishlist)
    localStorage.setItem('@Penseapp:wishlist', JSON.stringify(newWishlist))
    toast.success(`${product.name} removed from your wishlist`)
    console.log(wishlist)
  }

  const loadProducts = useCallback(async () => {
    api
      .get('/products')
      .then((response) => setProducts(response.data))
      .catch((err) => toast.error(err.message))
  }, [])

  const searchProduct = useCallback(async (productName: string) => {
    const response = await api.get(`/products?name_like=${productName}`)

    if (!response.data.length) {
      setProdNotFound(productName)
      return setnotFound(true)
    }

    setnotFound(false)
    setProducts(response.data)
  }, [])

  const createProduct = useCallback(async (data: Omit<Product, 'id'>) => {
    await api
      .post('/products', data)
      .then((response: AxiosResponse<Product>) =>
        setProducts((oldProducts) => [...oldProducts, response.data])
      )
      .catch((err) => toast.error(err.message))
  }, [])

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

          loadProducts()
        })
        .catch((err) => toast.error(err.message))
    },
    [products]
  )

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
        .catch((err) => toast.error(err.message))
    },
    [products]
  )

  return (
    <ProductsContext.Provider
      value={{
        products,
        loadProducts,
        searchProduct,
        createProduct,
        updateProduct,
        deleteProduct,
        notFound,
        prodNotFound,
        addToWishlist,
        delFromWishlist,
        wishlist,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export { useProducts, ProductsProvider }
