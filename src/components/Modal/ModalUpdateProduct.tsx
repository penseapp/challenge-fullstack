import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaClipboard, FaTimes } from 'react-icons/fa'
import * as yup from 'yup'
import { useProducts } from '../../contexts/ProductsContext'
import { theme } from '../../styles/theme'
import { Input } from '../Form/Input'
import { TextArea } from '../Form/TextArea'

interface ProductData {
  id: string
  name: string
  description?: string
  price?: string
  promo_price?: string
  category?: string
}

interface ModalCreateProdProps {
  isOpen: boolean
  onClose: () => void
  product: ProductData
}

const updateProductSchema = yup.object().shape({
  name: yup.string().required('Required Field'),
  description: yup.string(),
  price: yup.string(),
  promo_price: yup.string(),
  category: yup.string(),
})

export const ModalUpdateProduct = ({
  isOpen,
  onClose,
  product,
}: ModalCreateProdProps) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ProductData>({
    resolver: yupResolver(updateProductSchema),
  })

  const { loadProducts, updateProduct } = useProducts()

  const handleUpdateProduct: SubmitHandler<ProductData> = (
    data: ProductData
  ) => {
    updateProduct(product.id, data).then((res) => {
      onClose()
    })
    loadProducts()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        as='form'
        onSubmit={handleSubmit(handleUpdateProduct)}
        padding='2'
        bg='white'
        color='gray.800'
      >
        <ModalHeader display='flex'>
          <Center bg='purple.500' w='30px' h='30px' borderRadius='5px'>
            <FaClipboard color={theme.colors.white} />
          </Center>
          <Text fontWeight='bold' ml='2'>
            Update Product
          </Text>
          <Center
            onClick={onClose}
            as='button'
            ml='auto'
            w='32px'
            h='32px'
            bg='red.600'
            fontSize='lg'
            borderRadius='md'
          >
            <FaTimes color={theme.colors.white} />
          </Center>
        </ModalHeader>
        <ModalBody textAlign='center'>
          <VStack spacing='5'>
            <Input
              label='Name'
              error={errors.name}
              {...register('name')}
              placeholder={product.name}
            />
            <TextArea
              label='Description'
              error={errors.description}
              {...register('description')}
              placeholder={product.description}
            />
            <Input
              label='Price'
              error={errors.price}
              {...register('price')}
              placeholder={product.price}
            />
            <Input
              label='Promotional Price'
              error={errors.promo_price}
              {...register('promo_price')}
              placeholder={product.promo_price}
            />
            <Input
              label='Category'
              error={errors.category}
              {...register('category')}
              placeholder={product.category}
            />
          </VStack>
        </ModalBody>

        <ModalFooter flexDirection='column'>
          <Button
            type='submit'
            bg='purple.500'
            color='white'
            h='60px'
            w='100%'
            _hover={{ bg: 'purple.600' }}
            colorScheme='blue'
            mr={3}
          >
            Save Changes
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
