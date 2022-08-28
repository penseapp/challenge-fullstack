import { Button, Center, Flex, useDisclosure } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { FaSearch } from 'react-icons/fa'
import { useProducts } from '../../contexts/ProductsContext'
import { theme } from '../../styles/theme'
import { ModalCreateProduct } from '../Modal/ModalCreateProduct'
import { Input } from './Input'

interface SearchData {
  title: string
}

export const SearchBox = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { searchProduct } = useProducts()

  const handleSearch = ({ title }: SearchData) => searchProduct(title)

  const { register, handleSubmit } = useForm<SearchData>()

  return (
    <>
      <ModalCreateProduct isOpen={isOpen} onClose={onClose} />
      <Flex
        mt='6'
        w='100%'
        paddingX={['4', '8']}
        paddingY='2'
        paddingBottom='6'
        borderBottomWidth='1px'
        borderColor='gray.50'
        flexDir={['column', 'column', 'row', 'row']}
      >
        <Flex as='form' onSubmit={handleSubmit(handleSearch)}>
          <Input
            placeholder='What are you looking for?'
            w={['100%', '100%', '35vw']}
            {...register('title')}
          />
          <Center
            borderRadius='8px'
            as='button'
            ml='2'
            w='65px'
            h='60px'
            fontSize='2xl'
            bg='purple.600'
          >
            <FaSearch color={theme.colors.white} />
          </Center>
        </Flex>
        <Button
          bg='purple.500'
          color='white'
          paddingX='16'
          ml={['0', '0', '4']}
          h='60px'
          borderRadius='8px'
          onClick={onOpen}
          mt={['4', '4', '0']}
          _hover={{ bg: 'purple.600' }}
        >
          Add new product
        </Button>
      </Flex>
    </>
  )
}
