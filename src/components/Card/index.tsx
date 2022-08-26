import { Box, Center, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import { FaCheck, FaTrash } from 'react-icons/fa'
import { theme } from '../../styles/theme'

export const Card = () => {
  return (
    <Box
      cursor='pointer'
      _hover={{ transform: 'translateY(-7px)', borderColor: 'gray.100' }}
      borderWidth='1px'
      borderColor='gray.50'
      boxShadow='base'
      padding='7'
      w={['330px', 'auto']}
    >
      <Flex justify='space-between'>
        <Heading>Studying database-driven concepts</Heading>
        <HStack spacing='4'>
          <Center
            as='button'
            w='30px'
            h='30px'
            borderWidth='1px'
            borderRadius='5px'
            borderColor='gray.200'
            bgColor='white'
          >
            <FaTrash color={theme.colors.gray[300]} />
          </Center>
          <Center
            as='button'
            w='30px'
            h='30px'
            borderWidth='1px'
            borderRadius='5px'
            borderColor='gray.200'
            bgColor='white'
          >
            <FaCheck color='gray.200' />
          </Center>
        </HStack>
      </Flex>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, enim!
      </Text>
    </Box>
  )
}
