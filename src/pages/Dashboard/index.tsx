import {
  Box,
  Button,
  Center,
  Grid,
  Heading,
  Skeleton,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FaClipboard, FaStore } from 'react-icons/fa'
import { Card } from '../../components/Card'
import { SearchBox } from '../../components/Form/SearchBox'
import { Header } from '../../components/Header'
import { ModalCreateProduct } from '../../components/Modal/ModalCreateProduct'
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
  const { products, loadProducts, notFound, prodNotFound } = useProducts()

  useEffect(() => {
    loadProducts().then((res) => setLoading(false))
  }, [])

  const {
    isOpen: isCreateProdOpen,
    onOpen: onCreateProdOpen,
    onClose: onCreateProdClose,
  } = useDisclosure()

  if (notFound) {
    return (
      <>
        <Box>
          <Header />
          <SearchBox />
          <Center mt='4' textAlign='center' display='flex' flexDir='column'>
            <Heading size='lg'>No results were found for: </Heading>
            <Text fontSize='xl' color='gray.300' fontWeight='bold'>
              {prodNotFound}
            </Text>
            <Box
              mt='6'
              w={['80%', '30%']}
              padding='6'
              boxShadow='base'
              bg='white'
            >
              <Stack>
                <Skeleton
                  startColor='gray.100'
                  endColor='gray.200'
                  height='20px'
                  borderRadius='20px'
                  w='80%'
                />
                <Skeleton
                  startColor='gray.100'
                  endColor='gray.200'
                  height='15px'
                  borderRadius='15px'
                  w='60%'
                />
              </Stack>
              <Stack mt='8'>
                <Skeleton
                  startColor='gray.100'
                  endColor='gray.200'
                  height='20px'
                  borderRadius='20px'
                />
                <Skeleton
                  startColor='gray.100'
                  endColor='gray.200'
                  height='15px`'
                  borderRadius='15px'
                />
              </Stack>
            </Box>
          </Center>
        </Box>
      </>
    )
  }

  return (
    <>
      {!loading && !products.length ? (
        <>
          <ModalCreateProduct
            isOpen={isCreateProdOpen}
            onClose={onCreateProdClose}
          />
          <Header />
          <Box
            mt='4'
            w='90vw'
            paddingY='16'
            paddingX={['6', '0']}
            ml='5vw'
            justifyContent='center'
            textAlign='center'
            borderWidth='2px'
            borderColor='gray.200'
            borderStyle='dashed'
          >
            <Center>
              <FaStore color='#bdbdbd' />
            </Center>
            <Heading fontSize='2xl' as='h1' mt='4'>
              Vamos criar sua primeira tarefa
            </Heading>
            <Text color='grey.400' mt='6'>
              Insira sua meta e mostra a voce mesmo <br /> capacidade em cumprir{' '}
              <Text fontWeight='bold' color='gray.900'>
                suas atividades.
              </Text>
            </Text>
            <Button
              padding='6'
              mt='6'
              bgColor='purple.800'
              color='white'
              _hover={{ bg: 'purple.900' }}
              onClick={onCreateProdOpen}
            >
              Crie seu primeiro produto
            </Button>
          </Box>
        </>
      ) : (
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
      )}
    </>
  )
}
