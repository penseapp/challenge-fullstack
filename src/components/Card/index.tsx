import {
  Badge,
  Box,
  chakra,
  Flex,
  Icon,
  Image,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi'
import { useAuth } from '../../contexts/AuthContext'
import { useProducts } from '../../contexts/ProductsContext'
import { theme } from '../../styles/theme'
import { ModalUpdateProduct } from '../Modal/ModalUpdateProduct'

interface Product {
  id: string
  name: string
  description?: string
  price?: string
  promo_price?: string
  category?: string
}

interface ProductProps {
  product: Product
}

export const Card = ({ product }: ProductProps) => {
  const { deleteProduct } = useProducts()
  const { isAdm } = useAuth()

  const data = {
    isAdm: isAdm,
    imageURL:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: product.name,
    category: product.category || 'Uncategorized',
    description: product.description,
    price: product.price,
    promo_price: product.promo_price,
  }

  const {
    isOpen: isProductUpdateOpen,
    onOpen: onProductUpdateOpen,
    onClose: onProductUpdateClose,
  } = useDisclosure()

  return (
    <>
      <ModalUpdateProduct
        isOpen={isProductUpdateOpen}
        onClose={onProductUpdateClose}
        product={product}
      />
      <Flex p={50} w='full' alignItems='center' justifyContent='center'>
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW='sm'
          borderWidth='1px'
          rounded='lg'
          shadow='lg'
          position='relative'
        >
          <Image
            src={data.imageURL}
            alt={`Picture of ${data.name}`}
            roundedTop='lg'
          />

          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              {data.isAdm && (
                <Badge
                  onClick={onProductUpdateOpen}
                  as='button'
                  rounded='full'
                  px='4'
                  fontSize='0.8em'
                  colorScheme='green'
                  size='10px'
                  position='absolute'
                  top={2}
                  left={2}
                  bg='green.200'
                >
                  Edit
                </Badge>
              )}
              {data.isAdm && (
                <Badge
                  onClick={() => deleteProduct(product.id)}
                  as='button'
                  rounded='full'
                  px='2'
                  fontSize='0.8em'
                  colorScheme='red'
                  size='10px'
                  position='absolute'
                  top={2}
                  left={75}
                  bg='red.200'
                >
                  Delete
                </Badge>
              )}
            </Box>
            <Box display='flex' alignItems='baseline'>
              {data.category && (
                <Badge
                  rounded='full'
                  px='2'
                  fontSize='0.8em'
                  colorScheme='purple'
                  size='10px'
                  position='absolute'
                  top={2}
                  right={2}
                  bg='purple.200'
                >
                  {data.category}
                </Badge>
              )}
            </Box>
            <Flex mt='1' justifyContent='space-between' alignContent='center'>
              <VStack>
                <Box
                  fontSize='2xl'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'
                  textTransform='uppercase'
                >
                  {data.name}
                </Box>
                <Box fontSize='sm' as='h4' lineHeight='tight'>
                  {data.description}
                </Box>
              </VStack>

              <chakra.a href={'#'} display={'flex'}>
                <Icon
                  as={FiShoppingCart}
                  color={theme.colors.purple[500]}
                  h={7}
                  w={7}
                  alignSelf={'center'}
                />
              </chakra.a>
            </Flex>

            <Flex justifyContent='space-between' alignContent='center'>
              <Box color={useColorModeValue('gray.800', 'white')}>
                {Number(data.promo_price) > 0 ? (
                  <>
                    <Box
                      paddingRight='2'
                      as='del'
                      color={'red.600'}
                      fontSize='sm'
                    >
                      ${Number(data.price).toFixed(2)}
                    </Box>
                    <Box as='span' color={'gray.600'} fontSize='xl'>
                      ${Number(data.promo_price).toFixed(2)}
                    </Box>
                  </>
                ) : (
                  <Box as='span' color={'gray.600'} fontSize='lg'>
                    ${Number(data.price).toFixed(2)}
                  </Box>
                )}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  )
}
