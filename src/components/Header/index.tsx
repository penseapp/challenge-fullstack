import { Center, Flex, Heading, Image, useDisclosure } from '@chakra-ui/react'
import { FaTh } from 'react-icons/fa'
import Logo from '../../assets/logo.png'
import { theme } from '../../styles/theme'
import { Menu } from './Menu'

interface HeaderProps {
  title: string
}

export const Header = ({title}: HeaderProps) => {
  const { isOpen, onClose, onToggle } = useDisclosure()

  return (
    <Flex
      borderBottom='1px'
      borderBottomColor='#f5f5f5'
      paddingX='8'
      paddingY='2'
    >
      <Flex align='center'>
        <Image src={Logo} mr={3} boxSize='60px' />
        <Heading>{title}</Heading>
      </Flex>
      <Center ml='auto' onClick={onToggle} as='button' fontSize='2rem'>
        <FaTh color={theme.colors.gray[300]} />
      </Center>
      <Menu isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}
