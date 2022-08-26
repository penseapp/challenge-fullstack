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

interface ModalCreateProdProps {
  isOpen: boolean
  onClose: () => void
}

interface ProductData {
  name: string
  description: string
  price: number
  promo_price: number
  category: string
}

const createProductSchema = yup.object().shape({
  name: yup.string().required('Campo Obrigatorio'),
  description: yup.string(),
  price: yup.number(),
  promo_price: yup.number(),
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
    createProduct(data)
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
            Adicionar
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
              label='Nome'
              error={errors.name}
              {...register('name')}
              placeholder='Digite o nome do produto'
            />
            <TextArea
              label='description'
              error={errors.description}
              {...register('description')}
              placeholder='Digite o description do produto'
            />
            <Input
              label='price'
              error={errors.price}
              {...register('price')}
              placeholder='Digite o price do produto'
            />
            <Input
              label='promo_price'
              error={errors.promo_price}
              {...register('promo_price')}
              placeholder='Digite o preco promocional do produto'
            />
            <Input
              label='category'
              error={errors.category}
              {...register('category')}
              placeholder='Digite a categoria do produto'
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
            Adicionar Produto
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
