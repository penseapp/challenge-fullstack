import {
  Badge,
  Box,
  chakra,
  Flex,
  Icon,
  Image,
  Stack,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { FaHeart } from 'react-icons/fa'
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
  wish?: boolean
}

export const Card = ({ product, wish }: ProductProps) => {
  const { deleteProduct, addToWishlist, delFromWishlist } = useProducts()
  const { isAdm } = useAuth()

  const data = {
    isAdm: wish ? true : isAdm,
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
              {data.isAdm && !wish && (
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
                  left={75}
                  bg='green.200'
                >
                  Edit
                </Badge>
              )}
              {data.isAdm && (
                <Badge
                  onClick={
                    wish
                      ? () => delFromWishlist(product)
                      : () => deleteProduct(product.id)
                  }
                  as='button'
                  rounded='full'
                  px='2'
                  fontSize='0.8em'
                  colorScheme='red'
                  size='10px'
                  position='absolute'
                  top={2}
                  left={2}
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
              <Stack maxW='90%'>
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
              </Stack>

              <chakra.a as='button' display={'flex'}>
                <Icon
                  as={FaHeart}
                  onClick={() => addToWishlist(product)}
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
