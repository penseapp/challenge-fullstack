import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react'
import { useAuth } from '../../contexts/AuthContext'
import { theme } from '../../styles/theme'
import { FiLogOut } from 'react-icons/fi'
import { FaEdit, FaStore } from 'react-icons/fa'

interface MenuProps {
  isOpen: boolean
  onClose: () => void
}

export const Menu = ({ isOpen, onClose }: MenuProps) => {
  const { user, signOut } = useAuth()

  return (
    <Drawer placement='top' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay mt='8vh' />
      <DrawerContent ml='auto' mt='80px' w={['450px', '350px']}>
        <DrawerHeader
          borderBottomWidth='1px'
          borderColor='gray.50'
          color='gray.500'
        >
          Welcome, {user.name}
        </DrawerHeader>
        <DrawerBody>
          <Flex
            mb={2}
            align='center'
            onClick={signOut}
            _hover={{ cursor: 'pointer' }}
          >
            <Center
              w='60px'
              h='60px'
              bg='purple.600'
              fontSize='2xl'
              borderRadius='md'
            >
              <FaStore color={theme.colors.white} />
            </Center>
            <Box ml='4'>
              <Heading as='h2' fontSize='lg'>
                Products
              </Heading>
              <Text color='gray.300' fontSize='small'>
                Main display
              </Text>
            </Box>
          </Flex>
          <Flex
            mb={2}
            align='center'
            onClick={signOut}
            _hover={{ cursor: 'pointer' }}
          >
            <Center
              w='60px'
              h='60px'
              bg='gray.600'
              fontSize='2xl'
              borderRadius='md'
            >
              <FaEdit color={theme.colors.white} />
            </Center>
            <Box ml='4'>
              <Heading as='h2' fontSize='lg'>
                Admin Panel
              </Heading>
              <Text color='gray.300' fontSize='small'>
                Manage your products
              </Text>
            </Box>
          </Flex>
          <Flex align='center' onClick={signOut} _hover={{ cursor: 'pointer' }}>
            <Center
              w='60px'
              h='60px'
              bg='red.600'
              fontSize='2xl'
              borderRadius='md'
            >
              {' '}
              <FiLogOut color={theme.colors.white} />
            </Center>
            <Box ml='4'>
              <Heading as='h2' fontSize='lg'>
                Logout
              </Heading>
              <Text color='gray.300' fontSize='small'>
                Logout of your account immediately
              </Text>
            </Box>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
