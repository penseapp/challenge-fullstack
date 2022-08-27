import { Box, Grid, useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import { SearchBox } from '../../components/Form/SearchBox'
import { Header } from '../../components/Header'
import { ModalUpdateProduct } from '../../components/Modal/ModalUpdateProduct'
import { useProducts } from '../../contexts/ProductsContext'

interface Product {
  name: string
  description: string
  price: string
  promo_price: string
  category: string
}

export const Dashboard = () => {
  const [loading, setLoading] = useState(true)
  const { products, loadProducts } = useProducts()

  const [selectedProduct, setSelectedProduct] = useState({} as Product)

  useEffect(() => {
    loadProducts().then((res) => setLoading(false))
  }, [])

  return (
    <>
      <Box>
        <Header />
        <SearchBox />

        <Grid
          w='100%'
          templateColumns='repeat(auto-fill, minmax(420px, 1fr))'
          gap={8}
          paddingX='8'
          mt='8'
        >
          {products.map((product, index) => (
            <Card product={product} key={index} />
          ))}
        </Grid>
      </Box>
    </>
  )
}
