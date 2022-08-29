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
import { FaClipboard, FaDollarSign, FaTimes } from 'react-icons/fa'
import * as yup from 'yup'
import { useProducts } from '../../contexts/ProductsContext'
import { theme } from '../../styles/theme'
import { Input } from '../Form/Input'
import { TextArea } from '../Form/TextArea'

interface ModalCreateProdProps {
  isOpen: boolean
  onClose: () => void
}

interface ProductData {
  id?: string
  name: string
  description: string
  price: string
  promo_price: string
  category: string
  status: boolean
}

const createProductSchema = yup.object().shape({
  name: yup.string().required('Required Field'),
  description: yup.string(),
  price: yup.string(),
  promo_price: yup.string(),
  category: yup.string(),
})

export const ModalCreateProduct = ({
  isOpen,
  onClose,
}: ModalCreateProdProps) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ProductData>({
    resolver: yupResolver(createProductSchema),
  })

  const { createProduct } = useProducts()

  const handleCreateProduct: SubmitHandler<ProductData> = (
    data: ProductData
  ) => {
    data.status = true
    createProduct(data).then((res) => onClose())
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        as='form'
        onSubmit={handleSubmit(handleCreateProduct)}
        padding='2'
        bg='white'
        color='gray.800'
      >
        <ModalHeader display='flex'>
          <Center bg='purple.500' w='30px' h='30px' borderRadius='5px'>
            <FaClipboard color={theme.colors.white} />
          </Center>
          <Text fontWeight='bold' ml='2'>
            Add a product
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
              placeholder='What is the product name?'
            />
            <TextArea
              label='Description'
              error={errors.description}
              {...register('description')}
              placeholder='What is the product description?'
            />

            <Input
              icon={FaDollarSign}
              label='Price'
              error={errors.price}
              {...register('price')}
              placeholder='What is the product price?'
            />
            <Input
              icon={FaDollarSign}
              label='Promotional Price'
              error={errors.promo_price}
              {...register('promo_price')}
              placeholder='Have a promotional price?'
            />
            <Input
              label='Category'
              error={errors.category}
              {...register('category')}
              placeholder='What is the product category?'
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
            Add product
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
